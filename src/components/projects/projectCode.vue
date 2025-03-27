<script setup>
import codeSite from '../blog/cards/codeSite.vue';
</script>

<template>
  <el-carousel
    height="90vh"
    direction="vertical"
    autoplay="true"
    interval="9000"
    motion-blur>
    <h1 class="relative text-white text-center text-5xl font-extrabold
              [text-shadow:_-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">codeing projects</h1>
              <el-carousel-item>
                <codeSite />
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
