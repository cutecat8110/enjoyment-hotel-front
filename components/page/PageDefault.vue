<template>
  <div class="page-default">
    <article v-for="(_, index) in 5" :key="index" class="container border">
      <div class="page-text">{{ `This is ${$t(String(route.name))} page.` }}</div>
      <div class="page-text">
        {{ index + 1 }}
      </div>
      <div v-if="index === 0">
        <slot></slot>
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>

<style lang="scss" scoped>
.page-default {
  background-color: #ccc;

  > article {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    height: 100vh;
  }

  .page-text {
    font-size: 2rem;
    color: #fff;
  }
}
</style>
