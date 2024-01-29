import addressAPI from './api/address'
import adminNewsAPI from './api/adminNews'
import culinaryAPI from './api/culinary'
import newsAPI from './api/news'
import roomInfoAPI from './api/roomInfo'
import usersAPI from './api/users'
import reserveAPI from './api/reserve'

export default function () {
  return {
    ...adminNewsAPI,
    ...culinaryAPI,
    ...newsAPI,
    ...usersAPI,
    ...addressAPI,
    ...roomInfoAPI,
    ...reserveAPI
  }
}
