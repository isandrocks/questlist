<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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
  new URL('@/assets/projectImgs/1j0ac8Mo.jpg', import.meta.url).href,
  new URL('@/assets/projectImgs/8UmyB7EU.png', import.meta.url).href,
  new URL('@/assets/projectImgs/DiutXcvj.png', import.meta.url).href,
  new URL('@/assets/projectImgs/aWpLDIzy.jpg', import.meta.url).href,
  new URL('@/assets/projectImgs/B8T8tsOt.jpg', import.meta.url).href
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
          href="https://github.com/isandrocks/Skyline_20K"
          target="_blank"
          rel="noopener noreferrer"
          ><span class="text-[--isr-c-red] text-4xl font-extrabold cursor-pointer"
            >Skyline_20K</span
          ></a
        >
        Custom RGB Macropad Engineering
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
          class="object-contain w-full h-full top-0 rounded-s shadow-md cursor-zoom-in hover:scale-102
            transition-transform"
          @click="openImage(image)" />
      </el-carousel-item>
    </el-carousel>

    <div class="tech-stack text-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg my-6">
      <h3 class="text-[--isr-c-red] font-bold mb-2">Built with Open Hardware 🔧</h3>
      <div class="flex flex-wrap justify-center gap-2 text-sm">
        <span class="bg-blue-500/20 px-2 py-1 rounded">QMK Firmware</span>
        <span class="bg-green-500/20 px-2 py-1 rounded">KiCad PCB Design</span>
        <span class="bg-red-500/20 px-2 py-1 rounded">ATmega328P</span>
        <span class="bg-purple-500/20 px-2 py-1 rounded">WS2812 RGB LEDs</span>
        <span class="bg-cyan-500/20 px-2 py-1 rounded">Vial Configuration</span>
        <span class="bg-orange-500/20 px-2 py-1 rounded">USBaspLoader</span>
        <span class="bg-yellow-500/20 px-2 py-1 rounded">3D Printing</span>
      </div>
    </div>

    <p class="text-center p-2 self-center">
      A completely open-source 20-key mechanical macropad featuring ultra-bright RGB underglow and
      innovative modular design. From PCB engineering to QMK firmware, this project demonstrates
      end-to-end hardware development for the mechanical keyboard enthusiast community.
    </p>

    <div class="text-center my-6">
      <a
        href="https://github.com/isandrocks/Skyline_20K"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-[--isr-c-red] hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors
          text-lg">
        🔗 View GitHub Repository
      </a>
    </div>

    <h2 class="text-[--isr-c-red] font-bold text-xl mb-4 mt-8">🎯 What Makes It Special</h2>

    <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg mb-6">
      <p class="mb-4">
        The Skyline_20K isn't just another macropad - it's a comprehensive hardware engineering
        project that showcases:
      </p>
      <ul class="list-disc pl-6 space-y-2">
        <li>
          <strong>Modular Design:</strong> Breakaway sections that snap off and reconnect for
          flexible configurations
        </li>
        <li>
          <strong>Extreme Lighting:</strong> 12× ultra-bright 4960 Neopixel LEDs (can literally
          serve as a searchlight!)
        </li>
        <li>
          <strong>Complete Open Source:</strong> Full PCB files, firmware, 3D models, and
          documentation
        </li>
        <li>
          <strong>Professional Firmware:</strong> QMK with Vial support for real-time configuration
        </li>
      </ul>
    </div>

    <h2 class="text-[--isr-c-red] font-bold text-xl mb-4 mt-8">🛠️ Hardware Engineering</h2>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-[--isr-c-red] font-semibold mb-2">🔌 PCB Design</h3>
        <p class="text-sm">
          Complete KiCad project with 5×4 key matrix, breakpoints with reinforced traces, and
          optimized routing for both USB and RGB data lines.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-[--isr-c-red] font-semibold mb-2">💡 RGB Engineering</h3>
        <p class="text-sm">
          All LEDs face downward for maximum underglow effect. 4960 Neopixels provide significantly
          more brightness than standard WS2812B LEDs.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-[--isr-c-red] font-semibold mb-2">🧩 Modular Innovation</h3>
        <p class="text-sm">
          Intentional breakpoints allow sections to snap apart and serve as a stand, creating
          multiple form factors from a single PCB design.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-[--isr-c-red] font-semibold mb-2">⚡ Power Management</h3>
        <p class="text-sm">
          USB bus-powered with intelligent brightness limiting to stay within USB 2.0 current
          specifications while maximizing visual impact.
        </p>
      </div>
    </div>

    <h2 class="text-[--isr-c-red] font-bold text-xl mb-4 mt-8">💻 Firmware & Software</h2>

    <div class="bg-blue-900/20 backdrop-blur-sm border-l-4 border-blue-500 p-4 mb-6">
      <h3 class="text-blue-300 font-semibold mb-2">🎹 QMK Firmware Foundation</h3>
      <p class="text-sm">
        Built on the industry-standard QMK firmware framework with full N-key rollover, multiple
        layers, and extensive customization options. Includes both default and Vial-compatible
        keymaps for different user preferences.
      </p>
    </div>

    <h3 class="text-[--isr-c-red] font-semibold mb-2">🔧 Technical Implementation</h3>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li><strong>Matrix Scanning:</strong> 5 rows × 4 columns with COL2ROW diode configuration</li>
      <li>
        <strong>LED Control:</strong> Bitbang WS2812 driver with precise timing for reliable
        operation
      </li>
      <li>
        <strong>USB Bootloader:</strong> USBaspLoader enables firmware updates without external
        programmer
      </li>
      <li>
        <strong>Real-time Config:</strong> Vial support allows keymap changes without reflashing
        firmware
      </li>
    </ul>

    <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg mb-6">
      <h3 class="text-[--isr-c-red] font-semibold mb-2">🎨 RGB Programming</h3>
      <p class="text-sm">
        Custom rainbow mood lighting with configurable parameters. The firmware includes precise
        timing calculations for the 4960 Neopixel protocol and intelligent brightness management to
        prevent USB power issues.
      </p>
    </div>

    <h2 class="text-[--isr-c-red] font-bold text-xl mb-4 mt-8">🎯 Use Cases & Applications</h2>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-[--isr-c-red] font-semibold mb-2">💻 Developer Productivity</h3>
        <p class="text-sm">
          Program Git commands, build shortcuts, and IDE functions. Perfect for rapid development
          workflows.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-[--isr-c-red] font-semibold mb-2">🎮 Content Creation</h3>
        <p class="text-sm">
          Stream controls, OBS shortcuts, Discord functions. RGB provides visual feedback for stream
          status.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-[--isr-c-red] font-semibold mb-2">🎨 Creative Software</h3>
        <p class="text-sm">
          Tool selection in Photoshop, timeline navigation in video editors, brush controls for
          digital art.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-[--isr-c-red] font-semibold mb-2">📊 Data Entry</h3>
        <p class="text-sm">
          Dedicated numpad functionality with ergonomic positioning and reduced hand travel.
        </p>
      </div>
    </div>

    <h2 class="text-[--isr-c-red] font-bold text-xl mb-4 mt-8">🚀 Development Journey</h2>

    <div class="bg-green-900/20 backdrop-blur-sm border-l-4 border-green-500 p-4 mb-6">
      <h3 class="text-green-300 font-semibold mb-2">🎓 Learning Platform</h3>
      <p class="text-sm">
        This project serves as a comprehensive learning resource covering PCB design, embedded
        programming, USB protocols, and open-source hardware development. Complete documentation
        enables community learning and modification.
      </p>
    </div>

    <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg mb-6">
      <h3 class="text-[--isr-c-red] font-semibold mb-2">🎬 Build Process Video</h3>
      <p class="text-sm mb-4">
        Watch the complete assembly process from PCB soldering to final testing. This build video
        demonstrates the hands-on construction techniques and provides visual guidance for anyone
        wanting to build their own Skyline_20K macropad.
      </p>
      <div class="text-center">
        <a
          href="https://youtu.be/h0hoNd8aZaA?autoplay=1&mute=1"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2">
          🎬 Watch Build Video on YouTube
        </a>
      </div>
    </div>

    <h3 class="text-[--isr-c-red] font-semibold mb-2">🛠️ Current Status & Known Issues</h3>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li><strong>Prototype Complete:</strong> Functional hardware with documented minor issues</li>
      <li>
        <strong>LED Pad Issue:</strong> First revision requires manual connections (documented fix
        for v2)
      </li>
      <li><strong>Brightness Management:</strong> Full brightness may exceed USB current limits</li>
      <li>
        <strong>Active Development:</strong> Continuous improvements based on community feedback
      </li>
    </ul>

    <h2 class="text-[--isr-c-red] font-bold text-xl mb-4 mt-8">🌟 Community Impact</h2>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-[--isr-c-red] font-semibold mb-2">📚 Educational Resource</h3>
        <p class="text-sm">
          Complete open-source design teaches PCB engineering, firmware development, and product
          lifecycle.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-[--isr-c-red] font-semibold mb-2">🔧 Customization Platform</h3>
        <p class="text-sm">
          Foundation for community modifications, variants, and improvements in the maker ecosystem.
        </p>
      </div>
    </div>

    <div class="bg-orange-900/20 border-l-4 border-orange-500 p-4 mb-6">
      <h3 class="text-orange-300 font-semibold mb-2">🚀 Future Roadmap</h3>
      <p class="text-sm">
        Planned improvements include PCB revision for LED alignment, wireless variants, hot-swap
        socket support, and potential group buy organization for wider community access.
      </p>
    </div>

    <div class="text-center mt-8 p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg">
      <p class="mb-4">
        <strong>Ready to build your own or contribute to the project?</strong>
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://github.com/isandrocks/Skyline_20K"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-[--isr-c-red] hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">
          🔗 GitHub Repository
        </a>
        <a
          href="https://docs.qmk.fm/"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
          📖 QMK Documentation
        </a>
      </div>
      <p class="text-sm mt-2 text-gray-400">GPL-2.0 License • Open Source Hardware</p>
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
