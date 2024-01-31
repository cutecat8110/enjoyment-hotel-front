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
  },
  getUserApi: (options) => {
    return Http.get('/api/v1/user', options)
  },
  updateUserApi: (options) => {
    return Http.put('/api/v1/user', options)
  }
}

export default usersAPI
