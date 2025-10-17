<script setup>
import LogoConsave from '../components/icons/LogoConsave.vue'
</script>

<template>
  <div class="about flex flex-col gap-4 text-center">
    <h1 class="text-5xl self-center"><span class="text-(--isr-c-red)">About me</span></h1>
    <h3 class="self-center">
      Hi I'm Sean! Online, you’ll often find me as
      <span class="text-(--isr-c-red)">iSandRock</span> in games, on social media, or tinkering with
      new projects. I’ve always loved building things, solving problems, and bringing ideas to life
      through code, design, and hands-on making. Professionally, I work as a Senior Analyst, where
      I’ve spent the past decade delivering high-quality IT solutions. My expertise includes Windows
      systems, Active Directory, internal/client spicific software mangment, internal networks/VPNs,
      and customer-focused technical support. Along the way, I’ve developed strong skills in
      application development, AI, and Rust, combining problem-solving with a passion for learning.
    </h3>
    <h3 class="self-center">
      This site doubles as my personal portfolio and the starting point for my company,
      <span class="text-(--isr-c-red)">Con-Save Customs</span>, where I’m exploring custom-made
      electronics, keyboards, and controllers. It’s a space to share both my professional journey
      and my creative projects.
    </h3>
    <h3 class="self-center">
      Whether you’re here to explore my work, collaborate, or just passing through, welcome!
    </h3>
  </div>
  <div class="about flex flex-col gap-4 text-center my-10">
    <h1 class="text-5xl self-center">
      What is a <span class="text-(--isr-c-red)">Con-Save</span>?
    </h1>
    <h3 class="self-center">
      <span class="text-(--isr-c-red)">Con-Save</span> is a abbraviated D&D term for either
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
    <div class="about flex flex-col gap-4 text-center my-10">
      <h1 class="text-5xl self-center">
        <span class="text-(--isr-c-red)">Contact Me</span>
      </h1>
      <h3 class="self-center">
        If you're interested in custom electronics, keyboards, controllers, or just want to say
        hello, feel free to reach out!
      </h3>
      <h3 class="self-center">
        Email:
        <a
          href="mailto:support@con-save.com"
          class="text-(--isr-c-red)"
          >support@con-save.com</a
        >
      </h3>
    </div>
    <LogoConsave class="self-center max-w-full" />
  </div>
</template>
