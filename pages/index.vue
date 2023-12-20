<template>
  <PageDefault>
    <div class="text-black d-flex flex-column">
      <button
        class="rounded border px-4 py-2"
        type="button"
        @click="commonStore.test = !commonStore.test"
      >
        {{ `pinia: ${commonStore.test}` }}
      </button>
      <div>pos: {{ x }}, {{ y }}</div>
      <Icon name="uil:github" color="black" />
      <button class="btn btn-primary" type="button" @click="chengeLanguage">
        {{ $t('language') }}
      </button>
    </div>
  </PageDefault>
</template>

<script lang="ts" setup>
import { useCommonStore } from '@/stores/common'
const commonStore = useCommonStore()
const { x, y } = useMouse()

const { locale, setLocaleCookie } = useI18n()

const chengeLanguage = () => {
  const localeCode = locale.value === 'en' ? 'zh' : 'en'
  locale.value = localeCode
  setLocaleCookie(localeCode)
}
</script>
