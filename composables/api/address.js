import Http from '~/composables/api/http'

const addressAPI = {
  getTwzipcode: (options) => {
    return Http.get('/twzipcode', options)
  }
}

export default addressAPI
