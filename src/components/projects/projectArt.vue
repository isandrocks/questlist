<script setup>
import artVtubers from '../blog/cards/artVtubers.vue'
import artPaint from '../blog/cards/artPaintT.vue'
import artPSG from '../blog/cards/artPSG.vue'
</script>

<template>
  <el-carousel
    height="87vh"
    direction="vertical"
    autoplay="true"
    interval="8500"
    motion-blur
    class="">
    <h1
      class="relative text-white text-center text-5xl font-extrabold
        [text-shadow:_-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
      art projects
    </h1>
    <el-carousel-item>
      <artPaint />
    </el-carousel-item>
    <el-carousel-item>
      <artVtubers />
    </el-carousel-item>

    <el-carousel-item>
      <artPSG />
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
