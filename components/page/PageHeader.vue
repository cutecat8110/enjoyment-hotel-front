<template>
  <header class="page-header">
    <NuxtLink to="/">
      <NuxtImg src="/img/logo.png" height="72" />
    </NuxtLink>
    <nav class="navbar">
      <NuxtLink to="/rooms">客房旅宿</NuxtLink>
      <NuxtLink to="/login">會員登入</NuxtLink>
      <NuxtLink to="/rooms">立即訂房</NuxtLink>
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
