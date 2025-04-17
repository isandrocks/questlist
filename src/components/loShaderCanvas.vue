<template>
  <canvas
    ref="canvas"
    class="w-full h-auto" />
</template>

<script setup>
import { ref, watch } from 'vue'

const canvas = ref(null)

watch(canvas, (el) => {
  if (!el) return


  const gl = el.getContext('webgl')
  if (!gl) {
    console.error('WebGL not supported')
    return
  }

  const vertexShaderSource = `
      attribute vec4 a_position;
      void main() {
        gl_Position = a_position;
      }
    `

  const fragmentShaderSource = `
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

vec2 rotate2D(vec2 _st, float _angle){
    _st -= 0.5;
    float a = cos(_angle);
    float b = -sin(_angle);
    float c = sin(_angle);
    float d = cos(_angle);
    vec2 row1 = vec2(a, b);
    vec2 row2 = vec2(c, d);
    mat2 built_mat2 = mat2(row1, row2);
    _st = built_mat2 * _st.xy;
    _st += 0.5;
    return _st;
}

vec2 tile(vec2 _st, float _zoom){
    _st *= _zoom;
    return fract(_st);
}

float box(vec2 _st, vec2 _size, float _smoothEdges){
    _size = vec2(0.5) - _size * 0.5;
    vec2 aa = vec2(_smoothEdges * 0.01);
    vec2 uv = smoothstep(_size, _size + aa, _st);
    uv *= smoothstep(_size, _size + aa, vec2(1.0) - _st);
    return uv.x * uv.y;
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    float angle = 0.25;
    float i = mod(u_time, 7.0);
    
    if (i >= 0.25 && i <= 0.75) {
        angle = i;
    } else {
        angle = 0.25;
    }

    st = tile(st, 8.0);
    st = rotate2D(st, 3.14159265 * angle); // PI

    vec3 vec3_min = vec3(0.0);
    vec3 vec3_max = vec3(1.0);

    vec3 fcolor = vec3(box(st, vec2(0.88), 10.0)) - vec3(0.88, 0.88, 0.88);
    fcolor = clamp(fcolor, vec3_min, vec3_max);
    fcolor = fcolor + vec3(0.12, 0.12, 0.14);

    gl_FragColor = vec4(fcolor, 1.0);
}

    ` // Replace this with your own GLSL shader!

  function createShader(gl, type, source) {
    const shader = gl.createShader(type)
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader))
      gl.deleteShader(shader)
      return null
    }
    return shader
  }

  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)

  const program = gl.createProgram()
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program))
    return
  }

  gl.useProgram(program)

  // Fullscreen quad
  const positionBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW
  )

  const a_position = gl.getAttribLocation(program, 'a_position')
  gl.enableVertexAttribArray(a_position)
  gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0, 0)

  const u_time = gl.getUniformLocation(program, 'u_time')
  const u_resolution = gl.getUniformLocation(program, 'u_resolution')

  let start = performance.now()

  function resizeCanvas() {
    el.width = el.clientWidth
    el.height = el.clientHeight
    gl.viewport(0, 0, el.width, el.height)
  }

  window.addEventListener('resize', resizeCanvas)
  resizeCanvas()

  function render() {
    const now = performance.now()
    const elapsed = (now - start) / 1000

    gl.uniform1f(u_time, elapsed)
    gl.uniform2f(u_resolution, el.width, el.height)

    gl.drawArrays(gl.TRIANGLES, 0, 6)
    requestAnimationFrame(render)
  }

  render()
})
</script>

<style scoped>
canvas {
  display: block;
  max-width: 100%;
  border-radius: 8px;
}
</style>
