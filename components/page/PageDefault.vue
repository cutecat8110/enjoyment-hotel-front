<template>
  <div class="container my-5">
    <h1>{{ `This is ${route.name}.` }}</h1>
  </div>
</template>

<script setup>
const route = useRoute()
</script>

<style lang="scss" scoped>
h1 {
  color: $primary;
}
</style>
