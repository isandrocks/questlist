<script setup>
import { ref, onMounted, nextTick } from 'vue'

const items = ref([
  {
    src: new URL('@/assets/projectImgs/p8vcvwsG.jpg', import.meta.url).href,
    alt: 'My custom Plague Doctor skateboard deck that I painted. Everything except for the Con-Save logo is made up of halftone circles. It was a pain to mask when painting the red over the back!'
  },
  {
    src: new URL('@/assets/projectImgs/opUYC6FS.jpg', import.meta.url).href,
    alt: 'This is a recreation of part of the Cowboy Bebop opening. I used a laser cutter to burn in the highlighted sections on a board I had already painted and glossed black. I then covered it with blue acrylic paint. When I wiped off the excess, the blue only stuck to the burnt-in sections. Also "Tank!" by Seatbelts is the best opening song to an anime ever'
  },
  {
    src: new URL('@/assets/projectImgs/2vjjkYCd.jpg', import.meta.url).href,
    alt: 'I made this using the pose from The Amazing Spider-Man #1 Variant Edition (2014) and styled like the cover of Peter Parker, the Spectacular Spider-Man #101 (1976).'
  },
  {
    src: new URL('@/assets/projectImgs/bSDPqMEL.jpg', import.meta.url).href,
    alt: 'I found a stencil online for Pikachu and used my laser cutter to cut it out of a piece of ABS plastic. It turned out pretty good and very reusable!'
  },
  {
    src: new URL('@/assets/projectImgs/ZjQLLl9A.jpg', import.meta.url).href,
    alt: 'I painted and etched a print of sailor Jupiter for a buddy of mine. the original art this is based off of is by YanomeMurasaki on twitter'
  },
  {
    src: new URL('@/assets/projectImgs/VS2u9ieX.jpg', import.meta.url).href,
    alt: 'Just a simple Akatsuki cloud. The red and silver parts are actually a vinyl sticker I cut out, and the black is burnt in by my laser cutter.'
  },
  {
    src: new URL('@/assets/projectImgs/r7BpBDyP.jpg', import.meta.url).href,
    alt: 'Scanty and kneesocks from Panty and Stocking with Garterbelt. This one turned out the best so far! I masked the eniter canvas and laser cut the outline. I then went through color by color with acrylic markers.'
  },
  { src: new URL('@/assets/projectImgs/Sz36k7qv.jpg', import.meta.url).href,
    alt: 'Koseki Bijou from Team Tomodachi Music Video. Im not too happy with how this one turned out. I think I could have done a lot better. The original art this is based on is by Pungson Mori (@33aalloonnHD on Twitter).'
   },
  { src: new URL('@/assets/projectImgs/sFXIT9lL.jpg', import.meta.url).href,
    alt: 'Hatsune Miku from Mimukauwa Nice Try. This was one of my first attempts at the masking and laser-cutting method. It was originally just going to be a vinyl sticker with laser-cut outlines, but the spray paint and acrylic markers turned out better.'
   }
])

const selectedImage = ref(null)
const masonry = ref(null)
const masonryHeight = ref(0)
const columnWPercent = ref(33.33)

const openImage = (image) => {
  selectedImage.value = image
  selectedImage.value.alt = image.alt
}

const closeImage = () => {
  selectedImage.value = null
}

onMounted(async () => {
  await nextTick()
  layoutMasonry()
  window.addEventListener('resize', () => {
    layoutMasonry()
  })
})

function layoutMasonry() {
  if (!masonry.value) return

  const columns = 3 // Change for responsiveness
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
        class="text-white text-center text-4xl lg:text-3xl font-extrabold
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
            // @ts-ignore
            top: item.top + 'px',
            // @ts-ignore
            left: item.left + 'px',
            width: `calc(${columnWPercent}% - 10px)`
          }">
          <img
            :src="item.src"
            class="rounded-s shadow-md cursor-pointer hover:scale-110 transition-transform"
            :alt="item.alt"
            @click="openImage(item)"
            @load="layoutMasonry" />
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="selectedImage"
    class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
    @click="closeImage">
    <div class="relative flex flex-col md:flex-row px-2">
      <img
        :src="selectedImage.src"
        class="max-w-[60vw] object-contain self-center max-h-[85vh] rounded-lg"
        @click="closeImage" />
      <p class="text-center py-3 text-white md:text-xl md:font-bold self-center mx-auto">
        {{ selectedImage.alt }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.masonry-container {
  position: relative;
  width: 100%;;
  padding: 10px;
}

.masonry-item {
  position: absolute;
  transition: all 0.3s ease-in-out;
}
</style>
