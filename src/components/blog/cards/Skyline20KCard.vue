<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToPost = () => {
  router.push('/blog/skyLine20k')
}
</script>

<template>
  <el-card
    style="max-width: 100%"
    shadow="hover"
    @click="goToPost"
    class="cursor-pointer hover:shadow-lg transition-shadow">
    <template #header>
      <h1
        class="text-white text-center text-xl lg:text-3xl font-extrabold
          [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
        Skyline_20K
      </h1>
    </template>
    <div class="grid grid-cols-2 max-w-screen max-h-[60vh] overflow-auto">
      <img
        src="@/assets/projectImgs/1j0ac8Mo.jpg"
        class="p-2" />
      <img
        src="@/assets/projectImgs/8UmyB7EU.png"
        class="pb-2" />
    </div>
    <p class="text-center border-t border-(--color-border)">
      Custom 20-key mechanical macropad with ultra-bright RGB underglow and modular breakaway
      design. Complete open-source hardware featuring QMK firmware, KiCad PCB design, and Vial
      support.
    </p>
  </el-card>
</template>
