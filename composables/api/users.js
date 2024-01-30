import Http from '~/composables/api/http'

const usersAPI = {
  loginApi: (options) => {
    return Http.post('/api/v1/user/login', options)
  },
  signupApi: (options) => {
    return Http.post('/api/v1/user/signup', options)
  }
}

export default usersAPI
