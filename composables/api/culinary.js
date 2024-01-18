import Http from '~/composables/api/http'

const culinaryAPI = {
  culinary: (options) => {
    return Http.get('/api/v1/home/culinary/', options)
  },
  culinaryDetail: (options) => {
    return Http.get('/api/v1/home/culinary/{id}', options)
  }
}

export default culinaryAPI
