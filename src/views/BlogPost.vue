<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug
const component = ref(null)

// Try to dynamically import the right post component
const loadComponent = async () => {
  try {
    component.value = defineAsyncComponent(() =>
      import(`../components/blog/${slug}.vue`)
    )
  } catch (error) {
    console.error('Blog post not found:', error)
    // Optional: fallback component or redirect
  }
}

loadComponent()
</script>

<template>
  <component :is="component" v-if="component" />
  <p v-else>Loading post...</p>
</template>

