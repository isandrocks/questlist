<script setup>
import projectArt from './projects/projectArt.vue'
import projectCode from './projects/projectCode.vue'
import projectFab from './projects/projectFab.vue'
</script>

<template>
  <div class="grid grid-flow-col grid-cols-3 gap-3  relative">
    <projectCode class="row-span-2 grid" />
    <projectFab class="row-span-2 grid " />
    <projectArt class="col-span-2 grid" />
    
  </div>
</template>

<style scoped></style>
