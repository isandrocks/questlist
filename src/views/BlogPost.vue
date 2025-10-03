<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
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
  const sanitizedSlug = sanitizeSlug(slug)

  if (!sanitizedSlug) {
    error.value = 'Blog post not found'
    // Redirect to home page after a short delay
    setTimeout(() => {
      router.push('/')
    }, 2000)
    return
  }

  try {
    component.value = defineAsyncComponent(() => import(`../components/blog/${sanitizedSlug}.vue`))
  } catch (importError) {
    console.error('Blog post not found:', importError)
    error.value = 'Blog post not found'
    // Redirect to home page after a short delay
    setTimeout(() => {
      router.push('/')
    }, 2000)
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
    v-if="component && !error" />
  <div
    v-else-if="error"
    class="error-message text-center p-4">
    <h2 class="text-xl text-[--isr-c-red] mb-2">{{ error }}</h2>
    <p>Redirecting to home page...</p>
  </div>
  <p v-else>Loading post...</p>
  <a
    href="/"
    class="back-arrow"
    style="text-decoration: underline; font-size: 16px"
    >&lt; Back</a
  >
</template>
