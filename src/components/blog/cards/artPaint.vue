<template>
          <el-card
        style="width: 100%;"
        shadow="hover"
        @click="$router.push('/blog/sprayArt1')"
        class="cursor-pointer">
        <template #header>
          <h1
            class="text-white text-center text-xl lg:text-3xl font-extrabold
              [text-shadow:_-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
            Spray Paint projects
          </h1>
        </template>
        <div class="grid grid-cols-2 max-w-[60vh]">
        <img
          src="@/assets/projectImgs/p8vcvwsG.jpg"
          alt="skateboard deck with a plauge doctors face on it"
          class="pb-2 pr-1 row-span-2" />
        <img
          src="@/assets/projectImgs/bSDPqMEL.jpg"
          alt="pikachu made with spray paint and a stencil"
          class="pb-1" />
        <img
          src="@/assets/projectImgs/r7BpBDyP.jpg"
          alt="skanty and knee socks from psg made with spray paint and a stencil"
          class="pb-2" />        
        </div>
        <p class="text-center border-t border-[var(--color-border)]">
          Some spray paint projects I made using stencils I found or made myself and cut out with my laser cutter.
        </p>
      </el-card>
</template>