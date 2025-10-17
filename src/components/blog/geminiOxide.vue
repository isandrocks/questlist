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
  new URL('@/assets/projectImgs/Kw1QsEGI.png', import.meta.url).href,
  new URL('@/assets/projectImgs/geAAiGQ9.png', import.meta.url).href
]
</script>

<template>
  <article class="prose prose-lg max-w-3xl mx-auto px-4 py-4">
    <div>
      <h1
        class="text-white text-center text-4xl lg:text-3xl font-extrabold
          [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black] border-b
          border-(--color-border) py-[18px]">
        <a
          href="https://github.com/isandrocks/GeminiOxide"
          target="_blank"
          rel="noopener noreferrer"
          ><span class="text-(--isr-c-red) text-4xl font-extrabold cursor-pointer"
            >GeminiOxide</span
          ></a
        >
        Rust GUI for Google's Gemini AI
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
          class="object-contain w-full top-0 rounded-s shadow-md cursor-zoom-in hover:scale-102 transition-transform"
          @click="openImage(image)" />
      </el-carousel-item>
    </el-carousel>

    <div class="tech-stack text-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg my-6">
      <h3 class="text-(--isr-c-red) font-bold mb-2">Built with Rust 🦀</h3>
      <div class="flex flex-wrap justify-center gap-2 text-sm">
        <span class="bg-orange-500/20 px-2 py-1 rounded">egui</span>
        <span class="bg-blue-500/20 px-2 py-1 rounded">Tokio</span>
        <span class="bg-green-500/20 px-2 py-1 rounded">reqwest</span>
        <span class="bg-purple-500/20 px-2 py-1 rounded">serde</span>
        <span class="bg-yellow-500/20 px-2 py-1 rounded">base64</span>
      </div>
    </div>

    <p class="text-center p-2 self-center">
      GeminiOxide is a cross-platform desktop application built with Rust that provides an intuitive
      interface to
      <a
        href="https://deepmind.google/technologies/gemini/"
        target="_blank"
        rel="noopener noreferrer"
        ><span class="text-(--isr-c-red) cursor-pointer">Google's Gemini AI</span></a
      >. It combines the power of Rust's performance with modern GUI design to create a seamless AI
      interaction experience.
    </p>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8">🚀 Key Features</h2>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2">💬 Text & Image AI Chat</h3>
        <p class="text-sm">
          Send text prompts and images to Gemini AI with real-time responses rendered in beautiful
          markdown format.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2">📸 Smart Image Handling</h3>
        <p class="text-sm">
          Capture screenshots, paste from clipboard, or load from file paths. Supports transparency
          and cross-platform clipboard integration.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2">🌍 Cross-Platform</h3>
        <p class="text-sm">
          Native performance on Windows, macOS, and Linux with Asian font support for international
          users.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2">🔒 Security First</h3>
        <p class="text-sm">
          Enterprise-grade API key management with comprehensive security auditing and .env
          protection.
        </p>
      </div>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8">🛠️ Technical Architecture</h2>

    <p class="mb-4">
      GeminiOxide showcases modern Rust development practices with a clean, modular architecture:
    </p>

    <div class="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg mb-6 font-mono text-sm">
      <div class="text-green-400 mb-2">src/</div>
      <div class="ml-4">
        <div>├── main.rs <span class="text-gray-400"># eframe setup & entry point</span></div>
        <div>├── api_client.rs <span class="text-gray-400"># Gemini API communication</span></div>
        <div>├── ui_components.rs <span class="text-gray-400"># UI state & rendering</span></div>
        <div>├── img_utils.rs <span class="text-gray-400"># Image capture & processing</span></div>
        <div>└── font_setup.rs <span class="text-gray-400"># Internationalization</span></div>
      </div>
    </div>

    <h3 class="text-(--isr-c-red) font-semibold mb-2">🎯 Design Principles</h3>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>
        <strong>Async by Default:</strong> Non-blocking UI with Tokio runtime for smooth user
        experience
      </li>
      <li>
        <strong>Type Safety:</strong> Leverages Rust's type system for reliable API communication
      </li>
      <li>
        <strong>Cross-Platform:</strong> Single codebase runs natively on all major operating
        systems
      </li>
      <li>
        <strong>Security Focused:</strong> Zero hardcoded secrets with comprehensive protection
      </li>
    </ul>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8">💡 Technical Highlights</h2>

    <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg mb-6">
      <h3 class="text-(--isr-c-red) font-semibold mb-2">🖼️ Advanced Image Processing</h3>
      <p class="mb-2">
        One of the most challenging aspects was implementing robust cross-platform image handling:
      </p>
      <ul class="list-disc pl-6 space-y-1 text-sm">
        <li>Unified clipboard API across Windows, macOS, and Linux</li>
        <li>Smart detection between image data and file paths</li>
        <li>RGBA to PNG conversion with transparency handling</li>
        <li>Base64 encoding for JSON API payloads</li>
        <li>Special handling for Firefox clipboard quirks</li>
      </ul>
    </div>

    <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg mb-6">
      <h3 class="text-(--isr-c-red) font-semibold mb-2">⚡ Performance Optimizations</h3>
      <p class="mb-2">The release build is optimized for both size and speed:</p>
      <div class="bg-gray-900/50 backdrop-blur-sm p-3 rounded font-mono text-sm">
        <div class="text-yellow-400">[profile.release]</div>
        <div>opt-level = 3 <span class="text-gray-400"># Maximum optimization</span></div>
        <div>lto = true <span class="text-gray-400"># Link-time optimization</span></div>
        <div>codegen-units = 1 <span class="text-gray-400"># Better optimization</span></div>
        <div>strip = true <span class="text-gray-400"># Remove debug symbols</span></div>
      </div>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8">🌟 What Makes It Special</h2>

    <p class="mb-4">Unlike web-based AI interfaces, GeminiOxide offers:</p>

    <div class="grid md:grid-cols-3 gap-4 mb-6">
      <div class="text-center">
        <div class="text-3xl mb-2">🚀</div>
        <div class="font-semibold text-(--isr-c-red)">Native Speed</div>
        <div class="text-sm">Rust performance with no browser overhead</div>
      </div>

      <div class="text-center">
        <div class="text-3xl mb-2">🔒</div>
        <div class="font-semibold text-(--isr-c-red)">Privacy First</div>
        <div class="text-sm">Your API key stays local, no third-party servers</div>
      </div>

      <div class="text-center">
        <div class="text-3xl mb-2">🎨</div>
        <div class="font-semibold text-(--isr-c-red)">Rich UI</div>
        <div class="text-sm">Native desktop experience with markdown rendering</div>
      </div>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8">🔧 Development Experience</h2>

    <p class="mb-4">The project includes comprehensive development tooling:</p>

    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li><strong>scripts/dev.sh:</strong> One-command development environment setup</li>
      <li><strong>Security auditing:</strong> Automated vulnerability scanning</li>
      <li><strong>VS Code integration:</strong> Configured tasks and debugging</li>
      <li><strong>Cross-platform builds:</strong> Consistent experience across platforms</li>
    </ul>

    <div class="bg-blue-900/20 backdrop-blur-sm border-l-4 border-blue-500 p-4 mb-6">
      <h3 class="text-blue-300 font-semibold mb-2">🎓 Learning Project</h3>
      <p class="text-sm">
        This project served as an excellent learning experience for modern Rust GUI development,
        async programming patterns, and secure API integration. It demonstrates practical
        application of Rust's ecosystem for desktop application development.
      </p>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8">📊 Project Stats</h2>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg text-center">
        <div class="text-2xl font-bold text-(--isr-c-red)">v0.2.4</div>
        <div class="text-sm">Current Version</div>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg text-center">
        <div class="text-2xl font-bold text-(--isr-c-red)">MIT</div>
        <div class="text-sm">Open Source License</div>
      </div>
    </div>

    <div class="text-center mt-8 p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg">
      <p class="mb-4">
        <strong>Ready to try GeminiOxide?</strong>
      </p>
      <a
        href="https://github.com/isandrocks/GeminiOxide"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block bg-(--isr-c-red) hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg
          transition-colors">
        View on GitHub →
      </a>
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
.carousel-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.hover\:scale-102:hover {
  transform: scale(1.02);
}
</style>
