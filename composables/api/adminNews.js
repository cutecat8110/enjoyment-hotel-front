import Http from '~/composables/api/http'

const adminNewsAPI = {
  adminGetNewsApi: (options) => {
    return Http.get('/api/v1/admin/news/', options)
  },
  adminPostNewsApi: (options) => {
    return Http.post('/api/v1/admin/news/', options)
  },
  adminPutNewsApi: (options) => {
    return Http.put('/api/v1/admin/news/{id}', options)
  },
  adminDeleteNewsApi: (options) => {
    return Http.delete('/api/v1/admin/news/{id}', options)
  }
}

export default adminNewsAPI
