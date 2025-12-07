<template>
  <el-card
    style="max-width: 100%; object-fit: contain; background-color:  color-mix(in oklab, var(--color-white) 10%"
    shadow="hover"
    @click="$router.push('/blog/LightsoutGodot')"
    class="cursor-pointer backdrop-blur-lg">
    <template #header>
      <h1
        class="text-transparent bg-white bg-clip-text text-center text-xl lg:text-3xl font-extrabold
          [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
        Lights Out Puzzle
      </h1>
    </template>
    <div class="grid grid-cols-2 gap-2 max-w-full overflow-hidden p-2">
      <img
        src="@/assets/projectImgs/evKTlbYB.png"
        class="w-full h-32 object-cover rounded-md" />
      <img
        src="@/assets/projectImgs/jP4yC6bg.png"
        alt="aluminum business card front"
        class="w-full h-32 object-cover rounded-md" />
      <img
        src="@/assets/projectImgs/CyWF3B4B.png"
        class="w-full h-32 object-cover rounded-md" />
      <img
        src="@/assets/projectImgs/60WP586E.png"
        class="w-full h-32 object-cover rounded-md" />
    </div>
    <p class="text-center border-t border-(--color-border)">
      I made a simple 5x5 version of Lights Out, along with all custom-made assets and shaders,
      everything released under CC0.
    </p>
  </el-card>
</template>
