<template>
  <el-card
    style="max-width: 100%; background-color:  color-mix(in oklab, var(--color-white) 10%"
    shadow="hover"
    @click="$router.push('/blog/geminiOxide')"
    class="cursor-pointer hover:shadow-lg transition-shadow backdrop-blur-lg">
    <template #header>
      <h1 class="card-title">
        GeminiOxide
      </h1>
    </template>
    <div class="grid grid-cols-2 gap-2 max-w-screen overflow-hidden p-2">
      <img
        src="@/assets/projectImgs/Kw1QsEGI.png"
        class="w-full h-32 object-cover rounded-md" />
      <img
        src="@/assets/projectImgs/geAAiGQ9.png"
        class="w-full h-32 object-cover rounded-md" />
    </div>
    <p class="text-center border-t border-(--color-border)">
      I made a LLM interface desktop app in Rust. It's a Rust GUI application that provides an
      interface to Google's Gemini AI, with support for text prompts and image inputs.
    </p>
  </el-card>
</template>
