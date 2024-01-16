import Http from '~/composables/api/http'

const newsAPI = {
  news: (options) => {
    return Http.get('/api/v1/home/news', options)
  },
  newsDetail: (options) => {
    return Http.get('/api/v1/home/news/{id}', options)
  }
}

export default newsAPI
