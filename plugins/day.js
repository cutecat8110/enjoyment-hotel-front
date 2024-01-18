import dayjs from 'dayjs'

export default defineNuxtPlugin((_nuxtApp) => {
  return {
    provide: {
      dayjs
    }
  }
})
