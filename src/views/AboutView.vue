<script setup>
import LogoConsave from '../components/icons/LogoConsave.vue'
</script>

<template>
  <div class="min-h-screen relative">
    <div class="relative z-10 container mx-auto px-6 py-16 max-w-4xl">
      <!-- Hero Section -->
      <div
        class="backdrop-blur-lg bg-white/10 rounded-xl border border-white/20 p-8 md:p-12 mb-8
          shadow-2xl">
        <div class="text-center space-y-6">
          <h1 class="text-4xl md:text-6xl font-bold text-red-400 bg-clip-text">About me</h1>

          <div class="space-y-6 text-lg md:text-xl leading-relaxed text-gray-100">
            <p>
              Hi, I'm <span class="font-bold text-red-500">Sean</span>! Online, you'll often find me
              as <span class="text-red-500 font-semibold">iSandRocks</span>. I am a developer and
              maker passionate about bridging the gap between software and the physical world.
            </p>

            <p>
              I specialize in
              <strong>web app development, AI integration, and functional design</strong>, but my
              love for engineering goes beyond code. I design and build custom mechanical keyboards
              and game controllers from scratch! Handling the entire process from PCB design and
              soldering to CAD modeling and case fabrication with 3D printing.
            </p>

            <p>
              This site acts as a portfolio for my technical projects and a blog for my engineering
              journey. It demonstrates my ability to take complex ideas and turn them into tangible,
              functioning products.
            </p>

            <p class="text-red-200 italic">
              I am currently open to freelance or full-time opportunities. Whether you're here to
              review my work or just passing by, welcome!
            </p>
          </div>
        </div>
      </div>

      <!-- Con-Save Explanation Section -->
      <div
        class="backdrop-blur-lg bg-white/10 rounded-xl border border-white/20 p-8 md:p-12 mb-8
          shadow-2xl">
        <div class="text-center space-y-6">
          <h2
            class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-red-400
              bg-clip-text text-transparent">
            What is a <span class="text-red-500">Con-Save</span>?
          </h2>

          <div class="space-y-4 text-lg md:text-xl leading-relaxed text-gray-100">
            <p>
              <span class="text-red-400 font-semibold">Con-Save</span> is an abbreviated D&D term
              for either constitution saving throw or concentration saving throw depending on who
              you are playing with. I use it for constitution saving throw if you were wondering.
            </p>

            <blockquote
              class="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-red-400 italic
                text-red-100">
              "A saving throw-also called a save-represents an attempt to evade or resist a threat,
              such as a fiery explosion, a blast of poisonous gas, or a spell trying to invade your
              mind. You don't normally choose to make a save; you must make one because your
              character or a monster (if you're the DM) is at risk. A save's result is detailed in
              the effect that caused it."
              <cite class="block text-right text-sm text-red-300 mt-2">- D&D Beyond</cite>
            </blockquote>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div
        class="backdrop-blur-lg bg-white/10 rounded-xl border border-white/20 p-8 md:p-12 mb-8
          shadow-2xl">
        <div class="text-center space-y-6">
          <h2
            class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-red-400
              bg-clip-text text-transparent">
            <span class="text-red-400">Contact Me</span>
          </h2>

          <div class="space-y-4 text-lg md:text-xl leading-relaxed text-gray-100">
            <p>
              If you're interested in custom electronics, keyboards, controllers, or just want to
              say hello, feel free to reach out!
            </p>

            <div
              class="inline-flex items-center justify-center bg-red-500/20 backdrop-blur-sm
                rounded-2xl px-8 py-4 border border-red-400/30 hover:bg-red-500/30 transition-all
                duration-300">
              <span class="text-white mr-2">Email:</span>
              <a
                href="mailto:support@con-save.com"
                class="text-red-400 font-semibold hover:text-red-300 transition-colors duration-200
                  text-xl">
                support@con-save.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Logo Section -->
      <div class="flex justify-center">
        <div class="backdrop-blur-lg bg-white/5 rounded-xl border border-white/10 p-8 shadow-2xl">
          <LogoConsave
            class="max-w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  </div>
</template>
