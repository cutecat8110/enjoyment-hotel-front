import Http from '~/composables/api/http'

const usersAPI = {
  login: (options) => {
    return Http.post('/api/v1/user/login', options)
  },
  signup: (options) => {
    return Http.post('/api/v1/user/signup', options)
  }
}

export default usersAPI
