<script setup>
import { ref } from 'vue'

const selectedImage = ref(null)

const openImage = (image) => {
  selectedImage.value = image
}

const closeImage = () => {
  selectedImage.value = null
}
</script>

<template>
  <div class="bg-[#1d1e1f] rounded-s shadow-lg border border-[var(--color-border)] overflow-hidden">
    <div>
      <h1
        class="text-white text-center text-4xl md:text-3xl font-extrabold
          [text-shadow:_-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black] border-b
          border-[var(--color-border)] py-[18px]">
          <a
          href="https://github.com/isandrocks/Causeway_THT"
          target="_blank"
          rel="noopener noreferrer"
          ><span class="text-[--isr-c-red] text-4xl font-extrabold cursor-pointer">Causeway_THT</span></a> ortholinear 5x14 keyboard
      </h1>
    </div>
    <div class="flex justify-center border-b border-[var(--color-border)]">
      <img
        src="@/assets/projectImgs/fNqepYMF.jpg"
        class="p-2 max-h-[60vh]" />
    </div>
    <div class="flex-row flex">
      <img
        src="@/assets/projectImgs/WSpeWCg.png"
        class="p-2 max-w-[30vw] rounded-s shadow-md cursor-zoom-in hover:scale-105 transition-transform"
        @click="
          // @ts-ignore
          openImage($event.target.src)
        " />
      <p class="text-center p-2 self-center">
        My first keyboard
        <a
          href="https://github.com/isandrocks/Causeway_THT"
          target="_blank"
          rel="noopener noreferrer"
          ><span class="text-[--isr-c-red] cursor-pointer">DIY</span></a
        >
        kit!<br /><br />
        This is a 69 key (nice) keyboard assembled with only through hole components, including usb
        type-c.<br />
        This board is useing the ATmega32A MCU and running QMK Custom firmware.<br />
        The basic layout of the board is a copy of the Boardwalk Ortho 5x14 with some extra
        configurations that can be swapped out.
      </p>
    </div>
    <div class="flex-row flex">
      <p class="text-center p-2 self-center">
        <b>Some frequently asked question I got.</b><br /><br />

        <u>Why is the USB-C port on its side?</u><br />
        When I was looking at USB-C THT components on Digi-Key I found this one that had its pins on
        the side and was like "Huh, That's neat." *adds to cart*<br /><br />

        <u
          >When I open the PCB gbr files or look at it in KiCad there is a giant graphic of The
          Great Wave by Katsushika Hokusai Blocking Everything!</u
        ><br />
        When I was looking at other designer's PCB's I thought that mine was kinda bland, so I added
        a big SVG to be silk-screened on top of everything. If you're in KiCad, you can turn off the
        visibility of the F.Silkscreen layer so you can see the rest of the board.<br /><br />

        <u>I see there is a Case.step and acrylic.dxf file in there.</u><br />
        I looked into seeing how much it would cost to get a case CNC'ed in aluminum and anodized.
        (it was too expensive) so I ended up just printing one out on my 3D printer. The acrylic
        panel that covers the components was relatively cheap though.
      </p>
      <img
        src="@/assets/projectImgs/decpwZhH.png"
        class="p-2 max-w-[30vw] rounded-s shadow-md cursor-zoom-in hover:scale-105 transition-transform"
        @click="
          // @ts-ignore
          openImage($event.target.src)
        " />
    </div>
  </div>
  <div
    v-if="selectedImage"
    class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
    @click="closeImage">
    <div class="relative flex">
      <img
        :src="selectedImage"
        class="max-w-[60vw] max-h-[85vh] rounded-lg"
        @click="closeImage" />
    </div>
  </div>
</template>
