// 預約時的部分資料
export const useReserveRoomInfoStore = defineStore(
    'reserveRoomInfo',
    () => {
        const peopleNum = ref(1)

        // 入住
        const checkInDate = ref(new Date())

        // 退房
        const today = new Date()
        const nextDay = new Date(today.setDate(today.getDate() + 1))
        const checkOutDate = ref(nextDay)

        const defaultRoomInfo = {
            id: '',
            name: '',
            imageUrl: '',
            price: 0,
            discountPrice: 0,
            roomDetail: {
                amenityInfo: [], // 備品
                facilityInfo: [], // 房內設備
                areaInfo: '', // 坪數
                bedInfo: '', // 床型
                maxPeople: 0 // 人數
            }
        }
        const enlargeRoomInfo = {
            imageUrlList: [],
            description: ''
        }

        return {
            peopleNum,
            checkInDate,
            checkOutDate,

            defaultRoomInfo,
            enlargeRoomInfo
        }
    },
    // https://ithelp.ithome.com.tw/articles/10302381
    {
        persist: {
            key: 'reserveRoomInfo',
            storage: persistedState.localStorage
        }
    }
)