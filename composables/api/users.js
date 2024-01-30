import Http from '~/composables/api/http'

const usersAPI = {
  login: (options) => {
    return Http.post('/api/v1/user/login', options)
  },
  signup: (options) => {
    return Http.post('/api/v1/user/signup', options)
  },
  checkLogin: (options) => {
    return Http.get('/api/v1/user/check', options)
  },
  resetPassword: (options) => {
    return Http.post('/api/v1/user/forgot', options)
  }
}

export default usersAPI
