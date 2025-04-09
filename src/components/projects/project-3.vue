<script setup>
import artPaint from '../blog/cards/artPaint.vue'
import causewayTHT from '../blog/cards/causewayTHT.vue';

</script>

<template>
  <el-carousel
    height="80svh"
    direction="vertical"
    autoplay="true"
    interval="8500"
    motion-blur
    class="">

    <el-carousel-item>
      <artPaint />
    </el-carousel-item>
    <el-carousel-item>
      <causewayTHT />
    </el-carousel-item>
  </el-carousel>
</template>


