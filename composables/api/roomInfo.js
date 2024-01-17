import Http from '~/composables/api/http'

const roomInfoAPI = {
  roomInfo: (id, options) => {
    console.log('id, options: ', id, options)
    return Http.get(`api/v1/rooms/${id}`, options)
  }
}

export default roomInfoAPI
