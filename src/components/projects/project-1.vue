<script setup>
import codeSite from '../blog/cards/codeSite.vue'
import LLMInterface from '../blog/cards/LLMInterface.vue';
</script>

<template>
  <el-carousel
    height="90vh"
    direction="vertical"
    autoplay="true"
    interval="9000"
    motion-blur>
    <el-carousel-item>
      <codeSite />
    </el-carousel-item>
    <el-carousel-item>
      <LLMInterface />
    </el-carousel-item>
  </el-carousel>
</template>

