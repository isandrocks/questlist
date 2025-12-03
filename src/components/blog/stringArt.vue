<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import IconClapperboard from '@/components/icons/IconClapperboard.vue'
import IconSnake from '@/components/icons/IconSnake.vue'
import IconPalette from '@/components/icons/IconPalette.vue'
import IconAbacus from '@/components/icons/IconAbacus.vue'
import IconRocket from '@/components/icons/IconRocket.vue'
import IconTarget from '@/components/icons/IconTarget.vue'
import IconRuler from '@/components/icons/IconRuler.vue'
import IconMonitor from '@/components/icons/IconMonitor.vue'
import IconMicroscope from '@/components/icons/IconMicroscope.vue'
import IconChartBar from '@/components/icons/IconChartBar.vue'
import IconTools from '@/components/icons/IconTools.vue'
import IconLightning from '@/components/icons/IconLightning.vue'
import IconHeart from '@/components/icons/IconHeart.vue'
import IconRainbow from '@/components/icons/IconRainbow.vue'
import IconWrench from '@/components/icons/IconWrench.vue'
import IconStar from '@/components/icons/IconStar.vue'
import IconFactory from '@/components/icons/IconFactory.vue'
import IconLink from '@/components/icons/IconLink.vue'
import IconCrystalBall from '@/components/icons/IconCrystalBall.vue'

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
  new URL('@/assets/projectImgs/e65vWU5N.png', import.meta.url).href,
  new URL('@/assets/projectImgs/D8yVwkWK.png', import.meta.url).href,
  new URL('@/assets/projectImgs/TlPm2xo3.png', import.meta.url).href
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
          href="https://github.com/isandrocks/Img-manipulation"
          target="_blank"
          rel="noopener noreferrer"
          ><span class="text-(--isr-c-red) text-4xl font-extrabold cursor-pointer"
            >String Art Generator</span
          ></a
        >
        Mathematical Image to Thread Art Conversion
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

    <!-- Process Video Section -->
    <div class="video-container my-8">
      <h3
        class="text-(--isr-c-red) font-bold text-xl mb-4 text-center flex items-center
          justify-center gap-2">
        <IconClapperboard class="w-6 h-6" /> Watch the Magic Happen
      </h3>
      <div class="flex justify-center">
        <video
          controls
          class="max-w-full h-auto rounded-lg shadow-lg"
          :style="{ maxHeight: windowWidth < 768 ? '300px' : '500px' }">
          <source
            src="@/assets/projectImgs/K3wEpTgf.mp4"
            type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p class="text-center text-sm text-gray-400 mt-2">
        Time-lapse showing the string art generation process in real-time
      </p>
    </div>

    <div class="tech-stack text-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg my-6">
      <h3 class="text-(--isr-c-red) font-bold mb-2 flex items-center justify-center gap-2">
        Built with Python <IconSnake class="w-5 h-5" />
      </h3>
      <div class="flex flex-wrap justify-center gap-2 text-sm">
        <span class="bg-blue-500/20 px-2 py-1 rounded">NumPy</span>
        <span class="bg-green-500/20 px-2 py-1 rounded">scikit-image</span>
        <span class="bg-purple-500/20 px-2 py-1 rounded">PIL/Pillow</span>
        <span class="bg-yellow-500/20 px-2 py-1 rounded">Tkinter</span>
        <span class="bg-orange-500/20 px-2 py-1 rounded">MoviePy</span>
        <span class="bg-red-500/20 px-2 py-1 rounded">SVGWrite</span>
      </div>
    </div>

    <p class="text-center p-2 self-center">
      This project transforms digital images into
      <a
        href="https://en.wikipedia.org/wiki/String_art"
        target="_blank"
        rel="noopener noreferrer"
        ><span class="text-(--isr-c-red) cursor-pointer">string art</span></a
      >
      using sophisticated mathematical algorithms that simulate the traditional craft of stretching
      thread between pins on a circular board. It combines computer vision, optimization algorithms,
      and the Radon Transform to create stunning artistic interpretations.
    </p>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconPalette class="w-6 h-6" /> The Art Meets Science
    </h2>

    <div class="bg-blue-900/20 backdrop-blur-sm border-l-4 border-blue-500 p-4 mb-6">
      <h3 class="text-blue-300 font-semibold mb-2 flex items-center gap-2">
        <IconAbacus class="w-5 h-5" /> The Algorithm
      </h3>
      <p class="text-sm">
        The core algorithm uses a <strong>greedy optimization approach</strong> combined with the
        <strong>Radon Transform</strong>
        (typically used in medical imaging) to analyze image structures and determine optimal line
        placement. Each iteration selects the next thread position that minimizes the visual error
        between the original image and current reconstruction.
      </p>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconRocket class="w-6 h-6" /> Key Features
    </h2>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconTarget class="w-5 h-5" /> Multiple Art Modes
        </h3>
        <p class="text-sm">
          <strong>Grayscale:</strong> Classic black thread on white background<br />
          <strong>CMYK Color:</strong> Full-color string art using four separate color channels
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconRuler class="w-5 h-5" /> Realistic Constraints
        </h3>
        <p class="text-sm">
          Simulates real-world limitations like minimum pin distance, loop prevention, and
          adjustable thread weight for authentic results.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconClapperboard class="w-5 h-5" /> Multiple Output Formats
        </h3>
        <p class="text-sm">
          Generate high-res images, scalable SVG files, time-lapse videos, and JSON instructions for
          physical recreation.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconMonitor class="w-5 h-5" /> User-Friendly GUI
        </h3>
        <p class="text-sm">
          Intuitive interface with real-time parameter adjustment, progress tracking, and live
          preview capabilities.
        </p>
      </div>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconMicroscope class="w-6 h-6" /> Technical Deep Dive
    </h2>

    <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
      <IconChartBar class="w-5 h-5" /> Mathematical Foundation
    </h3>

    <div class="bg-gray-900/50 p-4 rounded-lg mb-6 font-mono text-sm">
      <div class="text-green-400 mb-2">Pin Placement Algorithm:</div>
      <div class="ml-4 space-y-1">
        <div>
          • <span class="text-yellow-400">288 pins</span>
          <span class="text-gray-400"># Default (36 × 8)</span>
        </div>
        <div>
          • <span class="text-yellow-400">Circular layout</span>
          <span class="text-gray-400"># Evenly distributed</span>
        </div>
        <div>
          • <span class="text-yellow-400">Radon Transform</span>
          <span class="text-gray-400"># Line optimization</span>
        </div>
        <div>
          • <span class="text-yellow-400">Error minimization</span>
          <span class="text-gray-400"># Greedy selection</span>
        </div>
      </div>
    </div>

    <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg mb-6">
      <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
        <IconTarget class="w-5 h-5" /> Error Calculation Formula
      </h3>
      <div class="bg-gray-900/50 p-3 rounded font-mono text-sm">
        <div>Error = (Current_Image - Original_Image)</div>
        <div>Multiplier = (Current_Image &lt; Original_Image) ? 254 : 1</div>
        <div>Absolute_Diff = Error × Multiplier</div>
        <div>Percentage = (Sum(Absolute_Diff) / Total_Pixels) × 100</div>
      </div>
      <p class="text-sm mt-2">
        This sophisticated error calculation ensures optimal thread placement by heavily penalizing
        areas that are too dark while allowing lighter regions.
      </p>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconTools class="w-6 h-6" /> Project Architecture
    </h2>

    <div class="bg-gray-900/50 p-4 rounded-lg mb-6 font-mono text-sm">
      <div class="text-green-400 mb-2">Project Structure:</div>
      <div class="ml-4">
        <div>├── SA_GUI.py <span class="text-gray-400"># Main GUI application</span></div>
        <div>├── SAapp.py <span class="text-gray-400"># Core algorithm engine</span></div>
        <div>├── requirements.txt <span class="text-gray-400"># Dependencies</span></div>
        <div>├── output/ <span class="text-gray-400"># Generated artwork</span></div>
        <div>├── old/ <span class="text-gray-400"># Legacy experiments</span></div>
        <div>└── string_art_rust/ <span class="text-gray-400"># Rust port (WIP)</span></div>
      </div>
    </div>

    <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
      <IconLightning class="w-5 h-5" /> Performance Optimizations
    </h3>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>
        <strong>Vectorized Operations:</strong> NumPy arrays for efficient mathematical computations
      </li>
      <li><strong>Line Caching:</strong> Pre-computes all possible thread paths for speed</li>
      <li><strong>Adaptive Scaling:</strong> Processes at 512×512, outputs at 1024×1024</li>
      <li><strong>Early Termination:</strong> Stops when improvement plateaus automatically</li>
      <li>
        <strong>Stagnation Detection:</strong> Intelligent stopping criteria prevent infinite loops
      </li>
    </ul>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconPalette class="w-6 h-6" /> Output Gallery
    </h2>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="text-center flex flex-col items-center">
        <h4 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconHeart class="w-5 h-5" /> Grayscale Mode
        </h4>
        <p class="text-sm">
          Classic black thread aesthetic with incredible detail preservation and artistic
          interpretation.
        </p>
      </div>
      <div class="text-center flex flex-col items-center">
        <h4 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconRainbow class="w-5 h-5" /> CMYK Color Mode
        </h4>
        <p class="text-sm">
          Full-color recreation using separate cyan, magenta, yellow, and black thread channels.
        </p>
      </div>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconWrench class="w-6 h-6" /> Advanced Parameters
    </h2>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="bg-gray-800/20 backdrop-blur-sm p-3 rounded-lg">
        <h4 class="text-(--isr-c-red) font-semibold text-sm mb-1">Line Weight (1-100)</h4>
        <p class="text-xs">Controls thread darkness and visual thickness</p>
      </div>
      <div class="bg-gray-800/20 backdrop-blur-sm p-3 rounded-lg">
        <h4 class="text-(--isr-c-red) font-semibold text-sm mb-1">Scale Factor (1-10)</h4>
        <p class="text-xs">Affects processing resolution and detail level</p>
      </div>
      <div class="bg-gray-800/20 backdrop-blur-sm p-3 rounded-lg">
        <h4 class="text-(--isr-c-red) font-semibold text-sm mb-1">Min Distance</h4>
        <p class="text-xs">Prevents unrealistic adjacent pin connections</p>
      </div>
      <div class="bg-gray-800/20 backdrop-blur-sm p-3 rounded-lg">
        <h4 class="text-(--isr-c-red) font-semibold text-sm mb-1">Pin Count</h4>
        <p class="text-xs">Configurable (must be multiple of 36)</p>
      </div>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconStar class="w-6 h-6" /> Real-World Applications
    </h2>

    <div class="grid md:grid-cols-3 gap-4 mb-6">
      <div class="text-center flex flex-col items-center">
        <div class="mb-2"><IconPalette class="w-8 h-8" /></div>
        <div class="font-semibold text-(--isr-c-red)">Digital Art</div>
        <div class="text-sm">
          Create unique artistic interpretations of photographs and portraits
        </div>
      </div>

      <div class="text-center flex flex-col items-center">
        <div class="mb-2"><IconFactory class="w-8 h-8" /></div>
        <div class="font-semibold text-(--isr-c-red)">Manufacturing</div>
        <div class="text-sm">JSON output drives CNC machines for automated physical recreation</div>
      </div>

      <div class="text-center flex flex-col items-center">
        <div class="mb-2"><IconMonitor class="w-8 h-8" /></div>
        <div class="font-semibold text-(--isr-c-red)">Education</div>
        <div class="text-sm">Demonstrate optimization algorithms and computer vision concepts</div>
      </div>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconChartBar class="w-6 h-6" /> Performance Metrics
    </h2>

    <div class="grid md:grid-cols-3 gap-4 mb-6">
      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg text-center">
        <div class="text-2xl font-bold text-(--isr-c-red)">75-85%</div>
        <div class="text-sm">Typical Similarity Rate</div>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg text-center">
        <div class="text-2xl font-bold text-(--isr-c-red)">1K-15K</div>
        <div class="text-sm">Lines Generated</div>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg text-center">
        <div class="text-2xl font-bold text-(--isr-c-red)">30s-5m</div>
        <div class="text-sm">Processing Time</div>
      </div>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconRocket class="w-6 h-6" /> Technical Innovation
    </h2>

    <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg mb-6">
      <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
        <IconMicroscope class="w-5 h-5" /> Unique Algorithmic Approach
      </h3>
      <p class="mb-2">
        This project uniquely applies the <strong>Radon Transform</strong> to string art generation
        - a technique typically reserved for medical imaging and tomography:
      </p>
      <ul class="list-disc pl-6 space-y-1 text-sm">
        <li>Analyzes image structure in polar coordinates optimized for circular pin layouts</li>
        <li>Weights line selections based on underlying mathematical image patterns</li>
        <li>Provides superior optimization compared to traditional pixel-by-pixel approaches</li>
        <li>Enables both grayscale and innovative CMYK color processing</li>
      </ul>
    </div>

    <div class="bg-green-900/20 backdrop-blur-sm border-l-4 border-green-500 p-4 mb-6">
      <h3 class="text-green-300 font-semibold mb-2 flex items-center gap-2">
        <IconTarget class="w-5 h-5" /> Bridging Digital and Physical
      </h3>
      <p class="text-sm">
        One of the few projects that seamlessly bridges computational art generation with real-world
        craft instructions. The JSON output format provides precise pin sequences that can be
        followed manually or fed into CNC machines for physical reproduction.
      </p>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconCrystalBall class="w-6 h-6" /> Future Potential
    </h2>

    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>
        <strong>Machine Learning Integration:</strong> Neural networks could improve line selection
        strategies
      </li>
      <li>
        <strong>3D String Art:</strong> Extension to spherical or volumetric string sculptures
      </li>
      <li><strong>Real-time Processing:</strong> GPU acceleration for interactive creation</li>
      <li><strong>Web Version:</strong> Browser-based implementation for wider accessibility</li>
      <li><strong>Mobile Apps:</strong> Touch-friendly interfaces for tablets and phones</li>
    </ul>

    <div class="text-center mt-8 p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg">
      <p class="mb-4">
        <strong>Ready to create your own string art?</strong>
      </p>
      <a
        href="https://github.com/isandrocks/Img-manipulation"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block bg-(--isr-c-red) hover:bg-red-600 text-white font-bold py-2 px-6
          rounded-lg transition-colors items-center justify-center gap-2">
        <IconLink class="w-5 h-5" /> View on GitHub
      </a>
      <p class="text-sm mt-2 text-gray-400">CC0 1.0 Universal License - Free for any use</p>
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
  margin-top: 12px;
}

.hover\:scale-102:hover {
  transform: scale(1.02);
}

.video-container video {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}
</style>
