import { x as defineStore, y as persistedState, k as useNuxtApp } from '../server.mjs';
import { ref } from 'vue';

const useReserveRoomInfoStore = defineStore(
  "reserveRoomInfo",
  () => {
    const peopleNum = ref(1);
    const { $dayjs } = useNuxtApp();
    function changeDateFormat(date) {
      return $dayjs(date).format("YYYY/MM/DD");
    }
    const today = /* @__PURE__ */ new Date();
    const checkInDate = ref(changeDateFormat(today));
    const nextDay = new Date(today.setDate(today.getDate() + 1));
    const checkOutDate = ref(changeDateFormat(nextDay));
    const defaultRoomInfo = {
      id: "",
      name: "",
      imageUrl: "",
      price: 0,
      discountPrice: 0,
      roomDetail: {
        amenityInfo: [],
        // 備品
        facilityInfo: [],
        // 房內設備
        areaInfo: "",
        // 坪數
        bedInfo: "",
        // 床型
        maxPeople: 0
        // 人數
      }
    };
    const enlargeRoomInfo = {
      imageUrlList: [],
      description: ""
    };
    return {
      peopleNum,
      checkInDate,
      checkOutDate,
      defaultRoomInfo,
      enlargeRoomInfo
    };
  },
  // https://ithelp.ithome.com.tw/articles/10302381
  {
    persist: {
      key: "reserveRoomInfo",
      storage: persistedState.localStorage
    }
  }
);

export { useReserveRoomInfoStore as u };
//# sourceMappingURL=room-Ka97noNw.mjs.map
