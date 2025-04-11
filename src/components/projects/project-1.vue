<script setup>
import codeSite from '../blog/cards/codeSite.vue'
import LLMInterface from '../blog/cards/LLMInterface.vue';
</script>

<template>
  <el-carousel
    height="84vh"
    direction="vertical"
    autoplay="true"
    interval="9000"
    motion-blur>
    <el-carousel-item>
      <LLMInterface />
      <div> <br></div>
      <codeSite />
    </el-carousel-item>
  </el-carousel>
</template>

