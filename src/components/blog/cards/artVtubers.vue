<template>
  <el-card
    style="max-width: 60vh"
    shadow="hover">
    <template #header>
      <h1
        class="text-white text-center text-4xl md:text-3xl font-extrabold
          [text-shadow:_-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
        Vtuber Doodles
      </h1>
    </template>
    <div class="grid grid-cols-2 max-w-[60vh]">
    <img
      src="@/assets/projectImgs/nimi.png"
      alt="a little doodle of Nimi i made while watching her cursed sims 4 stream."
      class="p-2" />
    <img
      src="@/assets/projectImgs/Inacute.png"
      alt="a semi-chibi doodle of Ina"
      class="pb-2" />
    <img
      src="@/assets/projectImgs/letmeinpebble.png"
      alt="biboo in the art style of the monitoring MV by deco*27"
      class="p-2" />
    <img
      src="@/assets/projectImgs/LGaspsg.png"
      alt="a doodle lily goth in the PSG style"
      class="p-2" />
    </div>
    <p class="text-center border-t border-[var(--color-border)]">
      some verious doodles of vtubers i made while watching streams.
    </p>
  </el-card>
</template>
