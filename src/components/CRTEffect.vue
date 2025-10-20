<template>
  <div class="crt-container" :class="{ 'crt-active': isActive }">
    <slot />
    
    <!-- CRT Effects Overlays -->
    <template v-if="isActive">
      <!-- Scanlines overlay -->
      <div class="crt-scanlines" />
      
      <!-- Vignette effect -->
      <div class="crt-vignette" />
      
      <!-- Screen curvature/fisheye distortion overlay -->
      <div class="crt-distortion" />
      
      <!-- Subtle screen glow -->
      <div class="crt-glow" />
    </template>
  </div>
</template>

<script setup>
defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.crt-container {
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
}

.crt-active {
  transform: perspective(1000px) translateZ(0);
  filter: contrast(1.1) brightness(0.95);
}

.crt-active > :deep(*:not(.crt-scanlines):not(.crt-vignette):not(.crt-distortion):not(.crt-glow)) {
  clip-path: inset(0 0 0 0 round 2px);
}

/* Scanlines overlay */
.crt-scanlines {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 50;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15) 0px,
    transparent 1px,
    transparent 2px,
    rgba(0, 0, 0, 0.15) 3px
  );
  opacity: 0;
  animation: fadeIn 0.3s ease-in-out forwards;
}

/* Vignette effect */
.crt-vignette {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 50;
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
  opacity: 0;
  animation: fadeIn 0.3s ease-in-out forwards;
}

/* Screen curvature/fisheye distortion overlay */
.crt-distortion {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 50;
  background: radial-gradient(
    circle at center,
    transparent 0%,
    rgba(0, 0, 0, 0.05) 100%
  );
  mix-blend-mode: multiply;
  opacity: 0;
  animation: fadeIn 0.3s ease-in-out forwards;
}

/* Subtle screen glow */
.crt-glow {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 50;
  box-shadow: inset 0 0 100px rgba(220, 38, 38, 0.05);
  opacity: 0;
  animation: fadeIn 0.3s ease-in-out forwards;
}

/* Flicker animation */
.crt-active {
  animation: flicker 0.15s infinite;
}

@keyframes flicker {
  0%, 100% { 
    opacity: 1; 
  }
  50% { 
    opacity: 0.97; 
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Ensure the effect doesn't interfere with interactions */
.crt-container > :deep(*:not(.crt-scanlines):not(.crt-vignette):not(.crt-distortion):not(.crt-glow)) {
  position: relative;
  z-index: 1;
}
</style>