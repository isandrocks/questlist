<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { Renderer, Program, Mesh, Color, Triangle } from 'ogl'

const props = defineProps({
  scale: { type: Number, default: 1 },
  gridMul: { type: Array, default: () => [2, 1] },
  digitSize: { type: Number, default: 1.5 },
  timeScale: { type: Number, default: 0.3 },
  pause: { type: Boolean, default: false },
  scanlineIntensity: { type: Number, default: 0.3 },
  glitchAmount: { type: Number, default: 1 },
  flickerAmount: { type: Number, default: 1 },
  noiseAmp: { type: Number, default: 0.5 },
  chromaticAberration: { type: Number, default: 0 },
  dither: { type: [Number, Boolean], default: 0 },
  curvature: { type: Number, default: 0.2 },
  tint: { type: String, default: '#ffffff' },
  mouseReact: { type: Boolean, default: true },
  mouseStrength: { type: Number, default: 0.2 },
  dpr: { type: Number, default: () => (typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1) },
  pageLoadAnimation: { type: Boolean, default: true },
  brightness: { type: Number, default: 1 }
})

const container = ref(null)
let renderer, program, mesh, rafId, resizeObserver
const mouse = { x: 0.5, y: 0.5 }
const smoothMouse = { x: 0.5, y: 0.5 }
let frozenTime = 0
let loadAnimationStart = 0
const timeOffset = Math.random() * 100

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragmentShader = `
precision mediump float;

varying vec2 vUv;

uniform float iTime;
uniform vec3  iResolution;
uniform float uScale;

uniform vec2  uGridMul;
uniform float uDigitSize;
uniform float uScanlineIntensity;
uniform float uGlitchAmount;
uniform float uFlickerAmount;
uniform float uNoiseAmp;
uniform float uChromaticAberration;
uniform float uDither;
uniform float uCurvature;
uniform vec3  uTint;
uniform vec2  uMouse;
uniform float uMouseStrength;
uniform float uUseMouse;
uniform float uPageLoadProgress;
uniform float uUsePageLoadAnimation;
uniform float uBrightness;

float time;

float hash21(vec2 p){
  p = fract(p * 234.56);
  p += dot(p, p + 34.56);
  return fract(p.x * p.y);
}

float noise(vec2 p)
{
  return sin(p.x * 10.0) * sin(p.y * (3.0 + sin(time * 0.090909))) + 0.2; 
}

mat2 rotate(float angle)
{
  float c = cos(angle);
  float s = sin(angle);
  return mat2(c, -s, s, c);
}

float fbm(vec2 p)
{
  p *= 1.1;
  float f = 0.0;
  float amp = 0.5 * uNoiseAmp;
  
  mat2 modify0 = rotate(time * 0.02);
  f += amp * noise(p);
  p = modify0 * p * 2.0;
  amp *= 0.454545;
  
  mat2 modify1 = rotate(time * 0.02);
  f += amp * noise(p);
  p = modify1 * p * 2.0;
  amp *= 0.454545;
  
  mat2 modify2 = rotate(time * 0.08);
  f += amp * noise(p);
  
  return f;
}

float pattern(vec2 p, out vec2 q, out vec2 r) {
  vec2 offset1 = vec2(1.0);
  vec2 offset0 = vec2(0.0);
  mat2 rot01 = rotate(0.1 * time);
  mat2 rot1 = rotate(0.1);
  
  q = vec2(fbm(p + offset1), fbm(rot01 * p + offset1));
  r = vec2(fbm(rot1 * q + offset0), fbm(q + offset0));
  return fbm(p + r);
}

float digit(vec2 p){
    vec2 grid = uGridMul * 15.0;
    vec2 s = floor(p * grid) / grid;
    p = p * grid;
    vec2 q, r;
    float intensity = pattern(s * 0.1, q, r) * 1.3 - 0.03;
    
    if(uUseMouse > 0.5){
        vec2 mouseWorld = uMouse * uScale;
        float distToMouse = distance(s, mouseWorld);
        float mouseInfluence = exp(-distToMouse * 8.0) * uMouseStrength * 10.0;
        intensity += mouseInfluence;
        
        float ripple = sin(distToMouse * 20.0 - iTime * 5.0) * 0.1 * mouseInfluence;
        intensity += ripple;
    }
    
    if(uUsePageLoadAnimation > 0.5){
        float cellRandom = fract(sin(dot(s, vec2(12.9898, 78.233))) * 43758.5453);
        float cellDelay = cellRandom * 0.8;
        float cellProgress = clamp((uPageLoadProgress - cellDelay) / 0.2, 0.0, 1.0);
        
        float fadeAlpha = smoothstep(0.0, 1.0, cellProgress);
        intensity *= fadeAlpha;
    }
    
    p = fract(p);
    p *= uDigitSize;
    
    float px5 = p.x * 5.0;
    float py5 = (1.0 - p.y) * 5.0;
    float x = fract(px5);
    float y = fract(py5);
    
    float i = floor(py5) - 2.0;
    float j = floor(px5) - 2.0;
    float n = i * i + j * j;
    float f = n * 0.0625;
    
    float isOn = step(0.1, intensity - f);
    float brightness = isOn * (0.2 + y * 0.8) * (0.75 + x * 0.25);
    
    return step(0.0, p.x) * step(p.x, 1.0) * step(0.0, p.y) * step(p.y, 1.0) * brightness;
}

float onOff(float a, float b, float c)
{
  return step(c, sin(iTime + a * cos(iTime * b))) * uFlickerAmount;
}

float displace(vec2 look)
{
    float y = look.y - mod(iTime * 0.25, 1.0);
    float window = 1.0 / (1.0 + 50.0 * y * y);
    return sin(look.y * 20.0 + iTime) * 0.0125 * onOff(4.0, 2.0, 0.8) * (1.0 + cos(iTime * 60.0)) * window;
}

vec3 getColor(vec2 p){
    
    float bar = step(mod(p.y + time * 20.0, 1.0), 0.2) * 0.4 + 1.0;
    bar *= uScanlineIntensity;
    
    float displacement = displace(p);
    p.x += displacement;

    if (uGlitchAmount != 1.0) {
      float extra = displacement * (uGlitchAmount - 1.0);
      p.x += extra;
    }

    float middle = digit(p);
    
    const float off = 0.002;
    float sum = digit(p + vec2(-off, -off)) + digit(p + vec2(0.0, -off)) + digit(p + vec2(off, -off)) +
                digit(p + vec2(-off, 0.0)) + digit(p + vec2(0.0, 0.0)) + digit(p + vec2(off, 0.0)) +
                digit(p + vec2(-off, off)) + digit(p + vec2(0.0, off)) + digit(p + vec2(off, off));
    
    vec3 baseColor = vec3(0.9) * middle + sum * 0.1 * vec3(1.0) * bar;
    return baseColor;
}

vec2 barrel(vec2 uv){
  vec2 c = uv * 2.0 - 1.0;
  float r2 = dot(c, c);
  c *= 1.0 + uCurvature * r2;
  return c * 0.5 + 0.5;
}

void main() {
    time = iTime * 0.333333;
    vec2 uv = vUv;

    if(uCurvature != 0.0){
      uv = barrel(uv);
    }
    
    vec2 p = uv * uScale;
    vec3 col = getColor(p);

    if(uChromaticAberration != 0.0){
      vec2 ca = vec2(uChromaticAberration) / iResolution.xy;
      col.r = getColor(p + ca).r;
      col.b = getColor(p - ca).b;
    }

    col *= uTint;
    col *= uBrightness;

    if(uDither > 0.0){
      float rnd = hash21(gl_FragCoord.xy);
      col += (rnd - 0.5) * (uDither * 0.003922);
    }

    gl_FragColor = vec4(col, 1.0);
}
`

function hexToRgb(hex) {
  let h = hex.replace('#', '').trim()
  if (h.length === 3) h = h.split('').map(c => c + c).join('')
  const num = parseInt(h, 16)
  return [((num >> 16) & 255) / 255, ((num >> 8) & 255) / 255, (num & 255) / 255]
}

const updateUniforms = () => {
  if (!program) return
  program.uniforms.uScale.value = props.scale
  program.uniforms.uGridMul.value = new Float32Array(/** @type {number[]} */ (props.gridMul))
  program.uniforms.uDigitSize.value = props.digitSize
  program.uniforms.uScanlineIntensity.value = props.scanlineIntensity
  program.uniforms.uGlitchAmount.value = props.glitchAmount
  program.uniforms.uFlickerAmount.value = props.flickerAmount
  program.uniforms.uNoiseAmp.value = props.noiseAmp
  program.uniforms.uChromaticAberration.value = props.chromaticAberration
  program.uniforms.uDither.value = typeof props.dither === 'boolean' ? (props.dither ? 1 : 0) : props.dither
  program.uniforms.uCurvature.value = props.curvature
  
  const rgb = hexToRgb(props.tint)
  program.uniforms.uTint.value = new Color(rgb[0], rgb[1], rgb[2])
  
  program.uniforms.uMouseStrength.value = props.mouseStrength
  program.uniforms.uUseMouse.value = props.mouseReact ? 1 : 0
  program.uniforms.uUsePageLoadAnimation.value = props.pageLoadAnimation ? 1 : 0
  program.uniforms.uBrightness.value = props.brightness
}

watch(() => props, updateUniforms, { deep: true })

watch(() => props.dpr, (val) => {
  if (renderer && container.value) {
    renderer.dpr = val
    renderer.setSize(container.value.offsetWidth, container.value.offsetHeight)
  }
})

watch(() => props.mouseReact, (val) => {
  if (val) {
    window.addEventListener('mousemove', handleMouseMove)
  } else {
    window.removeEventListener('mousemove', handleMouseMove)
  }
})

const handleMouseMove = (e) => {
  if (!container.value) return
  // Since we are using this as a background, we use window coordinates
  const x = e.clientX / window.innerWidth
  const y = 1.0 - (e.clientY / window.innerHeight)
  mouse.x = x
  mouse.y = y
}

onMounted(() => {
  if (!container.value) return
  
  renderer = new Renderer({ dpr: props.dpr, alpha: true })
  const gl = renderer.gl
  gl.clearColor(0, 0, 0, 0) // Transparent background
  
  const geometry = new Triangle(gl)
  const rgb = hexToRgb(props.tint)
  const ditherVal = typeof props.dither === 'boolean' ? (props.dither ? 1 : 0) : props.dither

  program = new Program(gl, {
    vertex: vertexShader,
    fragment: fragmentShader,
    uniforms: {
      iTime: { value: 0 },
      iResolution: { value: new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height) },
      uScale: { value: props.scale },
      uGridMul: { value: new Float32Array(/** @type {number[]} */ (props.gridMul)) },
      uDigitSize: { value: props.digitSize },
      uScanlineIntensity: { value: props.scanlineIntensity },
      uGlitchAmount: { value: props.glitchAmount },
      uFlickerAmount: { value: props.flickerAmount },
      uNoiseAmp: { value: props.noiseAmp },
      uChromaticAberration: { value: props.chromaticAberration },
      uDither: { value: ditherVal },
      uCurvature: { value: props.curvature },
      uTint: { value: new Color(rgb[0], rgb[1], rgb[2]) },
      uMouse: { value: new Float32Array([0.5, 0.5]) },
      uMouseStrength: { value: props.mouseStrength },
      uUseMouse: { value: props.mouseReact ? 1 : 0 },
      uPageLoadProgress: { value: props.pageLoadAnimation ? 0 : 1 },
      uUsePageLoadAnimation: { value: props.pageLoadAnimation ? 1 : 0 },
      uBrightness: { value: props.brightness }
    }
  })
  
  mesh = new Mesh(gl, { geometry, program })
  container.value.appendChild(gl.canvas)
  
  const resize = () => {
    if (!container.value) return
    renderer.setSize(container.value.offsetWidth, container.value.offsetHeight)
    program.uniforms.iResolution.value = new Color(
      gl.canvas.width,
      gl.canvas.height,
      gl.canvas.width / gl.canvas.height
    )
  }
  
  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(container.value)
  
  if (props.mouseReact) {
    window.addEventListener('mousemove', handleMouseMove)
  }
  
  const update = (t) => {
    rafId = requestAnimationFrame(update)
    
    if (props.pageLoadAnimation && loadAnimationStart === 0) {
      loadAnimationStart = t
    }
    
    if (!props.pause) {
      const elapsed = (t * 0.001 + timeOffset) * props.timeScale
      program.uniforms.iTime.value = elapsed
      frozenTime = elapsed
    } else {
      program.uniforms.iTime.value = frozenTime
    }
    
    if (props.pageLoadAnimation && loadAnimationStart > 0) {
      const animationDuration = 2000
      const animationElapsed = t - loadAnimationStart
      const progress = Math.min(animationElapsed / animationDuration, 1)
      program.uniforms.uPageLoadProgress.value = progress
    }
    
    if (props.mouseReact) {
      const damping = 0.08
      smoothMouse.x += (mouse.x - smoothMouse.x) * damping
      smoothMouse.y += (mouse.y - smoothMouse.y) * damping
      program.uniforms.uMouse.value[0] = smoothMouse.x
      program.uniforms.uMouse.value[1] = smoothMouse.y
    }
    
    renderer.render({ scene: mesh })
  }
  
  rafId = requestAnimationFrame(update)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  if (resizeObserver) resizeObserver.disconnect()
  window.removeEventListener('mousemove', handleMouseMove)
  if (renderer && container.value) {
    const gl = renderer.gl
    gl.getExtension('WEBGL_lose_context')?.loseContext()
    if (gl.canvas.parentElement === container.value) {
      container.value.removeChild(gl.canvas)
    }
  }
})
</script>

<template>
  <div ref="container" class="w-full h-full"></div>
</template>