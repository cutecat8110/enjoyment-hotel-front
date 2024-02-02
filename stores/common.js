export const useCommonStore = defineStore(
  'common',
  () => {
    const token = ref('')
    const me = ref({})

    const remember = ref(false)
    const email = ref('')

    return {
      token,
      me,
      remember,
      email
    }
  },
  { persist: true }
)
