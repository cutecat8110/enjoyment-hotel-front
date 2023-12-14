export const useCommonStore = defineStore(
  'common',
  () => {
    const test = ref(false)

    return {
      test
    }
  },
  { persist: true }
)
