<script setup>
import project3 from './projects/project-3.vue'
import project1 from './projects/project-1.vue'
import project2 from './projects/project-2.vue'
</script>

<template>
  <div class="flex flex-col w-full h-full">
    <div
      class="grid grid-flow-col grid-cols-1 auto-rows-auto grid-rows-3 lg:overflow-hidden lg:grid-cols-3
        lg:grid-rows-2 gap-3 relative">
      <project1 class="lg:row-span-2 lg:grid lg:overflow-hidden" />
      <project3 class="lg:row-span-2 lg:grid lg:overflow-hidden" />
      <project2 class="lg:row-span-2 lg:grid lg:overflow-hidden" />
    </div>
  </div>
</template>

<style scoped></style>
