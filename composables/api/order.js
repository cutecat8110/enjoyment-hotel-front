import Http from '~/composables/api/http'

const orderAPI = {
  // 取得訂單
  getOrdersApi: (options) => {
    return Http.get(`/api/v1/orders/`, options)
  },
  // 送出訂單
  submitOrderApi: (options) => {
    return Http.post('/api/v1/orders/', options)
  },
  // 取得單筆訂單
  getOrderInfoApi: (id, options) => {
    return Http.get(`/api/v1/orders/${id}`, options)
  },
  // 刪除訂單
  deleteOrdersApi: (id, options) => {
    return Http.delete(`/api/v1/orders/${id.value}`, options)
  }
}

export default orderAPI
