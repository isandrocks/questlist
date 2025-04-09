<template>
  <el-card
    style="max-width: 60vh"
    shadow="hover">
    <template #header>
      <h1
        class="text-white text-center text-4xl md:text-3xl font-extrabold
          [text-shadow:_-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
        Causeway_THT
      </h1>
    </template>
    <div class="grid grid-cols-2 max-w-[60vh] max-h-[60vh] overflow-auto">
      <img
        src="@/assets/projectImgs/vy02HwZ.jpg"
        class="p-2" />
      <img
        src="@/assets/projectImgs/WSpeWCg.png"
        class="pb-2" />
      <img
        src="@/assets/projectImgs/gtjLou9c.jpg"
        class="pb-2" />
      <img
        src="@/assets/projectImgs/1tNBtoA.png"
        class="pb-2" />
    </div>
    <p class="text-center border-t border-[var(--color-border)]">
      My first keyboard DIY kit. Using the ATmega32A MCU and running QMK Custom firmware.
    </p>
  </el-card>
</template>
