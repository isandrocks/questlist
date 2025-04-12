<script setup>
import fabLaser from '../blog/cards/fabLaser.vue'
import fabCards from '../blog/cards/fabCards.vue'
</script>

<template>
  <el-carousel
    height="100%"
    direction="vertical"
    autoplay="true"
    interval="9500"
    motion-blur>
    <el-carousel-item>
      <div class="flex flex-col h-full w-full justify-center items-center">
        <fabLaser />
      </div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="flex flex-col h-full w-full justify-center items-center">
        <fabCards />
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
