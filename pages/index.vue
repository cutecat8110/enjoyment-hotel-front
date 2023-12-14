<template>
  <div>
    <PageDefault />
    <div class="container">
      <button
        class="rounded border px-4 py-2"
        type="button"
        @click="commonStore.test = !commonStore.test"
      >
        {{ `pinia: ${commonStore.test}` }}
      </button>
      <div>pos: {{ x }}, {{ y }}</div>
      <Icon name="uil:github" color="black" />
      <div class="test-color h-4 w-4"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCommonStore } from '@/stores/common'
const commonStore = useCommonStore()
const { x, y } = useMouse()
</script>
