import addressAPI from './api/address'
import roomInfoAPI from './api/roomInfo'
import usersAPI from './api/users'

export default function () {
  return {
    ...usersAPI,
    ...addressAPI,
    ...roomInfoAPI
  }
}
