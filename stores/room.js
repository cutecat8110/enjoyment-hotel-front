// 預約時的部分資料
export const useReserveRoomInfoStore = defineStore(
    'reserveRoomInfo',
    () => {
        // 轉換日期格式
        function changeDateFormat(date) {
            // YYYY/MM/DD
            return date.toISOString().split('T')?.[0]?.replaceAll('-', '/')
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

        var dateDiff = function () {
            var oDate1 = new Date(checkInDate.value);
            var oDate2 = new Date(checkOutDate.value);
            var iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); // 把相差的毫秒數轉換為天數
            // var oDate1 = new Date(sDate1);
            // var oDate2 = new Date(sDate2);
            // var iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); // 把相差的毫秒數轉換為天數
            return iDays;
        };

        return {
            defaultRoomInfo,
            roomInfo,
            checkInDate,
            checkOutDate,
            peopleNum,
            dateDiff
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