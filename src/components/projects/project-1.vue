<script setup>
import codeSite from '../blog/cards/codeSite.vue'
import LLMInterface from '../blog/cards/LLMInterface.vue'
import lightsoutCard from '../blog/cards/lightsoutCard.vue'
</script>

<template>
  <el-carousel
    height="100%"
    direction="vertical"
    autoplay="true"
    interval="9000"
    motion-blur>
    <el-carousel-item>
      <div class="flex flex-col h-full w-full justify-center items-center">
        <LLMInterface />
        <div><br /></div>
        <codeSite />
      </div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="flex flex-col h-full w-full justify-center items-center">
        <lightsoutCard />
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
