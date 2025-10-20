<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const isOpen = ref(false)

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'List', href: '/list' },
  { label: 'About', href: '/about' },  
  { label: 'Game', href: '/game' },
]
</script>

<template>
  <el-container class="overflow-hidden">
    <el-aside
      width="200px"
      class="hidden md:flex flex-col border-r border-(--color-border) overflow-hidden">
      <h1
        class="h-[41px] text-(--isr-c-red) md:text-2xl lg:text-2xl text-nowrap relative justify-self-end
          self-center border-b border-(--color-border) sixtyfour-convergence-isr overflow-clip
          cursor-pointer"
        @click="$router.push('/')">
        Con-Save
      </h1>
      <p class="ml-2 mr-2 py-2 border-b border-(--color-border)">
        I'm
        <span
          class="text-(--isr-c-red) cursor-pointer"
          @click="$router.push('/about')"
          >Sean</span
        >, a Senior Analyst by day and a programmer, maker, and designer whenever I have time.
      </p>
      <p class="ml-2 mr-2 mt-2 pb-2 border-b border-(--color-border)">
        This site showcases my various projects and may eventually serve as a storefront if I decide
        to set one up.
      </p>
      <p class="ml-2 mr-2 mt-2 pb-2 border-b border-(--color-border)">
        This site is still very much a work in progress, so please be patient with me as I continue
        adding more content.
      </p>
      <img
        alt="Con-Save logo"
        class="hidden md:flex fixed self-center bottom-2"
        src="@/assets/cartoonhlg.svg"
        width="125"
        height="125" />
    </el-aside>

    <el-container>
      <el-header
        height="41px"
        class="flex flex-row-reverse lg:flex-row border-b border-(--color-border)">
        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex w-full">
            <div class="flex items-center justify-end top-1">
              <RouterLink
                v-for="item in navItems"
                :key="item.label"
                :to="item.href"
                class="relative px-5 py-2 transition-all duration-300 ease-out"
                :class="[
                  $route.path === item.href || (item.href === '/' && $route.path === '/') 
                    ? 'text-red-500' 
                    : 'text-zinc-400 hover:text-zinc-200'
                ]"
              >
                <!-- Background highlight -->
                <span 
                  v-if="$route.path === item.href || (item.href === '/' && $route.path === '/')"
                  class="absolute inset-0 bg-red-500/10 backdrop-blur-sm rounded-sm border border-red-500/20"
                />
                
                <!-- Hover effect -->
                <span class="absolute inset-0 bg-zinc-800/0 hover:bg-zinc-800/40 rounded-sm transition-colors duration-300" />
                
                <!-- Text -->
                <span class="relative z-10 text-l pointer-events-none">{{ item.label }}</span>
                
                <!-- Active indicator line -->
                <span 
                  v-if="$route.path === item.href || (item.href === '/' && $route.path === '/')"
                  class="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"
                />
              </RouterLink>
            </div>
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
                <el-dropdown-item 
                  v-for="item in navItems"
                  :key="item.label"
                  @click="$router.push(item.href)"
                >
                  {{ item.label }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <h1
          class="md:hidden text-(--isr-c-red) text-4xl text-nowrap fixed justify-self-center self-center
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
          v-for="(item, index) in navItems"
          :key="item.label"
          @click="isOpen = false"
          :to="item.href"
          :class="[
            index < navItems.length - 1 ? 'border-b border-(--color-border)' : ''
          ]"
        >
          {{ item.label }}
        </RouterLink>
      </div>

      <el-main style="display: flex; justify-content: center;">
        <div class="w-full flex justify-center">
          <RouterView class="w-full"/>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
nav a:first-of-type {
  border: 0;
}


.red {
  text-decoration: none;
  color: var(--isr-c-red);
  transition: 0.4s;
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
