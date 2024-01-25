<template>
  <div class="p-0 p-md-xl pb-md-5 bg-primary-tint">
    <div class="container-xl">
      <button class="btn btn-ghost d-flex align-items-center py-5 text-dark p-0 fs-3 fw-bold">
        <Icon class="fs-1 fw-bold" name="ic:round-keyboard-arrow-left" />
        確認訂房資訊
      </button>
      <div class="row">
        <div class="col-md-7 mb-lg-xl">
          <h4 class="fw-bold mb-5">訂房資訊</h4>
          <div class="pb-6 mb-6 border-bottom">
            <div class="row align-items-center mb-4">
              <div class="col-10">
                <div class="room-info-title-border title-border-primary ps-3 fw-bold mb-2">
                  選擇房型
                </div>
                <div>尊爵雙人房</div>
              </div>
              <div class="col-2">
                <button class="btn btn-text text-dark fw-bold">編輯</button>
              </div>
            </div>

            <div class="row align-items-center mb-4">
              <div class="col-10">
                <div class="room-info-title-border title-border-primary ps-3 fw-bold mb-2">
                  訂房日期
                </div>
                <div class="mb-2">入住：6 月 10 日星期二</div>
                <div>退房：6 月 11 日星期三</div>
              </div>
              <div class="col-2">
                <button class="btn btn-text text-dark fw-bold">編輯</button>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-10">
                <div class="room-info-title-border title-border-primary ps-3 fw-bold mb-2">
                  房客人數
                </div>
                <div>2 人</div>
              </div>
              <div class="col-2">
                <button class="btn btn-text text-dark fw-bold">編輯</button>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-between align-items-center mb-5">
            <h4 class="fw-bold">訂房人資訊</h4>
            <button class="btn btn-text text-primary fw-bold">套用會員資料</button>
          </div>
          <ul class="list-unstyled pb-6 mb-6 border-bottom">
            <li class="mb-4">
              <label class="form-label d-flex justify-content-between text-dark" for="default">
                姓名
              </label>
              <input id="text" class="form-control" type="default" placeholder="請輸入姓名" />
            </li>
            <li class="mb-4">
              <label class="form-label d-flex justify-content-between text-dark" for="default">
                手機號碼
              </label>
              <input id="text" class="form-control" type="default" placeholder="請輸入手機號碼" />
            </li>
            <li class="mb-4">
              <label class="form-label d-flex justify-content-between text-dark" for="default">
                電子信箱
              </label>
              <input id="email" class="form-control" type="default" placeholder="請輸入電子信箱" />
            </li>
            <li class="d-md-none mb-4">
              <label class="form-label d-flex justify-content-between text-dark" for="default">
                生日
              </label>
              <div class="row">
                <div class="col-4 mb-3">
                  <select class="form-select" aria-label="Default select year">
                    <option selected>選擇年分</option>
                    <option value="1990">1990年</option>
                    <option value="1991">1991年</option>
                    <option value="1992">1992年</option>
                  </select>
                </div>
                <div class="col-4">
                  <select class="form-select" aria-label="Default select month">
                    <option selected>請選擇月份</option>
                    <option value="1">1月</option>
                    <option value="2">2月</option>
                    <option value="3">3月</option>
                  </select>
                </div>
                <div class="col-4">
                  <select class="form-select" aria-label="Default select day">
                    <option selected>請選擇日期</option>
                    <option value="1">1日</option>
                    <option value="2">2日</option>
                    <option value="3">3日</option>
                  </select>
                </div>
              </div>
            </li>
            <li>
              <label class="form-label d-flex justify-content-between text-dark" for="default">
                地址
              </label>
              <div class="row">
                <div class="col-6 mb-3">
                  <select class="form-select -" aria-label="Default select city">
                    <option selected>請選擇縣市</option>
                    <option value="高雄市">高雄市</option>
                    <option value="台中市">台中市</option>
                    <option value="台北市">台北市</option>
                  </select>
                </div>
                <div class="col-6">
                  <select class="form-select -" aria-label="Default select area">
                    <option selected>請選擇區域</option>
                    <option value="楠梓區">楠梓區</option>
                    <option value="三民區">三民區</option>
                    <option value="旗山區">旗山區</option>
                  </select>
                </div>
                <div class="col-12">
                  <input
                    id="text"
                    class="form-control"
                    type="default"
                    placeholder="請輸入詳細地址"
                  />
                </div>
              </div>
            </li>
          </ul>

          <!-- <TheRoomsInfo mb-space="4" /> -->
        </div>

        <div class="col-md-5 mb-5 mb-lg-0">
          <div class="bg-light rounded-4 p-4 p-lg-5">
            <div class="rounded-3 overflow-hidden">
              <NuxtImg class="w-100 h-auto" src="/img/room/Room_1.png" alt="Room_1" />
            </div>

            <h3 class="fs-6 fs-md-4 fw-bold my-4 mt-lg-5">價格詳情</h3>
            <ul class="list-unstyled mb-4 mb-lg-5">
              <li class="d-flex justify-content-between active mb-3">
                <div>
                  <span>NT$ 10,000 ×</span>
                  <span class="text-gray-80">2 晚</span>
                </div>
                <span>NT$ 20,000</span>
              </li>

              <li class="d-flex justify-content-between active mb-4 pb-4 border-bottom">
                <span>住宿折扣</span>
                <span class="text-primary">-NT$ 1,000</span>
              </li>

              <li class="d-flex justify-content-between active fw-bold">
                <span>總價</span>
                <span>NT$ 19,000</span>
              </li>
            </ul>
            <!-- @click="submitOrder" -->
            <button class="btn btn-primary w-100" type="button">
              確認訂房
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- :class="`modal fade ${isShowModal ? 'show d-block' : ''}`" -->
    <div
      id="orderLoadModal"
      class="modal fade"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content p-xl">
          <div class="modal-body d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex">
              <span
                class="spinner-grow spinner-grow-sm mb-xl text-primary-dark me-2"
                role="status"
              ></span>
              <span class="spinner-grow spinner-grow-sm mb-xl text-primary-dark me-2"></span>
              <span class="spinner-grow spinner-grow-sm mb-xl text-primary-dark"></span>
            </div>
            <NuxtImg class="w-80 mb-3" src="/img/logo-primary.svg" />
            <div class="fs-5 fw-bold">正在處理你的預訂</div>
          </div>
        </div>
      </div>
    </div>

    <!-- // modal 寫法，先保留
    <div
      id="orderLoadModal"
      ref="orderLoad"
      :class="{ 'show': isShowModal }"
      class="modal fade"
      aria-hidden="true"
      aria-labelledby="orderLoadLabel"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content p-xl">
          <div class="modal-body d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex">
              <span
                class="spinner-grow spinner-grow-sm mb-xl text-primary-dark me-2"
                role="status"
              ></span>
              <span class="spinner-grow spinner-grow-sm mb-xl text-primary-dark me-2"></span>
              <span class="spinner-grow spinner-grow-sm mb-xl text-primary-dark"></span>
            </div>
            <NuxtImg class="w-80 mb-3" src="/img/logo-primary.svg" />
            <div class="fs-5 fw-bold">正在處理你的預訂</div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
// import TheRoomsInfo from '@/components/rooms/TheRoomsInfo.vue'
// import type { RoomInfo, RoomDetail } from '@/types/room'
import { useReserveRoomInfoStore } from '@/stores/room'

definePageMeta({
  layout: 'h-bg-f'
})

const reserveRoomInfo = useReserveRoomInfoStore();
// // 取得 入住時間 & 退房時間
const checkInDate = ref(reserveRoomInfo.checkInDate);
const checkOutDate = ref(reserveRoomInfo.checkInDate);

console.log('reserveRoomInfo: ', reserveRoomInfo);
console.log('checkInDate: ', checkInDate);
console.log('checkOutDate: ', checkOutDate);


// const isShowModal = ref(false)
// const route = useRoute()
// // modal 寫法，先保留
// // const { $bootstrap } = useNuxtApp()
// // const orderLoad = ref(null)

// // let modal: any
// // onMounted(() => {
// //   const routes = useRoute()
// //   modal = routes.path === '/reserve' ? $bootstrap.modal(orderLoad.value) : ''
// // })

// // onBeforeUnmount(() => {
// //   // 加上 dispose，避免切換頁面時或是 HMR 看到殘留畫面
// //   modal.dispose()
// // })

// const submitOrder = () => {
//   isShowModal.value = true
//   setTimeout(() => {
//     reserveRoomInfo.roomInfo = {}
//     console.log('reserveRoomInfo.roomInfo: ', reserveRoomInfo.roomInfo);

//     navigateTo('/confirmation')
//   }, 3000)
// }

// // 房型資訊
// let roomInfo: RoomInfo = reactive({
//   id: '',
//   name: '',
//   imageUrl: '',
//   imageUrlList: [],
//   description: '',
//   price: 0,
//   roomDetail: {
//     amenityInfo: [], // 備品
//     facilityInfo: [], // 房內設備
//     areaInfo: '', // 坪數
//     bedInfo: '', // 床型
//     maxPeople: 0 // 人數
//   }
// })

// // 房型細節
// let roomDetail: RoomDetail = {
//   amenityInfo: [], // 備品
//   facilityInfo: [], // 房內設備
//   areaInfo: '', // 坪數
//   bedInfo: '', // 床型
//   maxPeople: 0 // 人數
// }

// // form = {
// //   "roomId": "65251f6095429cd58654bf12",
// //   "checkInDate": "2023/06/18",
// //   "checkOutDate": "2023/06/19",
// //   "peopleNum": 2,
// //   "userInfo": {
// //     "address": {
// //       "zipcode": 802,
// //       "detail": "文山路23號"
// //     },
// //     "name": "Joanne Chen",
// //     "phone": "0912345678",
// //     "email": "example@gmail.com"
// //   }
// // }
</script>

<style lang="scss" scoped>
.w-80 {
  width: 100%;
  max-width: 50%;
}

.modal {
  background-color: rgba($dark, 0.5);
  box-shadow: 10px;
}
</style>
