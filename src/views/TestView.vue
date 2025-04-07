<script setup>
import { ref, onMounted, nextTick } from 'vue'

const items = ref([
  { src: new URL('@/assets/projectImgs/PXL_20250224_1819497242.jpg', import.meta.url).href },
  { src: new URL('@/assets/projectImgs/PXL_20250115_0222481342.jpg', import.meta.url).href },
  { src: new URL('@/assets/projectImgs/PXL_20250122_023421255.MP2.jpg', import.meta.url).href },
  { src: new URL('@/assets/projectImgs/PXL_20250126_210133486.jpg', import.meta.url).href },
  { src: new URL('@/assets/projectImgs/PXL_20250118_0705277512.jpg', import.meta.url).href },
  { src: new URL('@/assets/projectImgs/PXL_20250112_2006439412.jpg', import.meta.url).href },
  { src: new URL('@/assets/projectImgs/PXL_20250206_0518485652.jpg', import.meta.url).href }
])

const selectedImage = ref(null)
const masonry = ref(null)
const masonryHeight = ref(0)
const columnWPercent = ref(33.33)

const openImage = (image) => {
  selectedImage.value = image
}

const closeImage = () => {
  selectedImage.value = null
}

onMounted(async () => {
  await nextTick()
  layoutMasonry()
})

function layoutMasonry() {
  if (!masonry.value) return

  const columns = 2 // Change for responsiveness
  const edgegap = 10
  const columnHeights = Array(columns).fill(0)
  const columnWidth = masonry.value.clientWidth / columns

  columnWPercent.value = 100 / columns

  items.value = items.value.map((item, index) => {
    const minColumn = columnHeights.indexOf(Math.min(...columnHeights))

    const top = columnHeights[minColumn] + edgegap
    const left = minColumn * columnWidth + edgegap

    columnHeights[minColumn] +=
      document.querySelectorAll('.masonry-item img')[index].clientHeight + 10

    return {
      ...item,
      top,
      left,
      width: columnWidth
    }
  })
  masonryHeight.value = Math.max(...columnHeights)
}
</script>

<template>
  <div class="bg-[#1d1e1f] rounded-s shadow-lg border border-[var(--color-border)]">
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
        ref="masonry"
        class="masonry-container"
        :style="{ height: masonryHeight + 'px' }">
        <div
          class="masonry-item"
          v-for="(item, index) in items"
          :key="index"
          :style="{
            top: item.top + 'px',
            left: item.left + 'px',
            width: `calc(${columnWPercent}% - 10px)`
          }">
          <img
            :src="item.src"
            class="rounded-s shadow-md cursor-pointer hover:scale-110 transition-transform"
            @click="openImage(item.src)"
            @load="layoutMasonry"
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
.masonry-container {
  position: relative;
  width: 100%;
  height: masonryHeight + 'px';
  padding: 10px;
}

.masonry-item {
  position: absolute;
  transition: all 0.3s ease-in-out;
}
</style>
