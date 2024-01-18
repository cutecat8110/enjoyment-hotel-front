import addressAPI from './api/address'
import newsAPI from './api/news'
import roomInfoAPI from './api/roomInfo'
import usersAPI from './api/users'

export default function () {
  return {
    ...newsAPI,
    ...usersAPI,
    ...addressAPI,
    ...roomInfoAPI
  }
}
