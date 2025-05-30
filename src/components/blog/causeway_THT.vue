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
        ortholinear 5x14 keyboard
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
      My first keyboard
      <a
        href="https://github.com/isandrocks/Causeway_THT"
        target="_blank"
        rel="noopener noreferrer"
        ><span class="text-[--isr-c-red] cursor-pointer">DIY</span></a
      >
      kit!<br /><br />
      This is my custom-made 69 key (nice) keyboard assembled with only through hole components,
      including usb type-c.<br />
      This board is useing the ATmega32A MCU and running QMK Custom firmware.<br />
      The basic layout of the board is a copy of the Boardwalk Ortho 5x14 with some extra
      configurations that can be swapped out.
    </p>

    <p class="text-center p-2 self-center">
      <b>Some frequently asked question I got.</b><br /><br />

      <u>Why is the USB-C port on its side?</u><br />
      When I was looking at USB-C THT components on Digi-Key I found this one that had its pins on
      the side and was like "Huh, That's neat." *adds to cart*<br /><br />

      <u
        >When I open the PCB gbr files or look at it in KiCad there is a giant graphic of The Great
        Wave by Katsushika Hokusai Blocking Everything!</u
      ><br />
      When I was looking at other designer's PCB's I thought that mine was kinda bland, so I added a
      big SVG to be silk-screened on top of everything. If you're in KiCad, you can turn off the
      visibility of the F.Silkscreen layer so you can see the rest of the board.<br /><br />

      <u>I see there is a Case.step and acrylic.dxf file in there.</u><br />
      I looked into seeing how much it would cost to get a case CNC'ed in aluminum and anodized. (it
      was too expensive) so I ended up just printing one out on my 3D printer. The acrylic panel
      that covers the components was relatively cheap though.
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

<style scoped></style>
