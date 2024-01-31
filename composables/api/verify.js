import Http from '~/composables/api/http'

const verifyAPI = {
  checkEmailApi: (options) => {
    return Http.post('/api/v1/verify/email', options)
  },
  sendEmailCodeApi: (options) => {
    return Http.post('/api/v1/verify/generateEmailCode', options)
  }
}

export default verifyAPI
