<template>
  <article class="prose prose-lg max-w-3xl mx-auto px-4 py-8">
    <h1 class="text-white text-center text-xl lg:text-3xl font-extrabold
          [text-shadow:_-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black] pb-3">Lights Out Puzzle – A Start to Learing Godot</h1>
          <img
        src="@/assets/projectImgs/evKTlbYB.png"
        class="p-1 object-contain" />
    <p>
      I’ve always liked <span
          class="text-[--isr-c-red] cursor-pointer"
          >Lights Out</span> puzzles. They’ve got a nice balance of logic and
      trial-and-error, and I figured building one would be a good way to learn the basics of the
      Godot game engine. So I made a simple 5x5 version of the game, along with all custom-made
      assets and shaders. everything released under CC0.
    </p>

    <p>
      You can try the game on my site (click game in the top nav, or just click any of the red <span
          class="text-[--isr-c-red] cursor-pointer"
          >Lights Out</span> on this page), and
      it's also available in the official Godot Asset Library under the name
      <strong><span
          class="text-[--isr-c-red] cursor-pointer font-bold"
          >Lights Out</span> Puzzel</strong> in the Demos section.
    </p>

    <h2>What’s <span
          class="text-[--isr-c-red] cursor-pointer"
          >Lights Out</span>?</h2>
    <p>
      <span
          class="text-[--isr-c-red] cursor-pointer"
          >Lights Out</span> was originally released by Tiger Electronics in 1995. The idea is simple:
      you start with a 5x5 grid of lights, some of them lit. Your goal is to turn them all off. The
      twist is that toggling any light also toggles its four neighbors, so every move has ripple
      effects.
    </p>
    <p>
      It’s one of those games where the rules are simple but the strategies run deep. That’s what
      makes it so fun.
    </p>

    <h2>Why I Made This</h2>
    <p>
      The main goal was to learn how Godot works, especially the fundamentals: scripting, working
      with scenes, simple UI, and shaders. I didn’t set hard rules for myself except for one:
      everything had to be made from scratch by me so I could release it under a completely free
      license (CC0).
    </p>
    <p>
      The look is pretty minimal, somewhere between 16-bit and 32-bit era, with a simple
      checkerboard background and light toggling visuals. No animations, just color flips.
    </p>

    <h2>Development Notes</h2>
    <p>
      The puzzle logic itself was straightforward, but one part gave me unexpected trouble:
      generating a random but <em>solvable</em> starting board. It turns out that just lighting up a
      random number of tiles can result in an unsolvable puzzle. So instead, I had the game “press”
      8 random tiles when it starts, this guarantees the board has a solution, since it's basically
      reverse engineering from the solved state.
    </p>
    <p>
      I also wrote a simple shader for the background using GLSL, just a checkerboard pattern with
      rotating gray tiles (180° spin every few seconds). It’s purely visual but gives a subtle
      animated feel without distracting from the game.
    </p>
    <loShaderCanvas />
    <p>
      All the art, including the lights, was hand-drawn in Clip Studio Paint. Nothing too fancy,
      just enough polish to make it feel complete.
    </p>

    <h2>What I Learned</h2>
    <p>
      Godot plays really nicely with VS Code, which is my go-to editor, so I was able to do most of
      the scripting there. At the same time, the in-editor tools made building the interface
      surprisingly fast.
    </p>
    <p>
      Another highlight was the Godot dev community. I ran into a couple weird issues and had
      questions, and people were quick to help. It felt low-pressure and beginner-friendly,
      probably because the engine still has a tight-knit, open vibe. You don’t need to dig through
      years of outdated Stack Overflow posts to get answers.
    </p>

    <h2>What’s Next?</h2>
    <p>
      This version is done, uploaded and listed in Godot’s official library, so no big updates are
      planned. I might include it as a minigame in a future project, but I don’t plan to expand it
      as a standalone thing.
    </p>
    <p>
      That said, this was a good first step. I'm already thinking about making a solitaire-style
      card game next, and I’ll keep releasing all assets I make under CC0, so feel free to use or
      remix anything from this project.
    </p>

    <p>
      Let me know if you give it a try or reuse anything, I’d love to see what people do with it!
    </p>
  </article>
</template>

<script setup>
import loShaderCanvas from '../loShaderCanvas.vue';

</script>

<style scoped>

p {
  padding-bottom: 0.75rem;
}

h2 {
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  text-decoration: underline;
}

</style>