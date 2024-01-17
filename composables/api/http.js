import { useCommonStore } from '@/stores/common'

const handleError = (response) => {
  const err = (text) => {
    console.log(response?._data?.message ?? text)
  }
  if (!response._data) {
    err('請求超時，服務器無回應！')
    return
  }

  const handleMap = {
    404: () => err('服務器資源不存在'),
    500: () => err('服務器內部錯誤'),
    403: () => err('沒有權限訪問該資源'),
    401: () => {
      err('登錄狀態已過期，請重新登錄')
    }
  }

  handleMap[response.status] ? handleMap[response.status]() : err('未知錯誤！')
}

const fetch = (url, options) => {
  console.log('url, options: ', url, options)
  const runtimeConfig = useRuntimeConfig()
  const { apiBase } = runtimeConfig.public
  const reqUrl = apiBase + url

  const fetch = useFetch(reqUrl, {
    onRequest({ options }) {
      /* 檢查是否已登入 */
      const commonStore = useCommonStore()
      if (!commonStore.token) return

      /* 已登入 API 帶 token */
      options.headers = new Headers(options.headers)
      options.headers.set('Authorization', commonStore.token)
    },
    onResponseError({ response }) {
      handleError(response)
    },
    immediate: false, // 不立即觸發 API
    watch: false, // 不因參數變化, 觸發 API
    ...options
  })
  fetch.pending.value = false // pending 初始為 false
  return fetch
}

export default class Http {
  static get(url, options) {
    return fetch(url, { method: 'get', ...options })
  }

  static post(url, options) {
    return fetch(url, { method: 'post', ...options })
  }

  static put(url, options) {
    return fetch(url, { method: 'put', ...options })
  }

  static delete(url, options) {
    return fetch(url, { method: 'delete', ...options })
  }
}
