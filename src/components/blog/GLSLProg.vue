<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import IconLightning from '@/components/icons/IconLightning.vue'
import IconSparkles from '@/components/icons/IconSparkles.vue'
import IconBuilding from '@/components/icons/IconBuilding.vue'
import IconWrench from '@/components/icons/IconWrench.vue'
import IconMonitor from '@/components/icons/IconMonitor.vue'
import IconGear from '@/components/icons/IconGear.vue'
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

// Placeholder images - Please replace with actual project images
const images = [
  new URL('@/assets/projectImgs/5fjll46p.png', import.meta.url).href,
  new URL('@/assets/projectImgs/1ji8kabg.png', import.meta.url).href,
  new URL('@/assets/projectImgs/ot3pzvyc.png', import.meta.url).href
]
</script>

<template>
  <article class="prose prose-lg max-w-3xl px-4 py-4 bg-[#131313cc] backdrop-blur-sm rounded-lg">
    <div>
      <h1
        class="text-white text-center text-4xl lg:text-3xl font-extrabold
          [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black] border-b
          border-(--color-border) py-[18px]">
        <span class="text-(--isr-c-red) text-4xl font-extrabold">Neural Network Shaders:</span>
        With CPPN
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
        <span class="bg-red-500/20 px-2 py-1 rounded">PyTorch</span>
        <span class="bg-blue-500/20 px-2 py-1 rounded">GLSL / HLSL</span>
        <span class="bg-green-500/20 px-2 py-1 rounded">DirectML</span>
        <span class="bg-cyan-500/20 px-2 py-1 rounded">OpenCV</span>
        <span class="bg-purple-500/20 px-2 py-1 rounded">NumPy</span>
      </div>
    </div>

    <p class="text-center p-2 self-center text-lg">
      What if you could take a fully trained PyTorch neural network, freeze its "brain," and run it
      strictly as a native GPU graphics shader at infinite resolution?
    </p>

    <p class="mb-4">
      That's the core concept behind this project. By utilizing <strong>Compositional Pattern-Producing Networks (CPPNs)</strong>, 
      I train a network to understand and replicate an image or generate dynamic procedural organic patterns. 
      Then, instead of deploying it via traditional Python inference, we aggressively extract the raw 
      mathematical weights and compile them directly into a standalone <strong>GLSL / HLSL fragment shader</strong>.
    </p>

    <p class="mb-6">
      The result is a lightweight, resolution-independent, real-time piece of digital art that can 
      be dropped into any 3D engine (Unity, Unreal Engine), game context, or web canvas (WebGL)—with 
      absolutely no ML libraries involved at runtime.
    </p>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconCrystalBall class="w-6 h-6" /> What is a CPPN?
    </h2>

    <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg mb-6">
      <p class="text-sm">
        Unlike a standard Convolutional Neural Network (CNN) that analyzes or manipulates grids of pixels 
        using spatial convolutions, a Compositional Pattern-Producing Network works purely on a per-pixel 
        coordinate basis, much like implicit neural representations (such as NeRFs).
      </p>
      <p class="text-sm mt-3">
        You feed it a normalized spatial coordinate <code>(x, y)</code> and perhaps some latent seeds or time 
        variants, and it computes an estimated <code>(r, g, b, a)</code> color. By passing these coordinates 
        through densely stacked layers of mathematical activation functions (like Sine, Cosine, Sigmoid, 
        Gaussian, or Leaky ReLU), the network naturally fabricates incredibly smooth, continuous geometric 
        gradients, ripples, and shapes.
      </p>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconBuilding class="w-6 h-6" /> The Pipeline: From PyTorch to Shaders
    </h2>
    <p class="text-sm mb-4">The workflow of this repository operates in four highly distinct phases:</p>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconGear class="w-5 h-5" /> 1. The PyTorch Architecture
        </h3>
        <p class="text-sm">
          We script deep generative models consisting of escalating topological complexities: standard 8-layer networks, 
          16-layer multi-scale variants, and intense dense 32-layer feature-concatenation architectures where previous layer outputs compound sequentially (e.g., passing up to 128 concatenated features simultaneously).
          To ensure democratization for users lacking CUDA, the codebase relies on <code>torch-directml</code> as a fallback, 
          enabling hardware acceleration on AMD GPUs heavily on Windows via DirectML.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconMonitor class="w-5 h-5" /> 2. Training Loop & Pre-processing
        </h3>
        <p class="text-sm">
          The network is overfitted to match a target utilizing standard PyTorch loops, evaluated periodically by computing visual losses like standard MSE. Features real-time OpenCV trackbars 
          for sliding ML learning rates in real-time, executing without halting the compute thread thanks to standard <code>cv2.waitKey</code> looping. 
          It supports custom <code>SobelEdgeLoss</code> to maintain stark boundaries and implements "Perlin-noise pre-training" 
          (initializing via an astronomically low-res 4x4 random array and using <code>cv2.INTER_CUBIC</code> interpolation to stretch it across a 256x256 bounding box) to jumpstart structural integrity.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconSparkles class="w-5 h-5" /> 3. The Grand Extraction
        </h3>
        <p class="text-sm">
          Once the training sequence triggers its exit condition, PyTorch matrices inside <code>nn.Linear</code> layers 
          are forcefully decoupled, mapped into raw native OpenGL semantic language. The massive linear tensor layer translates precisely into chunks of iterative <code>.glsl</code> <code>vec4</code> vectors and <code>mat4</code> multidimensional float multipliers. The dense float strings 
          are injected into a <code>.glsl</code> template spanning a monolithic <code>main()</code> function calculating up to 32 
          sequential layers per pixel organically. We even provide tools like <code>glsl_to_hlsl.py</code> to port the code automatically for broader DirectX engine compatibility.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2 flex items-center gap-2">
          <IconMonitor class="w-5 h-5" /> 4. Real-time Rendering
        </h3>
        <p class="text-sm">
          A <code>.glsl</code> script requires zero ML dependencies. Users can infinitely zoom in without pixelation 
          (the network "hallucinates" detail dynamically). We package <code>GLSL_viewer.py</code> and <code>hlsl_viewer.py</code> built on PyGame/PyOpenGL frameworks enabling immediate playback interaction. We pipe active uniforms 
          to the network interface—like audio inputs (<code>uNoise</code>, <code>uScan</code>, etc.), coordinate warps, translation zooms, and <code>iTime</code> shifts—so the artwork interactively morphs responsive to environmental feedback.
        </p>
      </div>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconWrench class="w-6 h-6" /> Solutions & Challenges
    </h2>

    <div class="space-y-6">
      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2">Overcoming "Sigmoid Death"</h3>
        <p class="text-sm">
          <strong>Problem:</strong> With 32 layers of calculation, deep architectures frequently fall victim to vanishing gradients. If the target image demands pure black (<code>0.0</code>) or pure white (<code>1.0</code>) values, default <code>torch.sigmoid</code> final evaluation forces previous gradients to scale towards infinity attempting to reach those mathematical bounds, rendering the canvas purely black.<br />
          <strong>Solution:</strong> The system circumvents this by implicitly clamping target pixel arrays via <code>np.clip(target, 0.02, 0.999)</code>, safely corralling gradients back into healthy functional territory.
        </p>
      </div>

      <div class="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
        <h3 class="text-(--isr-c-red) font-semibold mb-2">GLSL Logic Injections</h3>
        <p class="text-sm">
          <strong>Problem:</strong> Base numerical operations in PyTorch—like <code>LeakyReLU</code> and exponential Gaussian operations—are inherently absent from default OpenGL.<br />
          <strong>Solution:</strong> Custom parallel GLSL logic injections are enforced into the generated shader fragment payload to match PyTorch mathematically:
        </p>
        <pre class="bg-black/50 p-3 rounded-md mt-2 overflow-x-auto"><code class="text-xs text-green-400">vec4 leaky_relu(vec4 x) { return max(x * 0.1, x); }
vec4 gauss(vec4 x) { return exp(-x * x); }
vec4 sigmoid(vec4 x) { return 1.0 / (1.0 + exp(-x)); }</code></pre>
      </div>
    </div>

    <h2 class="text-(--isr-c-red) font-bold text-xl mb-4 mt-8 flex items-center gap-2">
      <IconLightning class="w-6 h-6" /> Key Learnings
    </h2>
    <ul class="list-disc pl-6 space-y-2 text-sm bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg">
      <li>
        <strong>Activation Parity is Vital:</strong> Modulating the <code>PyTorch</code> network layout with experiments (swapping in Sigmoid vs Leaky ReLU vs Gaussian) absolutely necessitates rewriting the parallel template extraction script identically inside the <code>export_weights</code> logic loop to circumvent runtime compilation failures.
      </li>
      <li>
        <strong>Initialization is Art:</strong> Replacing uniformly scaled random tensor data with interpolated structural noise immediately directs the gradient descent down paths that favor smoother, infinitely continuous lines over chaotic particle noise.
      </li>
      <li>
        <strong>Deep Networks Can Survive as Shaders:</strong> Managing a 32-layer variant compilation commands intense string concatenation mapping, yet pushing graphical GPUs to iterate 128 dense concatenated feature aggregations uniquely across millions of distinct pixel coordinates is entirely possible without dropping a single frame of rendering throughput.
      </li>
    </ul>

    <div class="text-center mt-8 p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg">
      <p class="mb-4">
        <strong>Check out the source code!</strong>
      </p>
      <a
        href="https://github.com/isandrocks/CppnTrainerAMD"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block bg-(--isr-c-red) hover:bg-red-600 text-white font-bold py-2 px-6
          rounded-lg transition-colors">
        View on GitHub →
      </a>
    </div>

    <div class="text-center mt-8 p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg text-sm text-gray-400">
      <p>
        <em>Built natively combining PyTorch arrays, DirectML, OpenCV tracking, and raw procedural GPU mathematics.</em>
      </p>
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
