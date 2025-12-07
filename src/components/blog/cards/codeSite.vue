<template>
  <el-card
    style="max-width: 100%; background-color:  color-mix(in oklab, var(--color-white) 10%"
    shadow="hover"
    @click="$router.push('/blog/questlistSite')"
    class="cursor-pointer backdrop-blur-lg">
    <template #header>
      <h1
        class="text-transparent bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-clip-text
          text-center text-xl lg:text-3xl font-extrabold
          [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
        Vue 3 Site
      </h1>
    </template>
    <div class="grid grid-cols-2 gap-2 max-w-[60vh] overflow-hidden p-2">
      <img
        src="@/assets/projectImgs/20253271.png"
        alt="a img of the list section of the website"
        class="w-full h-32 object-cover rounded-md" />
      <img
        src="@/assets/projectImgs/20253272.png"
        alt="a img of the code for this card"
        class="w-full h-32 object-cover rounded-md" />
    </div>
    <p class="text-center border-t border-(--color-border)">
      A modern Vue 3 portfolio site built with custom masonry layout, responsive design, and
      integrated game hosting. Features Element Plus components, Tailwind CSS styling, and dynamic
      blog system with image zoom functionality.
    </p>
  </el-card>
</template>
