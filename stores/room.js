// 預約時的部分資料
export const useReserveRoomInfoStore = defineStore(
    'reserveRoomInfo',
    () => {
        // 轉換日期格式
        const { $dayjs } = useNuxtApp()
        function changeDateFormat(date) {
            // YYYY/MM/DD
            return $dayjs(date).format('YYYY/MM/DD')
        }

        const today = new Date()
        // 入住
        const checkInDate = ref(changeDateFormat(today))

        const nextDay = new Date(today.setDate(today.getDate() + 1))
        // 退房
        const checkOutDate = ref(changeDateFormat(nextDay))

        const peopleNum = ref(1)

        const roomInfo = ref({})
        const defaultRoomInfo = {
            id: '',
            name: '',
            imageUrl: '',
            imageUrlList: [],
            description: '',
            price: 0,
            roomDetail: {
                amenityInfo: [], // 備品
                facilityInfo: [], // 房內設備
                areaInfo: '', // 坪數
                bedInfo: '', // 床型
                maxPeople: 0 // 人數
            }
        }

        return {
            defaultRoomInfo,
            roomInfo,
            checkInDate,
            checkOutDate,
            peopleNum
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