import Http from '~/composables/api/http'

const roomInfoAPI = {
  getRoomInfo: (id, options) => {
    return Http.get(`/api/v1/rooms/${id}`, options, true)
  }
}

export default roomInfoAPI
