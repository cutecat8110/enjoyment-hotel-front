<template>
  <header :class="[colorful && 'bg-background', 'page-header']">
    <NuxtLink to="/">
      <NuxtImg src="/img/logo.png" height="72" />
    </NuxtLink>
    <nav v-if="props.status !== 'auth'" class="navbar">
      <NuxtLink class="btn btn-ghost" to="/rooms">客房旅宿</NuxtLink>
      <NuxtLink class="btn btn-ghost" to="/login">會員登入</NuxtLink>
      <NuxtLink class="btn btn-primary" to="/rooms">立即訂房</NuxtLink>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const props = defineProps({
  status: {
    type: String,
    default: ''
  }
})

/* 判斷 Header 是否背景 */
const colorful = computed(() => {
  if (isOverVH.value) return true
  switch (props.status) {
    case 'auth':
      return true
    default:
      return false
  }
})

/* 檢查滾動是否超過 VH */
const { y } = useWindowScroll()
const { height } = useWindowSize()
const isOverVH = computed(() => {
  return y.value > height.value
})
</script>

<style lang="scss" scoped>
.page-header {
  padding: 1.5rem 5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  transition: background $duration-300 ease-in-out;
  background: transparentize($background, 1);
  .navbar {
    display: flex;

    margin-left: auto;
    gap: 1rem;
    color: #ffffff;
  }
}
</style>
