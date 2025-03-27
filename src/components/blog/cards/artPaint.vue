<template>
          <el-card
        style="max-width: 60vh"
        shadow="hover">
        <template #header>
          <h1
            class="text-white text-center text-4xl md:text-3xl font-extrabold
              [text-shadow:_-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
            Spray Paint projects
          </h1>
        </template>
        <div class="grid grid-cols-2 max-w-[60vh]">
        <img
          src="@/assets/projectImgs/PXL_20250224_1819497242.jpg"
          alt="skateboard deck with a plauge doctors face on it"
          class="pb-2 pr-1 row-span-2" />
        <img
          src="@/assets/projectImgs/PXL_20250126_210133486.jpg"
          alt="pikachu made with spray paint and a stencil"
          class="pb-1" />
        <img
          src="@/assets/projectImgs/PXL_20250206_0518485652.jpg"
          alt="skanty and knee socks from psg made with spray paint and a stencil"
          class="pb-2" />        
        </div>
        <p class="text-center border-t border-[var(--color-border)]">
          Some spray paint projects I made using stencils I found or made myself and cut out with my laser cutter.
        </p>
      </el-card>
</template>