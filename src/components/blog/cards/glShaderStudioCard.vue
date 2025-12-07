<template>
  <el-card
    style="max-width: 100%; background-color:  color-mix(in oklab, var(--color-white) 10%"
    shadow="hover"
    @click="$router.push('/blog/glShaderStudio')"
    class="cursor-pointer backdrop-blur-lg">
    <template #header>
      <h1
        class="text-transparent bg-white bg-clip-text text-center text-xl lg:text-3xl font-extrabold
          [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
        GL Shader Studio
      </h1>
    </template>
    <div class="grid grid-cols-1 gap-2 max-w-[60vh] overflow-hidden p-2">
      <img
        src="@/assets/projectImgs/9jyaynbw.png"
        class="w-full h-64 object-cover rounded-md" />
    </div>
    <p class="text-center border-t border-(--color-border) pt-2">
      A professional-grade Figma plugin for real-time GLSL shaders.
    </p>
  </el-card>
</template>
