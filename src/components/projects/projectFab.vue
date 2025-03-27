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
    <h1
      class="relative text-white text-center text-5xl font-extrabold
        [text-shadow:_-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
      Hardware Projects
    </h1>
    <el-carousel-item>
      <fabLaser />
    </el-carousel-item>
    <el-carousel-item>
      <fabCards />
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item {
  top: 10vh;
}
h1 {
  top: 0;
}
</style>
