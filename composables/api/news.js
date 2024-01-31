import Http from '~/composables/api/http'

const newsAPI = {
  newsApi: (options) => {
    return Http.get('/api/v1/home/news', options)
  },
  newsDetailApi: (options) => {
    return Http.get('/api/v1/home/news/{id}', options)
  }
}

export default newsAPI
