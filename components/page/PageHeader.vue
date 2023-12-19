<template>
  <header class="shadow-sm">
    <div class="container d-flex py-3 align-items-center bg-white">
      <div class="d-flex nav">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
        <NuxtLink to="/admin">admin</NuxtLink>
      </div>
      <div class="ms-auto">
        <button class="btn" type="button" @click="changeLanguage">
          {{ $t('language') }}
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const { locale, setLocaleCookie } = useI18n()
const changeLanguage = () => {
  const localeCode = locale.value === 'en' ? 'zh' : 'en'
  locale.value = localeCode
  setLocaleCookie(localeCode)
}
</script>

<style lang="scss" scoped>
.nav {
  gap: 20px;
}
</style>
