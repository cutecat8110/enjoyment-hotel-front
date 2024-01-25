// 預約時的部分資料
export const useReserveRoomInfoStore = defineStore(
    'reserveRoomInfo',
    () => {
        // 轉換日期格式
        const today = new Date()
        const nextDay = new Date(today.setDate(today.getDate() + 1))
        function change(date) {
            // YYYY/MM/DD
            return date.toISOString().split('T')?.[0]?.replaceAll('-', '/')
        }

         // 入住
        const checkInDate = ref(change(today))
         // 退房
        const checkOutDate = ref(change(nextDay))

        let roomInfo = ref({})

        return {
            roomInfo,
            checkInDate,
            checkOutDate
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