<template>
  <el-card
    style="max-width: 100%"
    shadow="hover">
    <template #header>
      <h1
        class="text-white text-center text-xl lg:text-3xl font-extrabold
          [text-shadow:_-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
        LLM Interface
      </h1>
    </template>
    <div class="grid grid-cols-2 max-w-[100vw] max-h-[60vh] overflow-auto">
      <img
        src="@/assets/projectImgs/1615342.png"
        class="p-2" />
      <img
        src="@/assets/projectImgs/161534.png"
        class="pb-2" />
    </div>
    <p class="text-center border-t border-[var(--color-border)]">
      I made a LLM interface desktop app for a locally hosted Ollama model. It was made in Rust and
      uses egui for the UI.
    </p>
  </el-card>
</template>
