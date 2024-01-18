<template>
  <NuxtLayout v-if="Alive">
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const Alive = ref(true)
const reload = () => {
  Alive.value = false
  nextTick(() => {
    Alive.value = true
  })
}
provide('reload', reload)
</script>

<style lang="scss">
body {
  background-color: $background;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.15s ease-in-out !important;
}

.page-enter-from {
  transform: translateX(-1.875rem);
  opacity: 0;
}

.page-leave-to {
  transform: translateX(1.875rem);
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.15s ease-in-out !important;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
