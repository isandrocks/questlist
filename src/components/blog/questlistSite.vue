<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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
  <article class="prose prose-lg max-w-3xl mx-auto px-4 py-4">
    <div>
      <h1
        class="text-white text-center text-4xl lg:text-3xl font-extrabold
          [text-shadow:_-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black] border-b
          border-[var(--color-border)] py-[18px]">
        <a
          href="https://github.com/isandrocks/questlist"
          target="_blank"
          rel="noopener noreferrer"
          ><span class="text-[--isr-c-red] text-4xl font-extrabold cursor-pointer"
            >Questlist Portfolio</span
          ></a
        >
        Vue 3 Portfolio & Company Site
      </h1>
    </div>

    <el-carousel
      :style="{ height: windowWidth < 768 ? '250px' : '500px' }"
      height="500px"
      autoplay="true"
      interval="9000"
      class="carousel-container"
      motion-blur>
      <el-carousel-item
        v-for="(image, index) in images"
        :key="index">
        <img
          :src="image"
          class="object-contain w-full top-0 rounded-s shadow-md cursor-zoom-in hover:scale-102 transition-transform"
          @click="openImage(image)" />
      </el-carousel-item>
    </el-carousel>

    <p class="text-center p-2 self-center">
      Building this
      <a
        href="https://github.com/isandrocks/questlist"
        target="_blank"
        rel="noopener noreferrer"
        ><span class="text-[--isr-c-red] cursor-pointer">portfolio site</span></a
      >
      was both a learning journey and the foundation for Con-Save Customs!<br /><br />

      This modern Vue 3 application serves dual purposes: showcasing my technical projects and
      establishing the digital presence for my custom electronics company. The site features a
      responsive design that adapts seamlessly across devices, from mobile phones to desktop
      displays.
    </p>

    <h2
      class="text-xl font-bold text-[--isr-c-red] pt-4 pb-2 border-b border-[var(--color-border)]">
      Technical Architecture
    </h2>

    <p class="text-center p-2 self-center">
      The site is built with Vue 3's Composition API using <code>&lt;script setup&gt;</code> syntax
      for clean, modern code organization. Element Plus provides the component foundation, while
      Tailwind CSS handles styling with custom brand colors and responsive breakpoints.<br /><br />

      One of the most interesting features is the custom masonry layout implemented in
      <code>cardWall.vue</code>. Instead of using a library, I built a manual positioning system
      that dynamically arranges project cards based on screen size: <br />• Mobile: Single column
      (100% width) <br />• Tablet: Two columns (50% width each) <br />• Desktop: Three columns
      (33.33% width each)
    </p>

    <h2
      class="text-xl font-bold text-[--isr-c-red] pt-4 pb-2 border-b border-[var(--color-border)]">
      Content Management System
    </h2>

    <p class="text-center p-2 self-center">
      Rather than using traditional markdown files, each blog post is a Vue component. This approach
      allows for rich interactivity like the image zoom functionality you see throughout the site.
      The dynamic routing system loads components on-demand using <code>defineAsyncComponent</code>,
      keeping the initial bundle size optimized.<br /><br />

      The blog system works through a simple pattern: project cards on the homepage route to
      <code>/blog/:slug</code>, which dynamically imports the corresponding component from
      <code>src/components/blog/</code>.
    </p>

    <h2
      class="text-xl font-bold text-[--isr-c-red] pt-4 pb-2 border-b border-[var(--color-border)]">
      Game Integration & Performance
    </h2>

    <p class="text-center p-2 self-center">
      The site hosts WebAssembly games exported from Godot, served from the
      <code>public/</code> directory and embedded via iframe. Special CORS headers in the Vite
      configuration enable cross-origin embedding while maintaining security.<br /><br />

      Performance was a key consideration - the build process removes hashes from asset names for
      consistent file naming, and the responsive design uses a custom 1081px breakpoint instead of
      the standard 1024px to better accommodate modern displays.
    </p>

    <h2
      class="text-xl font-bold text-[--isr-c-red] pt-4 pb-2 border-b border-[var(--color-border)]">
      Brand Identity & Future Plans
    </h2>

    <p class="text-center p-2 self-center">
      <b>The Con-Save Connection</b><br /><br />

      The site name "Questlist" reflects the portfolio nature, but the brand "Con-Save Customs"
      references D&D's Constitution saving throw - a fitting metaphor for building resilient, custom
      solutions. The custom logo, implemented as a detailed SVG component, represents this blend of
      technical precision and creative design.<br /><br />

      This foundation sets the stage for the company's evolution from portfolio showcase to full
      e-commerce platform for custom keyboards, electronics, and controllers. The modular Vue
      architecture makes it easy to add new features like product catalogs, shopping carts, and
      order management as the business grows.
    </p>

    <p class="text-center p-2 self-center">
      <i
        >The source code is available on GitHub, and the site continues to evolve as both a
        technical showcase and business platform. Feel free to explore the repository to see the
        implementation details!</i
      >
    </p>
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
p {
  padding-bottom: 0.75rem;
}

h2 {
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  text-decoration: underline;
}

code {
  background-color: rgba(var(--isr-c-red), 0.1);
  padding: 2px 4px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
}
</style>
