<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col">
    <h1 class="text-[--isr-c-red] font-medium text-4xl relative top-[-10px] self-center">{{ msg }}</h1>
  </div>
</template>