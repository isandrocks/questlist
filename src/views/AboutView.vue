<script setup>
import LogoConsave from '../components/icons/LogoConsave.vue'
</script>

<template>
  <div class="about flex flex-col gap-4 text-center">
    <h1 class="text-5xl self-center"><span class="text-[--isr-c-red]">About me</span></h1>
    <h3 class="self-center">
      Hi I'm Sean! Online, you’ll often find me as
      <span class="text-[--isr-c-red]">iSandRock</span> whether in games or on social media. I love
      building things, solving problems, and bringing ideas to life, whether through code, design,
      or hands-on making.
    </h3>
    <h3 class="self-center">
      This site serves as my personal portfolio, highlighting my projects and creative work. It also
      marks the beginning of my company, <span class="text-[--isr-c-red]">Con-Save Customs</span>,
      where I plan to offer custom, made-to-order electronics, keyboards, and controllers.
    </h3>
    <h3 class="self-center">
      Whether you're here to explore my work or just passing through, welcome!
    </h3>
  </div>
  <div class="about flex flex-col gap-4 text-center my-10">
    <h1 class="text-5xl self-center">
      What is a <span class="text-[--isr-c-red]">Con-Save</span>?
    </h1>
    <h3 class="self-center">
      <span class="text-[--isr-c-red]">Con-Save</span> is a abbraviated D&D term for either
      constitution saving throw or concentration saving throw depending on who you are playing with.
      I use it for constitution saving throw if you were wondering.
    </h3>
    <h3 class="self-center">
      "A saving throw—also called a save—represents an attempt to evade or resist a threat, such as
      a fiery explosion, a blast of poisonous gas, or a spell trying to invade your mind. You don’t
      normally choose to make a save; you must make one because your character or a monster (if
      you’re the DM) is at risk. A save’s result is detailed in the effect that caused it." - DnD
      Beyond
    </h3>
    <LogoConsave class="self-center max-w-[100%]" />
  </div>
</template>
