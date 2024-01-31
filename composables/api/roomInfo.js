import Http from '~/composables/api/http'

const roomInfoAPI = {
  getRoomsApi: (options) => {
    return Http.get(`/api/v1/rooms/`, options)
  },
  getRoomInfoApi: (id, options) => {
    return Http.get(`/api/v1/rooms/${id}`, options)
  }
}

export default roomInfoAPI
