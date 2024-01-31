import Http from '~/composables/api/http'

const addressAPI = {
  getTwzipcodeApi: (options) => {
    return Http.get('/twzipcode', options)
  }
}

export default addressAPI
