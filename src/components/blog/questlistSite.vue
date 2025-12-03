<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import IconLightning from '@/components/icons/IconLightning.vue'
import IconLink from '@/components/icons/IconLink.vue'
import IconBuilding from '@/components/icons/IconBuilding.vue'
import IconPalette from '@/components/icons/IconPalette.vue'
import IconMobile from '@/components/icons/IconMobile.vue'
import IconGamepad from '@/components/icons/IconGamepad.vue'
import IconLightbulb from '@/components/icons/IconLightbulb.vue'
import IconPuzzle from '@/components/icons/IconPuzzle.vue'
import IconRefresh from '@/components/icons/IconRefresh.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconRocket from '@/components/icons/IconRocket.vue'
import IconRuler from '@/components/icons/IconRuler.vue'
import IconTarget from '@/components/icons/IconTarget.vue'
import IconDice from '@/components/icons/IconDice.vue'
import IconCrystalBall from '@/components/icons/IconCrystalBall.vue'
import IconHome from '@/components/icons/IconHome.vue'

const selectedImage = ref(null)
const windowWidth = ref(0)
const zoomLevel = ref(1) // Add zoom level tracking

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
  new URL('@/assets/projectImgs/20253271.png', import.meta.url).href,
  new URL('@/assets/projectImgs/20253272.png', import.meta.url).href
]
</script>

<template>
  <article
    class="prose prose-lg max-w-3xl mx-auto px-4 py-4 bg-[#131313cc] backdrop-blur-sm rounded-lg">
    <div>
      <h1
        class="text-white text-center text-4xl lg:text-3xl font-extrabold
          [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black] border-b
          border-(--color-border) py-[18px]">
        <a
          href="https://github.com/isandrocks/questlist"
          target="_blank"
          rel="noopener noreferrer"
          ><span class="text-(--isr-c-red) text-4xl font-extrabold cursor-pointer"
            >Questlist Portfolio</span
          ></a
        >
        Vue 3 Portfolio & Company Site
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
          class="object-contain w-full top-0 rounded-s shadow-md cursor-zoom-in hover:scale-102
            transition-transform"
          @click="openImage(image)" />
      </el-carousel-item>
    </el-carousel>

    <div class="tech-stack text-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg my-6">
      <h3 class="text-(--isr-c-red) font-bold mb-2 flex items-center justify-center gap-2">
        Built with Vue 3 <IconLightning class="w-5 h-5" />
      </h3>
      <div class="flex flex-wrap justify-center gap-2 text-sm">
        <span class="bg-green-500/20 px-2 py-1 rounded">Vue 3 Composition API</span>
        <span class="bg-blue-500/20 px-2 py-1 rounded">Element Plus</span>
        <span class="bg-cyan-500/20 px-2 py-1 rounded">Tailwind CSS</span>
        <span class="bg-orange-500/20 px-2 py-1 rounded">Vite</span>
        <span class="bg-purple-500/20 px-2 py-1 rounded">WebAssembly</span>
        <span class="bg-yellow-500/20 px-2 py-1 rounded">Custom Masonry</span>
      </div>
    </div>

    <p class="text-center p-2 self-center">
      Building this
      <a
        href="https://github.com/isandrocks/questlist"
        target="_blank"
        rel="noopener noreferrer"
        ><span class="text-(--isr-c-red) cursor-pointer">portfolio site</span></a
      >
      was both a learning journey and the foundation for Con-Save Customs! This modern Vue 3
      application serves dual purposes: showcasing my technical projects and establishing the
      digital presence for my custom electronics company.
    </p>

    <div class="text-center my-6">
      <a
        href="https://github.com/isandrocks/questlist"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-(--isr-c-red) hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg
          transition-colors text-lg flex items-center justify-center gap-2 mx-auto">
        <IconLink class="w-6 h-6" /> View GitHub Repository
      </a>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconBuilding class="w-6 h-6" /> Technical Architecture
    </h2>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconLightning class="w-5 h-5" /> Vue 3 Composition API
        </h3>
        <p class="text-sm">
          Modern &lt;script setup&gt; syntax for clean, reactive components with excellent
          TypeScript integration and performance.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconPalette class="w-5 h-5" /> Element Plus + Tailwind
        </h3>
        <p class="text-sm">
          Professional UI components with utility-first CSS for rapid prototyping and consistent
          design.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconMobile class="w-5 h-5" /> Custom Masonry Layout
        </h3>
        <p class="text-sm">
          Hand-built responsive grid that adapts: 1 column (mobile), 2 columns (tablet), 3 columns
          (desktop).
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconGamepad class="w-5 h-5" /> WebAssembly Integration
        </h3>
        <p class="text-sm">
          Embedded Godot games with CORS configuration and iframe optimization for seamless
          gameplay.
        </p>
      </div>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconLightbulb class="w-6 h-6" /> Innovative Features
    </h2>

    <div class="bg-blue-900/20 backdrop-blur-sm border-l-4 border-blue-500 p-4 mb-6">
      <h3 class="text-blue-300 font-semibold mb-2 flex items-center gap-2">
        <IconPuzzle class="w-5 h-5" /> Vue Component Blog System
      </h3>
      <p class="text-sm">
        Instead of markdown, each blog post is a Vue component allowing rich interactivity, dynamic
        imports, and seamless integration with the site's design system.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconRefresh class="w-5 h-5" /> Dynamic Routing
        </h3>
        <p class="text-sm">
          Smart component loading with <code>defineAsyncComponent</code> and security whitelist for
          optimized bundle sizes.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconSearch class="w-5 h-5" /> Image Zoom System
        </h3>
        <p class="text-sm">
          Full-screen modals with mouse wheel zoom (0.5x to 5x) for detailed project examination.
        </p>
      </div>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconLightning class="w-6 h-6" /> Performance & Optimization
    </h2>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconRocket class="w-5 h-5" /> Build Optimization
        </h3>
        <p class="text-sm">
          Custom Vite configuration removes asset hashes for consistent file naming and enables CORS
          for game embedding.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconRuler class="w-5 h-5" /> Custom Breakpoints
        </h3>
        <p class="text-sm">
          Uses 1081px instead of standard 1024px breakpoint to better accommodate modern ultrawide
          displays.
        </p>
      </div>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconTarget class="w-6 h-6" /> Brand Identity & Future
    </h2>

    <div class="bg-green-900/20 backdrop-blur-sm border-l-4 border-green-500 p-4 mb-6">
      <h3 class="text-green-300 font-semibold mb-2 flex items-center gap-2">
        <IconDice class="w-5 h-5" /> The Con-Save Connection
      </h3>
      <p class="text-sm">
        "Con-Save Customs" references D&D's Constitution saving throw - a perfect metaphor for
        building resilient, custom solutions. The brand bridges technical precision with creative
        design.
      </p>
    </div>

    <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg mb-6">
      <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
        <IconCrystalBall class="w-5 h-5" /> Evolution Path
      </h3>
      <p class="text-sm">
        This portfolio foundation is designed to scale into a full e-commerce platform for custom
        keyboards, electronics, and controllers. The modular Vue architecture makes adding features
        like product catalogs, shopping carts, and order management seamless as the business grows.
      </p>
    </div>

    <div class="text-center mt-8 p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg">
      <p class="mb-4">
        <strong>Ready to explore the technical implementation?</strong>
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://github.com/isandrocks/questlist"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-(--isr-c-red) hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg
            transition-colors flex items-center justify-center gap-2">
          <IconLink class="w-5 h-5" /> GitHub Repository
        </a>
        <button
          @click="$router.push('/')"
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg
            transition-colors flex items-center justify-center gap-2">
          <IconHome class="w-5 h-5" /> Explore Portfolio
        </button>
      </div>
      <p class="text-sm mt-2 text-gray-400">Open source • Contributions welcome</p>
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

code {
  background-color: rgba(249, 52, 34, 0.1);
  padding: 2px 4px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  color: #f93422;
}
</style>
