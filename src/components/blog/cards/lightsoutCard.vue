<template>
  <el-card
    style="max-width: 100%; object-fit: contain"
    shadow="hover"
    @click="$router.push('/blog/LightsoutGodot')"
    class="cursor-pointer">
    <template #header>
      <h1
        class="text-white text-center text-xl lg:text-3xl font-extrabold
          [text-shadow:_-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
        Lights Out Puzzle
      </h1>
    </template>
    <div
      class="grid grid-cols-2 max-w-full max-h-[45vh] lg:max-h-[60vh] overflow-auto justify-around">
      <img
        src="@/assets/projectImgs/evKTlbYB.png"
        class="p-1 object-contain" />
      <img
        src="@/assets/projectImgs/jP4yC6bg.png"
        alt="aluminum business card front"
        class="p-1 max-h-[35vh] object-contain" />
      <img
        src="@/assets/projectImgs/CyWF3B4B.png"
        class="pb-2 p-1 object-contain" />
      <img
        src="@/assets/projectImgs/60WP586E.png"
        class="pb-2 p-1 object-contain" />
    </div>
    <p class="text-center border-t border-[var(--color-border)]">
      I made a simple 5x5 version of Lights Out, along with all custom-made assets and shaders, 
      everything released under CC0.
    </p>
  </el-card>
</template>
