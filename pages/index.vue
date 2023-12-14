<template>
  <div>
    <PageDefault />
    <div class="container">
      <button
        type="button"
        @click="commonStore.test = !commonStore.test"
        class="rounded border px-4 py-2"
      >
        {{ `pinia: ${commonStore.test}` }}
      </button>
      <div>pos: {{ x }}, {{ y }}</div>
      <Icon name="uil:github" color="black" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores/common'
const commonStore = useCommonStore()
const { x, y } = useMouse()
</script>
