<template>
  <div class="min-h-screen flex items-center justify-center">
    <h1 class="text-blue-600 text-4xl font-bold">{{ title }}</h1>
  </div>
</template>

<script lang="ts" setup>
const year: number = 2024
const title: string = `${year} nuxt3 啟動器`
</script>
