import addressAPI from './api/address'
import usersAPI from './api/users'

export default function () {
  return {
    ...usersAPI,
    ...addressAPI
  }
}
