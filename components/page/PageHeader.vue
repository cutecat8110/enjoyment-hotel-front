<template>
  <header class="page-header bg-black">
    <NuxtImg src="/img/logo.png" height="72" />
    <nav class="navbar">
      <NuxtLink to="/">客房旅宿</NuxtLink>
      <NuxtLink to="/about">會員登入</NuxtLink>
      <NuxtLink to="/contact">立即訂房</NuxtLink>
    </nav>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.page-header {
  padding: 1.5rem 5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  .navbar {
    display: flex;

    margin-left: auto;
    gap: 1rem;
    color: #ffffff;
  }
}
</style>
