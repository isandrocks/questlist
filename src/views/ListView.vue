<script setup>
import DragTrees from '../components/DragTrees.vue'
</script>

<template>
  <main class="lg:flex lg:overflow-hidden h-[89vh]">
    <DragTrees class="mb-8 lg:mb-0 lg:w-[60%]" />
    <div
      class="backdrop-blur-lg bg-white/10 rounded-sm border border-white/20 p-8 md:p-12 mb-8
        shadow-2xl lg:ml-8 lg:w-[40%] max-xl:overflow-y-auto max-xl:max-h-[80vh]">
      <div class="text-center space-y-6">
        <h2
          class="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-red-200 to-red-300
            bg-clip-text text-transparent">
          To-Do <span class="text-red-500">List</span> App
        </h2>
        <p class="text-sm 2xl:text-lg text-gray-100 leading-relaxed">
          This interactive List management system features a custom hierarchical tree structure with
          drag-and-drop reordering, inline editing, and animated completion states. Built with
          Vue.js and Element Plus, it includes custom SVG icons, sophisticated UX patterns like
          double-click editing and smart drag prevention, plus a unique animated strike-through
          effect for completed tasks. The component demonstrates production-ready features including
          data persistence, secure file import/export, input sanitization, and responsive design
          optimized for both desktop and mobile experiences.
        </p>
        <p>To get started type something in the bottom text section and hit the + icon!</p>
      </div>
    </div>
  </main>
</template>
