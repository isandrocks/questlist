<template>
  <el-card
    style="max-width: 100%"
    shadow="hover"
    @click="$router.push('/blog/stringArt')"
    class="cursor-pointer hover:shadow-lg transition-shadow">
    <template #header>
      <h1
        class="text-white text-center text-xl lg:text-3xl font-extrabold
          [text-shadow:_-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
        String Art Generator
      </h1>
    </template>
    <div class="grid grid-cols-3 max-w-[100vw] max-h-[60vh] overflow-auto">
      <img
        src="@/assets/projectImgs/e65vWU5N.png"
        class="p-1 object-cover" />
      <img
        src="@/assets/projectImgs/D8yVwkWK.png"
        class="p-1 object-cover" />
      <img
        src="@/assets/projectImgs/TlPm2xo3.png"
        class="p-1 object-cover" />
    </div>
    <p class="text-center border-t border-[var(--color-border)]">
      A sophisticated Python application that converts digital images into string art using advanced
      mathematical algorithms. Features GUI interface, multiple output formats, and realistic pin
      constraints.
    </p>
  </el-card>
</template>
