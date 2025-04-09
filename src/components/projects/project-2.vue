<script setup>
import fabLaser from '../blog/cards/fabLaser.vue'
import fabCards from '../blog/cards/fabCards.vue';
</script>

<template>
  <el-carousel
    height="90vh"
    direction="vertical"
    autoplay="true"
    interval="9500"
    motion-blur>
    <el-carousel-item>
      <fabLaser />
    </el-carousel-item>
    <el-carousel-item>
      <fabCards />
    </el-carousel-item>
  </el-carousel>
</template>
