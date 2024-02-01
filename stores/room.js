// 預約時的部分資料
export const useReserveRoomInfoStore = defineStore(
    'reserveRoomInfo',
    () => {
        const peopleNum = ref(1)

        // 轉換日期格式
        const { $dayjs } = useNuxtApp()
        function changeDateFormat(date) {
            // YYYY/MM/DD
            return $dayjs(date).format('YYYY/MM/DD')
        }
        const today = new Date()
        // 入住
        const checkInDate = ref(today)
        // const checkInDate = ref(changeDateFormat(today))
        const nextDay = new Date(today.setDate(today.getDate() + 1))
        // 退房
        const checkOutDate = ref(nextDay)
        // const checkOutDate = ref(changeDateFormat(nextDay))

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