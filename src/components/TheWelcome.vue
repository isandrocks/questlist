<script setup>
import project3 from './projects/project-3.vue'
import project1 from './projects/project-1.vue'
import project2 from './projects/project-2.vue'
</script>

<template>
  <div class="grid grid-flow-col grid-cols-3 gap-3 relative">
    <project3 class="row-span-2 grid " />
    <project2 class="row-span-2 grid " />
    <project1 class="col-span-2 grid" />
    
  </div>
</template>

<style scoped></style>
