export const useCommonStore = defineStore(
  'common',
  () => {
    const token = ref('')
    const me = ref({})

    return {
      token,
      me
    }
  },
  { persist: true }
)
