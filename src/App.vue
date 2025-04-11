<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <el-container>
    <el-aside
      width="200px"
      class="flex flex-col border-r border-[var(--color-border)]">
      <h1
        class="h-[41px] mr-2 ml-2 text-[--isr-c-red] text-2xl text-nowrap relative justify-self-end self-center border-b
          border-[var(--color-border)] sixtyfour-convergence-isr">
        Con-Save
      </h1>
      <p class="ml-2 mr-2 py-2 border-b border-[var(--color-border)]">
        I'm  <span class="text-[--isr-c-red] cursor-pointer" @click="$router.push('/about')">Sean</span>, a Senior Analyst by day and a programmer, maker, and designer whenever I have time.
      </p>
      <p class="ml-2 mr-2 mt-2 pb-2 border-b border-[var(--color-border)]">
        This site showcases my various projects and may eventually serve as a storefront if I decide
        to set one up.
      </p>
      <p class="ml-2 mr-2 mt-2 pb-2 border-b border-[var(--color-border)]">
        This site is still very much a work in progress and is currently not very mobile- or vertical-screen-friendly, so please be patient with me as I continue adding more content.
      </p>
      <img
        alt="Con-Save logo"
        class="fixed self-center bottom-2"
        src="@/assets/logo.svg"
        width="125"
        height="125" />
    </el-aside>

    <el-container class="pl-2">
      <el-header
        height="41px"
        class="flex border-b border-[var(--color-border)]">
        <nav class="relative self-end text-xl pb-2">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/list">List</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/game">Game</RouterLink>
        </nav>
      </el-header>
      <el-main >
        <div class=" overflow-auto h-[90vh]">
        <RouterView />
      </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

a,
.red {
  text-decoration: none;
  color: var(--isr-c-red);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: var(--isr-c-bg-red);
  }
}
</style>
