<template>
  <el-card
    style="max-width: 100%; background-color:  color-mix(in oklab, var(--color-white) 10%"
    shadow="hover"
    @click="$router.push('/blog/GLSLProg')"
    class="cursor-pointer backdrop-blur-lg">
    <template #header>
      <h1 class="card-title">
        GLSL CPPN Training
      </h1>
    </template>
    <div class="grid grid-cols-2 gap-2 max-w-[60vh] overflow-hidden p-2">
      <img
        src="@/assets/projectImgs/5fjll46p.png"
        alt="a img of the list section of the website"
        class="w-full h-32 object-cover rounded-md" />
      <img
        src="@/assets/projectImgs/ot3pzvyc.png"
        alt="a img of the code for this card"
        class="w-full h-32 object-cover rounded-md" />
    </div>
    <p class="text-center border-t border-(--color-border)">
      a trainer and viewer for Compositional Pattern-Producing Networks (CPPNs) in GLSL. 
    </p>
  </el-card>
</template>
