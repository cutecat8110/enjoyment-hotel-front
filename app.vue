<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
body {
  background-color: #ccc;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.075s ease-in-out !important;
}

.page-enter-from {
  transform: translateX(-30px);
  opacity: 0;
}

.page-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.075s ease-in-out !important;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
