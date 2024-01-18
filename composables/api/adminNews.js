import Http from '~/composables/api/http'

const adminNewsAPI = {
  adminGetNews: (options) => {
    return Http.get('/api/v1/admin/news/', options)
  },
  adminPostNews: (options) => {
    return Http.post('/api/v1/admin/news/', options)
  },
  adminPutNews: (options) => {
    return Http.put('/api/v1/admin/news/{id}', options)
  },
  adminDeleteNews: (options) => {
    return Http.delete('/api/v1/admin/news/{id}', options)
  }
}

export default adminNewsAPI
