<template>
  <el-card
    style="max-width: 100%"
    shadow="hover"
    @click="$router.push('/blog/geminiOxide')"
    class="cursor-pointer hover:shadow-lg transition-shadow">
    <template #header>
      <h1
        class="text-white text-center text-xl lg:text-3xl font-extrabold
          [text-shadow:_-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
        GeminiOxide
      </h1>
    </template>
    <div class="grid grid-cols-2 max-w-[100vw] max-h-[60vh] overflow-auto">
      <img
        src="@/assets/projectImgs/Kw1QsEGI.png"
        class="p-2" />
      <img
        src="@/assets/projectImgs/geAAiGQ9.png"
        class="pb-2" />
    </div>
    <p class="text-center border-t border-[var(--color-border)]">
      I made a LLM interface desktop app in Rust. It's a Rust GUI application that provides an
      interface to Google's Gemini AI, with support for text prompts and image inputs.
    </p>
  </el-card>
</template>
