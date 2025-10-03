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
  new URL('@/assets/projectImgs/fNqepYMF.jpg', import.meta.url).href,
  new URL('@/assets/projectImgs/WSpeWCg.png', import.meta.url).href,
  new URL('@/assets/projectImgs/vy02HwZ.jpg', import.meta.url).href,
  new URL('@/assets/projectImgs/decpwZhH.png', import.meta.url).href,
  new URL('@/assets/projectImgs/yj4mHjwU.jpg', import.meta.url).href,
  new URL('@/assets/projectImgs/1tNBtoA.png', import.meta.url).href,
  new URL('@/assets/projectImgs/gtjLou9c.jpg', import.meta.url).href
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
          href="https://github.com/isandrocks/Causeway_THT"
          target="_blank"
          rel="noopener noreferrer"
          ><span class="text-[--isr-c-red] text-4xl font-extrabold cursor-pointer"
            >Causeway_THT</span
          ></a
        >
        Ortholinear 5x14 Keyboard
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
          class="object-contain w-full h-full top-0 rounded-s shadow-md cursor-zoom-in hover:scale-102 transition-transform"
          @click="openImage(image)" />
      </el-carousel-item>
    </el-carousel>

    <div class="tech-stack text-center p-4 bg-gray-800/30 rounded-lg my-6">
      <h3 class="text-[--isr-c-red] font-bold mb-2">Built with ⌨️</h3>
      <div class="flex flex-wrap justify-center gap-2 text-sm">
        <span class="bg-green-500/20 px-2 py-1 rounded">ATmega32A</span>
        <span class="bg-blue-500/20 px-2 py-1 rounded">QMK Firmware</span>
        <span class="bg-purple-500/20 px-2 py-1 rounded">KiCad</span>
        <span class="bg-yellow-500/20 px-2 py-1 rounded">USB-C</span>
        <span class="bg-orange-500/20 px-2 py-1 rounded">Through-Hole</span>
      </div>
    </div>

    <p class="text-center p-2 self-center">
      My first custom mechanical keyboard
      <a
        href="https://github.com/isandrocks/Causeway_THT"
        target="_blank"
        rel="noopener noreferrer"
        ><span class="text-[--isr-c-red] cursor-pointer">DIY kit</span></a>! 
      This 69-key (nice) ortholinear keyboard is assembled entirely with through-hole components, 
      including a sideways USB Type-C connector. Built on the ATmega32A MCU running QMK firmware, 
      it's a copy of the Boardwalk Ortho 5x14 layout with custom configurations.
    </p>

    <h2 class="text-[--isr-c-red] font-bold text-xl mb-4 mt-8">🚀 Key Features</h2>
    
    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="bg-gray-800/20 p-4 rounded-lg">
        <h3 class="text-[--isr-c-red] font-semibold mb-2">⌨️ 69-Key Ortholinear Layout</h3>
        <p class="text-sm">
          5×14 grid layout based on the Boardwalk design, optimized for touch typing and programming workflows.
        </p>
      </div>
      
      <div class="bg-gray-800/20 p-4 rounded-lg">
        <h3 class="text-[--isr-c-red] font-semibold mb-2">🔧 Through-Hole Only</h3>
        <p class="text-sm">
          Built entirely with through-hole components for easy hand-soldering and component accessibility.
        </p>
      </div>
      
      <div class="bg-gray-800/20 p-4 rounded-lg">
        <h3 class="text-[--isr-c-red] font-semibold mb-2">🔌 Sideways USB-C</h3>
        <p class="text-sm">
          Unique sideways USB-C connector placement for a distinctive aesthetic and practical cable management.
        </p>
      </div>
      
      <div class="bg-gray-800/20 p-4 rounded-lg">
        <h3 class="text-[--isr-c-red] font-semibold mb-2">⚙️ QMK Powered</h3>
        <p class="text-sm">
          Runs QMK firmware on ATmega32A MCU with full customization and programming support.
        </p>
      </div>
    </div>

    <h2 class="text-[--isr-c-red] font-bold text-xl mb-4 mt-8">🎨 Design Details</h2>

    <div class="bg-gray-800/20 p-4 rounded-lg mb-6">
      <h3 class="text-[--isr-c-red] font-semibold mb-2">🌊 The Great Wave Silkscreen</h3>
      <p class="mb-2">
        Features a large silkscreen of "The Great Wave off Kanagawa" by Katsushika Hokusai covering the entire PCB:
      </p>
      <ul class="list-disc pl-6 space-y-1 text-sm">
        <li>Artistic PCB design that doubles as functional electronics</li>
        <li>F.Silkscreen layer can be toggled off in KiCad for component visibility</li>
        <li>Transforms a functional keyboard into a piece of art</li>
      </ul>
    </div>

    <h2 class="text-[--isr-c-red] font-bold text-xl mb-4 mt-8">❓ Frequently Asked Questions</h2>

    <div class="space-y-6">
      <div class="bg-gray-800/20 p-4 rounded-lg">
        <h3 class="text-[--isr-c-red] font-semibold mb-2">Why is the USB-C port on its side?</h3>
        <p class="text-sm">
          When browsing USB-C THT components on Digi-Key, I found this unique connector with sideways pins and thought "Huh, that's neat!" 
          *adds to cart* - Sometimes the best design decisions come from curiosity about interesting components.
        </p>
      </div>

      <div class="bg-gray-800/20 p-4 rounded-lg">
        <h3 class="text-[--isr-c-red] font-semibold mb-2">The Great Wave is blocking everything in KiCad!</h3>
        <p class="text-sm">
          When looking at other designers' PCBs, mine felt bland, so I added The Great Wave SVG to be silk-screened across the entire board. 
          In KiCad, simply turn off the F.Silkscreen layer visibility to see the underlying components and traces.
        </p>
      </div>

      <div class="bg-gray-800/20 p-4 rounded-lg">
        <h3 class="text-[--isr-c-red] font-semibold mb-2">What about the Case.step and acrylic.dxf files?</h3>
        <p class="text-sm">
          I researched CNC aluminum case manufacturing with anodizing, but it was prohibitively expensive. 
          Instead, I 3D printed the case and had an acrylic component cover made - much more budget-friendly while still protecting the electronics.
        </p>
      </div>
    </div>

    <div class="text-center mt-8 p-4 bg-gray-800/30 rounded-lg">
      <p class="mb-4">
        <strong>Interested in building your own Causeway_THT?</strong>
      </p>
      <a
        href="https://github.com/isandrocks/Causeway_THT"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block bg-[--isr-c-red] hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">
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
