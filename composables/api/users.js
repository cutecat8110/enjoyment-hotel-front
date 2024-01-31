import Http from '~/composables/api/http'

const usersAPI = {
  loginApi: (options) => {
    return Http.post('/api/v1/user/login', options)
  },
  signupApi: (options) => {
    return Http.post('/api/v1/user/signup', options)
  },
  checkLoginApi: (options) => {
    return Http.get('/api/v1/user/check', options)
  },
  resetPasswordApi: (options) => {
    return Http.post('/api/v1/user/forgot', options)
  }
}

export default usersAPI
