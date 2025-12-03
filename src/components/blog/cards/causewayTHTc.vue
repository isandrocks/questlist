<template>
  <el-card
    style="max-width: 100%; background-color:  color-mix(in oklab, var(--color-white) 10%"
    shadow="hover"
    @click="$router.push('/blog/causeway_THT')"
    class="cursor-pointer backdrop-blur-lg">
    <template #header>
      <h1
        class="text-white text-center text-xl lg:text-3xl font-extrabold
          [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
        Causeway_THT
      </h1>
    </template>
    <div class="grid grid-cols-2 gap-2 max-w-[60vh] overflow-hidden p-2">
      <img
        src="@/assets/projectImgs/vy02HwZ.jpg"
        class="w-full h-32 object-cover rounded-md" />
      <img
        src="@/assets/projectImgs/WSpeWCg.png"
        class="w-full h-32 object-cover rounded-md" />
      <img
        src="@/assets/projectImgs/gtjLou9c.jpg"
        class="w-full h-32 object-cover rounded-md" />
      <img
        src="@/assets/projectImgs/1tNBtoA.png"
        class="w-full h-32 object-cover rounded-md" />
    </div>
    <p class="text-center border-t border-(--color-border)">
      My first keyboard DIY kit. Using the ATmega32A MCU and running QMK Custom firmware.
    </p>
  </el-card>
</template>
