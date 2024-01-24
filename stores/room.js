// 預約時的部分資料
export const useReserveRoomInfoStore = defineStore(
    'ReserveRoomInfo',
    () => {
        // 轉換日期格式
        function change(date) {
            return date.toISOString().split('T')?.[0]?.replaceAll('-', '/')
        }

        const today = new Date()
        const nextDay = new Date(today.setDate(today.getDate() + 1))

        // 初始資料
        const defaultRoomInfo = {
            id: '',
            checkInDate: ref(change(today)), // 入住 2023/06/18
            checkOutDate: ref(change(nextDay)) // 退房 2023/06/18
        };
        let roomInfo = ref(defaultRoomInfo)

        function resetRoomDefaultData() {
            roomInfo = defaultRoomInfo
        }
        function setRoomData(data) {
            roomInfo = {
                ...roomInfo,
                ...data
            }
        }

        return {
            roomInfo,
            resetRoomDefaultData,
            setRoomData
        }
    }
)