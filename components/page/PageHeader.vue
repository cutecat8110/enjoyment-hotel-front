<template>
  <header class="shadow">
    <div class="container flex h-14 items-center bg-white">
      <div class="flex gap-4">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
        <NuxtLink to="/admin">admin</NuxtLink>
      </div>
      <div class="ml-auto">
        <button type="button" @click="changeLanguage" class="rounded border px-4 py-2">
          {{ $t('language') }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { locale, setLocaleCookie } = useI18n()
const changeLanguage = () => {
  const localeCode = locale.value === 'en' ? 'zh' : 'en'
  locale.value = localeCode
  setLocaleCookie(localeCode)
}
</script>
