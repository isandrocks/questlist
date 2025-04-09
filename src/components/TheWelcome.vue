<script setup>
import projectArt from './projects/project-3.vue'
import projectCode from './projects/project-1.vue'
import projectFab from './projects/project-2.vue'
</script>

<template>
  <div class="grid grid-flow-col grid-cols-3 gap-3  relative">
    <projectCode class="row-span-2 grid" />
    <projectFab class="row-span-2 grid " />
    <projectArt class="col-span-2 grid" />
    
  </div>
</template>

<style scoped></style>
