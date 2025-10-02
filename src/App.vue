<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <el-container class="overflow-hidden">
    <el-aside
      width="200px"
      class="hidden md:flex flex-col border-r border-[var(--color-border)] overflow-hidden">
      <h1
        class="h-[41px] text-[--isr-c-red] md:text-2xl lg:text-2xl text-nowrap relative justify-self-end
          self-center border-b border-[var(--color-border)] sixtyfour-convergence-isr overflow-clip
          cursor-pointer"
        @click="$router.push('/')">
        Con-Save
      </h1>
      <p class="ml-2 mr-2 py-2 border-b border-[var(--color-border)]">
        I'm
        <span
          class="text-[--isr-c-red] cursor-pointer"
          @click="$router.push('/about')"
          >Sean</span
        >, a Senior Analyst by day and a programmer, maker, and designer whenever I have time.
      </p>
      <p class="ml-2 mr-2 mt-2 pb-2 border-b border-[var(--color-border)]">
        This site showcases my various projects and may eventually serve as a storefront if I decide
        to set one up.
      </p>
      <p class="ml-2 mr-2 mt-2 pb-2 border-b border-[var(--color-border)]">
        This site is still very much a work in progress and not all of the cards on the Home page
        take you to the full article when clicked, so please be patient with me as I continue adding
        more content.
      </p>
      <img
        alt="Con-Save logo"
        class="hidden md:flex fixed self-center bottom-2"
        src="@/assets/logo.svg"
        width="125"
        height="125" />
    </el-aside>

    <el-container class="pl-2">
      <el-header
        height="41px"
        class="flex flex-row-reverse lg:flex-row border-b border-[var(--color-border)]">
        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex text-xl mb-2">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/list">List</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>

        <!-- Burger Icon -->

        <div class="toolbar inline-flex lg:hidden text-right fixed z-20">
          <el-dropdown size="large">
            <svg
              class="w-8 h-8 self-center justify-self-centercenter"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <template #dropdown>
              <el-dropdown-menu
                style="
                  --el-dropdown-menuItem-hover-fill: var(--isr-c-bg-red);
                  --el-dropdown-menuItem-hover-color: var(--isr-c-red);
                ">
                <el-dropdown-item @click="$router.push('/')">Home</el-dropdown-item>
                <el-dropdown-item @click="$router.push('/list')">List</el-dropdown-item>
                <el-dropdown-item @click="$router.push('/about')">About</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <h1
          class="md:hidden text-[--isr-c-red] text-4xl text-nowrap fixed justify-self-center self-center
            sixtyfour-convergence-isr pr-3 cursor-pointer left-7"
          @click="$router.push('/')">
          Con-Save
        </h1>
      </el-header>

      <!-- Mobile Dropdown Menu -->
      <div
        v-if="isOpen"
        class="lg:hidden fixed flex-col top-[41px] z-20 px-4 my-2 rounded bg-[#121212] bg-opacity-95 text-xl
          space-y-2">
        <RouterLink
          @click="isOpen = false"
          to="/"
          class="border-b border-[var(--color-border)]"
          >Home</RouterLink
        ><br />
        <RouterLink
          @click="isOpen = false"
          to="/list"
          class="border-b border-[var(--color-border)]"
          >List</RouterLink
        ><br />
        <RouterLink
          @click="isOpen = false"
          to="/about"
          class="border-b border-[var(--color-border)]"
          >About</RouterLink
        ><br />
      </div>

      <el-main>
        <div>
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

.el-main {
  max-height: calc(100% - 41px);
}

.el-aside {
  width: 30vw;
}

@media (min-width: 768px) {
  .el-aside {
    width: 200px;
  }
}

.toolbar {
  align-items: center;
  justify-content: center;
  right: 14px;
}
</style>
