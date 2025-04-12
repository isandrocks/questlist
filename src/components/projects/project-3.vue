<script setup>
import artPaint from '../blog/cards/artPaint.vue'
import causewayTHT from '../blog/cards/causewayTHTc.vue'
</script>

<template>
  <el-carousel
    height="calc(100vh - 97px)"
    direction="vertical"
    autoplay="true"
    interval="8500"
    motion-blur>
    <el-carousel-item>
      <div class="flex flex-col h-full w-full justify-center items-center">
        <artPaint />
      </div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="flex flex-col h-full w-full justify-center items-center">
        <causewayTHT />
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
