<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug
const component = ref(null)
const error = ref(null)

// Whitelist of allowed blog post slugs for security
const allowedSlugs = [
  'causeway_THT',
  'LightsoutGodot',
  'questlistSite',
  'sprayArt1',
  'geminiOxide',
  'stringArt'
]

// Sanitize and validate slug
const sanitizeSlug = (slug) => {
  if (!slug || typeof slug !== 'string') {
    return null
  }

  // Remove any path traversal attempts and non-alphanumeric characters except hyphens and underscores
  const sanitized = slug.replace(/[^a-zA-Z0-9_-]/g, '')

  // Check against whitelist
  if (!allowedSlugs.includes(sanitized)) {
    return null
  }

  return sanitized
}

// Try to dynamically import the right post component
const loadComponent = async () => {
  try {
    component.value = defineAsyncComponent(() => import(`../components/blog/${slug}.vue`))
  } catch (error) {
    console.error('Blog post not found:', error)
    // Optional: fallback component or redirect
  }
}

loadComponent()
</script>

<template>
  <a
    href="/"
    class="back-arrow"
    style="text-decoration: underline; font-size: 16px"
    >&lt; Back</a
  >
  <component
    :is="component"
    v-if="component" />
  <p v-else>Loading post...</p>
  <a
    href="/"
    class="back-arrow"
    style="text-decoration: underline; font-size: 16px"
    >&lt; Back</a
  >
</template>
