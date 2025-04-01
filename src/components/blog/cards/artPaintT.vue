<script setup>
import { ref } from 'vue'

const images = ref([
  new URL('@/assets/projectImgs/PXL_20250224_1819497242.jpg', import.meta.url).href,
  new URL('@/assets/projectImgs/PXL_20250126_210133486.jpg', import.meta.url).href,
  new URL('@/assets/projectImgs/PXL_20250112_2006439412.jpg', import.meta.url).href,
  new URL('@/assets/projectImgs/PXL_20250115_0222481342.jpg', import.meta.url).href,
  new URL('@/assets/projectImgs/PXL_20250118_0705277512.jpg', import.meta.url).href,
  new URL('@/assets/projectImgs/PXL_20250122_023421255.MP2.jpg', import.meta.url).href,
  new URL('@/assets/projectImgs/PXL_20250206_0518485652.jpg', import.meta.url).href
])

const selectedImage = ref(null)

const openImage = (image) => {
  selectedImage.value = image
}

const closeImage = () => {
  selectedImage.value = null
}
</script>

<template>
  <div class="max-h-[80vh] bg-[#1d1e1f] rounded-s shadow-lg border border-[var(--color-border)]">
    <div>
      <h1
        class="text-white text-center text-4xl md:text-3xl font-extrabold
          [text-shadow:_-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black] border-b
          border-[var(--color-border)] py-[18px]">
        Spray Paint projects
      </h1>
    </div>
    <div>
      <div
        ref="gallery"
        class="grid grid-cols-2 gap-1 p-[20px] h-[63vh] overflow-auto">
        <div
          class="break-inside-avoid"
          v-for="(image, index) in images"
          :key="index">
          <img
            :src="image"
            class="w-full rounded-s shadow-md cursor-pointer hover:scale-110 transition-transform"
            @click="openImage(image)"
            alt="Thumbnail" />
        </div>
      </div>
      <p class="text-center border-t border-[var(--color-border)] pb-[20px] px-[20px]">
        Some spray paint projects I made using stencils I found or made myself and cut out with my
        laser cutter.
      </p>
    </div>
  </div>
  <div
    v-if="selectedImage"
    class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    @click="closeImage">
    <div class="relative">
      <img
        :src="selectedImage"
        class="max-w-[60vh] max-h-[85vh] rounded-lg"
        @click="closeImage" />
      <button
        class="absolute top-2 right-2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-300"
        @click="closeImage">
        ✕
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Ensures grid items push up to fill gaps */
.grid {
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: 10px;
  grid-auto-flow: dense;
}
</style>