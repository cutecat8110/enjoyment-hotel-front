import dayjs from 'dayjs'
import zhTw from 'dayjs/locale/zh-tw'

export default defineNuxtPlugin((_nuxtApp) => {
  dayjs.locale(zhTw)
  return {
    provide: {
      dayjs
    }
  }
})
