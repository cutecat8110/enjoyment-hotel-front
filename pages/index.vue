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
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores/common'
const commonStore = useCommonStore()
</script>
