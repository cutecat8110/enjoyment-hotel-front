import Http from '~/composables/api/http'

const reserveAPI = {
    submitOrderApi: (options) => {
        return Http.post('/api/v1/orders/', options)
    }
}

export default reserveAPI