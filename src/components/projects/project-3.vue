<script setup>
import artPaint from '../blog/cards/artPaint.vue'
import causewayTHT from '../blog/cards/causewayTHTc.vue';

</script>

<template>
  <el-carousel
    height="84vh"
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


