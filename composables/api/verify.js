import Http from '~/composables/api/http'

const verifyAPI = {
  checkEmail: (options) => {
    return Http.post('/api/v1/verify/email', options)
  },
  sendEmailCode: (options) => {
    return Http.post('/api/v1/verify/generateEmailCode', options)
  }
}

export default verifyAPI
