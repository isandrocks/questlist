<script setup>
import CausewayTHTc from './blog/cards/causewayTHTc.vue'
import CodeSite from './blog/cards/codeSite.vue'
import LightsoutCard from './blog/cards/lightsoutCard.vue'
import LLMInterface from './blog/cards/LLMInterface.vue'
import StringArtCard from './blog/cards/StringArtCard.vue'
import Skyline20KCard from './blog/cards/Skyline20KCard.vue'
import { ref, onMounted, nextTick, markRaw } from 'vue'

const cards = [
  markRaw(CausewayTHTc),
  markRaw(LightsoutCard),
  markRaw(CodeSite),
  markRaw(LLMInterface),
  markRaw(StringArtCard),
  markRaw(Skyline20KCard)
]

const masonry = ref(null)
const masonryHeight = ref(0)
const columnWPercent = ref(33.33)

function updateColumnCount() {
  // Set column width percent based on screen size
  if (window.innerWidth < 768) {
    // Mobile view - single column
    columnWPercent.value = 100
  } else if (window.innerWidth < 1081) {
    // Tablet view - two columns
    columnWPercent.value = 50
  } else {
    // Desktop view - three columns
    columnWPercent.value = 33.33
  }
}

onMounted(async () => {
  await nextTick()
  updateColumnCount()

  // Run initial layout after a slight delay to allow components to render
  setTimeout(() => {
    layoutMasonry()
    setTimeout(layoutMasonry, 300)
  }, 100)

  window.addEventListener('load', layoutMasonry)
  window.addEventListener('resize', () => {
    updateColumnCount()
    layoutMasonry()
  })
})

function layoutMasonry() {
  if (!masonry.value) return

  const masonryEl = masonry.value
  const cardEls = masonryEl.querySelectorAll('.card-item')
  const containerWidth = masonryEl.offsetWidth
  const columnCount = Math.floor(100 / columnWPercent.value)
  const columnWidth = containerWidth / columnCount

  // Only proceed if we have cards with proper dimensions
  if (cardEls.length === 0 || !cardEls[0].offsetHeight) {
    // Try again in a moment if cards aren't ready
    setTimeout(layoutMasonry, 100)
    return
  }

  // Initialize column heights
  const columnHeights = Array(columnCount).fill(0)

  // Position each card
  cardEls.forEach((cardEl) => {
    // Find the shortest column
    const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights))

    // Calculate positions
    const leftPosition = shortestColumn * columnWidth
    const topPosition = columnHeights[shortestColumn]

    // Apply position to the card
    cardEl.style.position = 'absolute'
    cardEl.style.left = `${leftPosition}px`
    cardEl.style.top = `${topPosition}px`
    cardEl.style.width = `${columnWidth - 16}px` // Subtract gap

    // Update column height
    columnHeights[shortestColumn] += cardEl.offsetHeight + 16 // Add gap
  })

  // Update the container height to fit all cards
  masonryHeight.value = Math.max(...columnHeights)
}
</script>

<template>
  <div
    ref="masonry"
    class="masonry-container"
    :style="{ height: `${masonryHeight}px`, position: 'relative' }">
    <component
      v-for="(card, index) in cards"
      :key="index"
      :is="card"
      class="card-item" />
  </div>
</template>

<style scoped>
.masonry-container {
  width: 100%;
  margin: 0 auto;
}

.card-item {
  padding: 8px;
  box-sizing: border-box;
}

.card-item:hover {
  transition: all 0.3s ease-in-out;
  transform: translateY(-5px);
}
</style>
