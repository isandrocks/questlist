<template>
    <el-card
      style="max-width: 60vh"
      shadow="hover">
      <template #header>
        <h1
          class="text-white text-center text-4xl md:text-3xl font-extrabold
            [text-shadow:_-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
          Vue 3 Site
        </h1>
      </template>
      <div class="grid grid-cols-2 max-w-[60vh] max-h-[60vh] overflow-auto">
        <img
          src="@/assets/projectImgs/20253271.png"
          alt="a img of the list section of the website"
          class="p-2" />
        <img
          src="@/assets/projectImgs/20253272.png"
          alt="a img of the code for this card"
          class="pb-2" />
      </div>
      <p class="text-center border-t border-[var(--color-border)]">
        Makeing this website was a fun project. I used Vue 3 and Vite.
        I also used Tailwind CSS for styling and Element Plus for the UI components.
      </p>
    </el-card>
  </template>
  