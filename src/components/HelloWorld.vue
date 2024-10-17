<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="red">{{ msg }}</h1>
    <h3>
      A tree style todo list app. Butts, Butts, Butts, Butts, Butts!
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1rem;
}

.greetings h1,
.greetings h3 {
  text-align: left;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }

  h3 {
  font-size: 1.2rem;
  }

  h1 {
    font-size: 3rem;
  }
}
</style>
