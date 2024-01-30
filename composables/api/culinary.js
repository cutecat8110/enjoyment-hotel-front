import Http from '~/composables/api/http'

const culinaryAPI = {
  culinaryApi: (options) => {
    return Http.get('/api/v1/home/culinary/', options)
  },
  culinaryDetailApi: (options) => {
    return Http.get('/api/v1/home/culinary/{id}', options)
  }
}

export default culinaryAPI
