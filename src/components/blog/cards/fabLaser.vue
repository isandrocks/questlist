<template>
  <el-card
    style="max-width: 60vh"
    shadow="hover">
    <template #header>
      <h1
        class="text-white text-center text-4xl md:text-3xl font-extrabold
          [text-shadow:_-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
        Laser engraving and cutting
      </h1>
    </template>
    <div class="grid grid-cols-2 max-w-[60vh] max-h-[60vh] overflow-auto">
      <el-tooltip
        content="a laser cut image of salior jupitor"
        placement="bottom"
        effect="light"
        trigger="hover">
        <img
          src="@/assets/projectImgs/PXL_20250129_001535137.jpg"
          alt="a laser cut image of salior jupitor"
          class="p-2 max-h-[30vh]" />
      </el-tooltip>
      <el-tooltip
        content="the finished product of the laser cut image of salior jupitor"
        placement="bottom"
        effect="light"
        trigger="hover">
        <img
          src="@/assets/projectImgs/PXL_20250129_0139560282.jpg"
          alt="the finished product of the laser cut image of salior jupitor"
          class="pb-2" />
      </el-tooltip>
      <el-tooltip
        content="con-save heart logo cut from suade repair fabric"
        placement="top"
        effect="light"
        trigger="hover">
        <img
          src="@/assets/projectImgs/PXL_20250107_011422520.PORTRAIT.jpg"
          alt="con-save heart logo cut from suade repair fabric"
          class="p-2" />
      </el-tooltip>
      <el-tooltip
        content="laser cut image of hatsune miku from Mimukauwa Nice Try"
        placement="bottom"
        effect="light"
        trigger="hover">
        <img
          src="@/assets/projectImgs/PXL_20250111_211139367.jpg"
          alt="laser cut image of hatsune miku from Mimukauwa Nice Try"
          class="pb-2" />
      </el-tooltip>
    </div>
    <p class="text-center border-t border-[var(--color-border)]">
      I got a laser engraver christmas and have been using it to make some cool stuff.
    </p>
  </el-card>
</template>
