<template>
  <el-card
    style="max-width: 100%"
    shadow="hover">
    <template #header>
      <h1
        class="text-white text-center text-4xl md:text-3xl font-extrabold
          [text-shadow:_-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
        Laser engraving and cutting
      </h1>
    </template>
    <div class="grid grid-cols-2 max-w-[60vh] max-h-[60vh] overflow-auto">
      <img
        src="@/assets/projectImgs/UbniaMGN.jpg"
        alt="a laser cut image of salior jupitor"
        class="p-2 max-h-[30vh]" />

      <img
        src="@/assets/projectImgs/ZbIRgJ4T.jpg"
        alt="the finished product of the laser cut image of salior jupitor"
        class="pb-2" />

      <img
        src="@/assets/projectImgs/VINH1CJv.jpg"
        alt="con-save heart logo cut from suade repair fabric"
        class="p-2" />

      <img
        src="@/assets/projectImgs/KGiRFRCg.jpg"
        alt="laser cut image of hatsune miku from Mimukauwa Nice Try"
        class="pb-2" />
    </div>
    <p class="text-center border-t border-[var(--color-border)]">
      I got a laser engraver christmas and have been using it to make some cool stuff.
    </p>
  </el-card>
</template>
