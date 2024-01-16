import newsAPI from './api/news'
import usersAPI from './api/users'

export default function () {
  return {
    ...newsAPI,
    ...usersAPI
  }
}
