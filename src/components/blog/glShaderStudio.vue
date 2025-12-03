<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import IconLightning from '@/components/icons/IconLightning.vue'
import IconSparkles from '@/components/icons/IconSparkles.vue'
import IconPalette from '@/components/icons/IconPalette.vue'
import IconSliders from '@/components/icons/IconSliders.vue'
import IconVideo from '@/components/icons/IconVideo.vue'
import IconBuilding from '@/components/icons/IconBuilding.vue'
import IconWrench from '@/components/icons/IconWrench.vue'
import IconCrystalBall from '@/components/icons/IconCrystalBall.vue'

const selectedImage = ref(null)
const windowWidth = ref(0)
const zoomLevel = ref(1)

const updateWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  updateWidth()
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})

const openImage = (image) => {
  selectedImage.value = image
}

const closeImage = () => {
  selectedImage.value = null
  zoomLevel.value = 1
}

const handleWheel = (event) => {
  event.preventDefault()
  const zoomFactor = event.deltaY < 0 ? 1.1 : 0.9
  zoomLevel.value = Math.min(Math.max(zoomLevel.value * zoomFactor, 0.5), 5)
}

const images = [
  new URL('@/assets/projectImgs/9jyaynbw.png', import.meta.url).href,
  new URL('@/assets/projectImgs/n3cjoht3.png', import.meta.url).href,
  new URL('@/assets/projectImgs/dwmoecdi.png', import.meta.url).href,
  new URL('@/assets/projectImgs/0fhs8cs6.png', import.meta.url).href
]
</script>

<template>
  <article class="prose prose-lg max-w-3xl px-4 py-4 bg-[#131313cc] backdrop-blur-sm rounded-lg">
    <div>
      <h1
        class="text-white text-center text-4xl lg:text-3xl font-extrabold
          [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black] border-b
          border-(--color-border) py-[18px]">
        <a
          href="https://www.figma.com/community/plugin/1570153150483583043"
          target="_blank"
          rel="noopener noreferrer"
          ><span class="text-(--isr-c-red) text-4xl font-extrabold cursor-pointer hover:underline"
            >GL Shader Studio</span
          ></a
        >
        Figma Plugin
      </h1>
    </div>

    <el-carousel
      :style="{ height: windowWidth < 768 ? '250px' : '500px' }"
      height="500px"
      :autoplay="true"
      :interval="9000"
      class="carousel-container"
      motion-blur>
      <el-carousel-item
        v-for="(image, index) in images"
        :key="index">
        <img
          :src="image"
          class="object-contain w-full h-full top-0 rounded-s shadow-md cursor-zoom-in
            hover:scale-102 transition-transform"
          @click="openImage(image)" />
      </el-carousel-item>
    </el-carousel>

    <div class="tech-stack text-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg my-6">
      <h3 class="text-(--isr-c-red) font-bold mb-2 flex items-center justify-center gap-2">
        Built with <IconLightning class="w-5 h-5" />
      </h3>
      <div class="flex flex-wrap justify-center gap-2 text-sm">
        <span class="bg-blue-500/20 px-2 py-1 rounded">React 19.2</span>
        <span class="bg-cyan-500/20 px-2 py-1 rounded">Tailwind CSS v4.1</span>
        <span class="bg-blue-600/20 px-2 py-1 rounded">TypeScript 5.3</span>
        <span class="bg-purple-500/20 px-2 py-1 rounded">WebGL / GLSL</span>
        <span class="bg-orange-500/20 px-2 py-1 rounded">Webpack 4</span>
        <span class="bg-green-500/20 px-2 py-1 rounded">Figma Plugin API</span>
      </div>
    </div>

    <p class="text-center p-2 self-center">
      <strong>GL Shader Studio</strong> is a professional-grade Figma plugin that brings the power
      of WebGL and GLSL shaders directly into the design workflow. It allows designers to create
      complex, animated, and mathematically generated textures without leaving Figma.
    </p>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconSparkles class="w-6 h-6" /> Key Features
    </h2>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconPalette class="w-5 h-5" /> Dual Editing Modes
        </h3>
        <p class="text-sm">
          Offers both a <strong>Visual Layer Builder</strong> for non-coders to stack effects, and
          an <strong>Advanced Code Editor</strong> with syntax highlighting for writing raw GLSL
          fragment shaders.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconLightning class="w-5 h-5" /> Real-Time Rendering
        </h3>
        <p class="text-sm">
          Runs a custom WebGL loop optimized for performance within Figma. Supports dynamic uniform
          injection and includes a "Minimize" mode for background rendering.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconSliders class="w-5 h-5" /> Dynamic Uniform System
        </h3>
        <p class="text-sm">
          Create custom controls (sliders, color pickers) on the fly. The system automatically
          parses these and injects them as `uniform` variables into the shader code.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconVideo class="w-5 h-5" /> Video Export
        </h3>
        <p class="text-sm">
          Built-in pipeline to record the WebGL canvas and export high-quality 1080p WebM videos.
          Supports "Bounce" loop mode for seamless social media backgrounds.
        </p>
      </div>
    </div>

    <div class="text-center my-8 p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg">
      <p class="mb-4">
        <strong>Try it out in Figma!</strong>
      </p>
      <a
        href="https://www.figma.com/community/plugin/1570153150483583043"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block bg-(--isr-c-red) hover:bg-red-600 text-white font-bold py-2 px-6
          rounded-lg transition-colors">
        Get the Plugin →
      </a>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconBuilding class="w-6 h-6" /> Technical Architecture
    </h2>

    <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg mb-6">
      <h3 class="text-(--isr-c-red) font-semibold mb-2">The Two-Process Model</h3>
      <p class="mb-2 text-sm">Figma plugins run in two isolated environments:</p>
      <ul class="list-disc pl-6 space-y-1 text-sm">
        <li>
          <strong>Sandbox (Main Thread):</strong> Access to the Figma document structure. No DOM or
          WebGL access.
        </li>
        <li>
          <strong>UI (Iframe):</strong> Full browser environment with WebGL and DOM. No direct
          access to Figma document.
        </li>
      </ul>
      <p class="mt-2 text-sm">
        Communication is handled via a strictly typed `postMessage` bridge.
      </p>
    </div>

    <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg mb-6">
      <h3 class="text-(--isr-c-red) font-semibold mb-2">Modular React Architecture</h3>
      <p class="text-sm">
        The codebase uses a "Composition-Root" pattern, delegating logic to specialized hooks like
        `useShaderEngine` and `useShaderLifecycle`. Business logic is grouped into factories to keep
        components pure and testable.
      </p>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconWrench class="w-6 h-6" /> Engineering Challenges
    </h2>

    <div class="space-y-6">
      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2">
          The "Stale Closure" in Animation Loops
        </h3>
        <p class="text-sm">
          <strong>Problem:</strong> WebGL render loops running outside the React render cycle
          accessing stale state variables.<br />
          <strong>Solution:</strong> Implemented a `useSyncedRef` pattern to keep a mutable `ref` in
          sync with React state, ensuring the renderer always has the latest data.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2">Dynamic Shader Composition</h3>
        <p class="text-sm">
          <strong>Problem:</strong> Generating valid GLSL code on the fly from stacked visual
          layers.<br />
          <strong>Solution:</strong> Created a `layerShaderGenerator` utility that compiles a JSON
          tree of layers into a single fragment shader string, handling variable scoping and blend
          modes.
        </p>
      </div>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconCrystalBall class="w-6 h-6" /> Future Roadmap
    </h2>
    <ul class="list-disc pl-6 space-y-2 text-sm bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
      <li>
        <strong>Texture Support:</strong> Allow users to upload images to use as `sampler2D`
        uniforms.
      </li>
      <li>
        <strong>Node-Based Editor:</strong> A visual graph editor for even more complex shader
        composition.
      </li>
      <li>
        <strong>Community Library:</strong> A cloud-based backend to share shaders between users.
      </li>
    </ul>

    <div class="text-center mt-8 p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg">
      <p class="mb-4">
        <strong>Check out the source code!</strong>
      </p>
      <a
        href="https://github.com/isandrocks/ShaderStudio"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block bg-(--isr-c-red) hover:bg-red-600 text-white font-bold py-2 px-6
          rounded-lg transition-colors">
        View on GitHub →
      </a>
    </div>
  </article>
  <div
    v-if="selectedImage"
    class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
    @click="closeImage"
    @wheel="handleWheel">
    <div class="relative flex">
      <img
        :src="selectedImage"
        class="max-w-[99vw] max-h-[85vh] rounded-lg"
        :style="{ transform: `scale(${zoomLevel})`, transition: 'transform 0.1s ease' }" />
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.hover\:scale-102:hover {
  transform: scale(1.02);
}
</style>
