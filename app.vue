<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body {
  background-color: #cccccc;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.075s ease-in-out !important;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(30px);
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
