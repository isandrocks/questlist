<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import IconGamepad from '@/components/icons/IconGamepad.vue'
import IconTarget from '@/components/icons/IconTarget.vue'
import IconRocket from '@/components/icons/IconRocket.vue'
import IconPalette from '@/components/icons/IconPalette.vue'
import IconSparkles from '@/components/icons/IconSparkles.vue'
import IconGlobe from '@/components/icons/IconGlobe.vue'
import IconBook from '@/components/icons/IconBook.vue'
import IconTools from '@/components/icons/IconTools.vue'
import IconGraduationCap from '@/components/icons/IconGraduationCap.vue'
import IconBox from '@/components/icons/IconBox.vue'

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

const goToGame = () => {
  window.open('/game', '_blank')
}

const images = [new URL('@/assets/projectImgs/evKTlbYB.png', import.meta.url).href]
</script>

<template>
  <article
    class="prose prose-lg max-w-3xl mx-auto px-4 py-4 bg-[#131313cc] backdrop-blur-sm rounded-lg">
    <div class="space-y-6">
      <h1
        class="text-white text-center text-4xl lg:text-3xl font-extrabold
          [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black] border-b
          border-(--color-border) py-[18px]">
        <span
          class="text-(--isr-c-red) text-4xl font-extrabold cursor-pointer"
          @click="goToGame"
          >Lights Out Puzzle</span
        >
        Learning Godot Game Engine
      </h1>
    </div>

    <el-carousel
      :style="{ height: windowWidth < 768 ? '250px' : '500px' }"
      height="500px"
      :autoplay="true"
      :interval="9000"
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
        Built with Godot <IconGamepad class="w-5 h-5" />
      </h3>
      <div class="flex flex-wrap justify-center gap-2 text-sm">
        <span class="bg-blue-500/20 px-2 py-1 rounded">GDScript</span>
        <span class="bg-green-500/20 px-2 py-1 rounded">Custom Shaders</span>
        <span class="bg-purple-500/20 px-2 py-1 rounded">Web Export</span>
        <span class="bg-yellow-500/20 px-2 py-1 rounded">CC0 Assets</span>
        <span class="bg-orange-500/20 px-2 py-1 rounded">Asset Library</span>
      </div>
    </div>

    <p class="text-center p-2 self-center">
      A faithful recreation of the classic
      <span
        class="text-(--isr-c-red) cursor-pointer"
        @click="goToGame"
        >Lights Out</span
      >
      puzzle game, built as my introduction to the Godot game engine. Features custom assets,
      shaders, and is available both playable on this site and in the official Godot Asset Library.
    </p>

    <div class="text-center my-6">
      <button
        @click="goToGame"
        class="bg-(--isr-c-red) hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg
          transition-colors text-lg flex items-center justify-center gap-2 mx-auto">
        <IconGamepad class="w-6 h-6" /> Play Game Now
      </button>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconTarget class="w-6 h-6" /> What is Lights Out?
    </h2>

    <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg mb-6">
      <p class="mb-4">
        Originally released by Tiger Electronics in 1995, Lights Out is a classic logic puzzle with
        deceptively simple rules:
      </p>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>5×5 Grid:</strong> Start with a pattern of lit and unlit tiles</li>
        <li>
          <strong>Toggle Mechanic:</strong> Click any tile to toggle it and its four adjacent
          neighbors
        </li>
        <li><strong>Goal:</strong> Turn off all the lights to win</li>
        <li>
          <strong>Challenge:</strong> Every move affects multiple tiles, requiring strategic
          thinking
        </li>
      </ul>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconRocket class="w-6 h-6" /> Game Features
    </h2>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconPalette class="w-5 h-5" /> Custom Assets
        </h3>
        <p class="text-sm">
          All graphics, sounds, and visual effects created from scratch for an authentic retro
          gaming experience.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconSparkles class="w-5 h-5" /> Custom Shaders
        </h3>
        <p class="text-sm">
          Hand-written GLSL shaders for smooth lighting transitions and visual feedback effects.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconGlobe class="w-5 h-5" /> Web Playable
        </h3>
        <p class="text-sm">
          Compiled to WebAssembly for instant browser play with full desktop performance.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconBook class="w-5 h-5" /> Open Source
        </h3>
        <p class="text-sm">
          Available in Godot Asset Library under CC0 license - completely free for any use.
        </p>
      </div>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconTools class="w-6 h-6" /> Development Journey
    </h2>

    <div
      class="bg-blue-900/20 backdrop-blur-sm border-l-4 border-blue-500/60 inset-ring-2
        inset-ring-blue-400/40 p-4 mb-6">
      <h3 class="text-blue-300 font-semibold mb-2 flex items-center gap-2">
        <IconGraduationCap class="w-5 h-5" /> Learning Godot
      </h3>
      <p class="text-sm">
        This project served as my introduction to Godot Engine, covering essential concepts like
        scene management, GDScript programming, custom shaders, and web export. The simple game
        mechanics allowed focus on engine fundamentals while creating something genuinely fun to
        play.
      </p>
    </div>

    <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
      <IconTarget class="w-5 h-5" /> Technical Challenges Solved
    </h3>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>
        <strong>State Management:</strong> Efficient tile state tracking and neighbor detection
        algorithms
      </li>
      <li>
        <strong>Visual Feedback:</strong> Smooth animations and shader effects for tile transitions
      </li>
      <li>
        <strong>Web Optimization:</strong> Compressed assets and optimized export for web deployment
      </li>
      <li>
        <strong>Cross-Platform:</strong> Ensuring consistent gameplay across desktop and web
        browsers
      </li>
    </ul>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconGamepad class="w-6 h-6" /> Play Options
    </h2>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="text-center bg-gray-800/20 backdrop-blur-sm p-6 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center justify-center gap-2">
          <IconGlobe class="w-5 h-5" /> Play Online
        </h3>
        <p class="text-sm mb-4">Instant browser play with full features</p>
        <button
          @click="goToGame"
          class="bg-(--isr-c-red) hover:bg-red-600 text-white font-bold py-2 px-4 rounded
            transition-colors">
          Launch Game
        </button>
      </div>

      <div class="text-center bg-gray-800/20 backdrop-blur-sm p-6 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center justify-center gap-2">
          <IconBox class="w-5 h-5" /> Godot Asset Library
        </h3>
        <p class="text-sm mb-4">Download source and customize</p>
        <a
          href="https://godotengine.org/asset-library"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
            transition-colors">
          Asset Library
        </a>
      </div>
    </div>

    <div class="bg-green-900/20 backdrop-blur-sm border-l-4 border-green-500 p-4 mb-6">
      <h3 class="text-green-300 font-semibold mb-2 flex items-center gap-2">
        <IconTarget class="w-5 h-5" /> Perfect for Learning
      </h3>
      <p class="text-sm">
        This project demonstrates core Godot concepts in a compact, well-documented package. The
        source code includes comments explaining key techniques, making it an excellent starting
        point for other developers learning Godot Engine.
      </p>
    </div>

    <div class="text-center mt-8 p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg">
      <p class="mb-4">
        <strong>Ready to play or learn from the source?</strong>
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          @click="goToGame"
          class="bg-(--isr-c-red) hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg
            transition-colors flex items-center justify-center gap-2">
          <IconGamepad class="w-5 h-5" /> Play Game
        </button>
        <a
          href="https://godotengine.org/asset-library"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6
            rounded-lg transition-colors items-center justify-center gap-2">
          <IconBox class="w-5 h-5" /> Get Source Code
        </a>
      </div>
      <p class="text-sm mt-2 text-gray-400">CC0 License - Free for any use</p>
    </div>
  </article>

  <!-- Image zoom modal -->
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
.hover\:scale-102:hover {
  transform: scale(1.02);
}
</style>
