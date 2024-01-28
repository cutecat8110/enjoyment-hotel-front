<template>
  <div class="p-0 p-md-xl pb-md-5 bg-primary-tint">
    <div class="container-xl">
      <button class="btn btn-ghost d-flex align-items-center py-5 text-dark p-0 fs-3 fw-bold">
        <Icon class="fs-1 fw-bold" name="ic:round-keyboard-arrow-left" />
        確認訂房資訊
      </button>
      <ClientOnly>
        <div class="row">
          <div class="col-md-7 mb-lg-xl">
            <h4 class="fw-bold mb-5">訂房資訊</h4>
            <div class="pb-6 mb-6 border-bottom">
              <div class="row align-items-center mb-4">
                <div class="col-10">
                  <div class="room-info-title-border title-border-primary ps-3 fw-bold mb-2">
                    選擇房型
                  </div>
                  <div>{{ roomInfo.name }} | {{ form.roomId }}</div>
                  <select class="form-select" v-model="form.roomId">
                    <option v-for="room in allRoomInfo" :key="room.id" :value="room.id">
                      {{ room.name }}
                    </option>
                  </select>
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
                  <div class="mb-2">
                    入住：{{ changeDateFormat(form.checkInDate) }}
                  </div>
                  <div>
                    退房：{{ changeDateFormat(form.checkOutDate) }}
                  </div>
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
                  <div>{{ form.peopleNum }} 人</div>
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
            <VForm ref="formRefs" v-slot="{ errors }">
              <ul class="list-unstyled pb-6 mb-6 border-bottom">
                <li class="mb-4">
                  <label class="form-label d-flex text-dark" for="default">
                    姓名
                    <span class="text-danger ms-1">*</span>
                  </label>
                  <VField
                    id="name"
                    v-model.trim="form.userInfo.name"
                    :class="[errors.name && 'verify-error', 'form-control']"
                    name="name"
                    label="姓名"
                    type="name"
                    placeholder="請輸入姓名"
                    rules="required|name"
                  />
                  <!-- :disabled="apiPending" -->
                  <div class="text-danger fs-8 fw-bold mt-2">{{ errors.name }}</div>
                </li>
                <li class="mb-4">
                  <label class="form-label d-flex text-dark" for="default">
                    手機號碼
                    <span class="text-danger ms-1">*</span>
                  </label>
                  <VField
                    id="phone"
                    v-model.trim="form.userInfo.phone"
                    :class="[errors.phone && 'verify-error', 'form-control']"
                    name="phone"
                    label="手機號碼"
                    type="phone"
                    placeholder="請輸入手機號碼"
                    rules="required|phone"
                  />
                  <!-- :disabled="apiPending" -->
                  <div class="text-danger fs-8 fw-bold mt-2">{{ errors.phone }}</div>
                </li>
                <li class="mb-4">
                  <label class="form-label d-flex justify-content-between text-dark" for="default">
                    電子信箱
                  </label>
                  <VField
                    id="email"
                    v-model.trim="form.userInfo.email"
                    :class="[errors.email && 'verify-error', 'form-control']"
                    name="email"
                    label="電子信箱"
                    type="email"
                    placeholder="請輸入電子信箱"
                    rules="required|email"
                  />
                  <!-- :disabled="apiPending" -->
                  <div class="text-danger fs-8 fw-bold mt-2">{{ errors.email }}</div>
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
                      <VField
                        v-model="address.city"
                        class="form-select"
                        name="city"
                        as="select"
                        rules="required"
                      >
                        <!-- :disabled="apiPending" -->
                        <option value="" selected>請選擇縣市</option>
                        <option v-for="city in cityTmpl" :key="city" :value="city">
                          {{ city }}
                        </option>
                      </VField>
                    </div>
                    <div class="col-6">
                      <VField
                        v-model="form.userInfo.address.zipcode"
                        class="form-select"
                        name="district"
                        as="select"
                        rules="required"
                      >
                        <!-- :disabled="apiPending" -->
                        <option value="" selected>請選擇區域</option>
                        <option v-for="item in districtTmpl"
                          :key="`${item.district}_${item.zipcode}`"
                          :value="item.zipcode"
                        >
                          {{ item.district }}
                        </option>
                      </VField>
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
            </VForm>

            <TheRoomsInfo :room-detail="roomInfo.roomDetail" mb-space="4" />
          </div>

          <div class="col-md-5 mb-5 mb-lg-0">
            <div class="bg-light rounded-4 p-4 p-lg-5">
              <div class="rounded-3 overflow-hidden">
                <NuxtImg class="w-100 h-auto" :src="roomInfo.imageUrl" alt="Room_1" />
              </div>

              <h3 class="fs-6 fs-md-4 fw-bold my-4 mt-lg-5">價格詳情</h3>
              <ul class="list-unstyled mb-4 mb-lg-5">
                <li class="d-flex justify-content-between active mb-3">
                  <div>
                    <span>NT$ {{ roomInfo.price }} ×</span>
                    <span class="text-gray-80">
                      {{ dateDiff }}
                      </span>
                  </div>
                  <span>NT$ {{ roomInfo.price * dateDiff }}</span>
                </li>

                <li v-if="roomInfo.discountPrice" class="d-flex justify-content-between active mb-4 pb-4 border-bottom">
                  <span>住宿折扣</span>
                  <span class="text-primary">-NT$ {{ roomInfo.discountPrice || 0 }}</span>
                </li>

                <li class="d-flex justify-content-between active fw-bold">
                  <span>總價</span>
                  <span>NT$ {{ roomInfo.price * dateDiff - roomInfo.discountPrice }}</span>
                </li>
              </ul>
              <button class="btn btn-primary w-100" type="button" @click="submitOrder">
                確認訂房
              </button>
            </div>
          </div>
        </div>
      </ClientOnly>
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
definePageMeta({
  layout: 'h-bg-f'
})

import TheRoomsInfo from '@/components/rooms/TheRoomsInfo.vue'

// 取得所有房型
const { getRoomInfo, getAllRoomInfo } = useApi()
import type { SectionRoomInfoType } from '@/types/room'
// 所有房型下拉選單
let allRoomInfo: Array<SectionRoomInfoType> = []
await getAllRoomInfo({
  onResponse({ response }: { response: any }) {
    if (!response.status) {
      return
    }

    allRoomInfo = response._data.result.map(
      (item: any) => ({
        id: item._id,
        name: item.name,
        imageUrl: item.imageUrl,
        price: item.price,
        discountPrice: 1950,
        roomDetail: {
          amenityInfo: item.amenityInfo,
          facilityInfo: item.facilityInfo,
          areaInfo: item.areaInfo,
          bedInfo: item.bedInfo,
          maxPeople: item.maxPeople
        }
      })
    )

    console.log('allRoomInfo: ',allRoomInfo);
  },
  onResponseError({ error }: { error: any }) {
    console.log('error: ', error)
  }
})


import { useReserveRoomInfoStore } from '@/stores/room'
const reserveRoomInfo = useReserveRoomInfoStore();
const roomId = ref(reserveRoomInfo.roomId);
// 房型資料初始化
let roomInfo: SectionRoomInfoType = reactive(reserveRoomInfo.defaultRoomInfo)

// 預約資料
const formRefs = ref<HTMLFormElement | null>(null)
interface ReserveForm {
  roomId: string | string[];
  checkInDate: string;
  checkOutDate: string;
  peopleNum: number;
  userInfo: {
    address: {
      zipcode: string;
      detail: string;
    };
    name: string;
    phone: string;
    email: string;
  }
}
const form: ReserveForm = reactive({
  roomId,
  checkInDate: reserveRoomInfo.checkInDate,
  checkOutDate: reserveRoomInfo.checkOutDate,
  peopleNum: reserveRoomInfo.peopleNum,
  userInfo: {
    address: {
      zipcode: '',
      detail: ''
    },
    name: '',
    phone: '',
    email: ''
  }
})
// 生日參考: pages\signup.vue

// 篩選單個房型
watch(
  () => form.roomId,
  (val) => {
    if (!val) {
      console.log('reserveRoomInfo: ', reserveRoomInfo);
      // 離開時清空 pinia 持久
      // return
      navigateTo('/rooms')
    }
    console.log('form.roomId: ', val);
    roomInfo = allRoomInfo.filter(item => item.id === val)[0]
    console.log(roomInfo);
  },
  { immediate: true }
)

// 取得地址
const { cityTmpl } = useTmpl() // 縣市
interface District {
  district: string;
  zipcode: string;
}
let districtTmpl: Array<District> = reactive([])
interface Address {
  city: string;
  district: District;
}
const address: Address = reactive({
  city: '台北市',
  district: {
    district: '',
    zipcode: ''
  }
})

// 取得區域 & 郵遞區號
const { getTwzipcode } = useApi()
const { pending: gtPending, refresh: zcRefresh } = await getTwzipcode({
  query: computed(() => ({ city: address.city })),
  immediate: false,
  onResponse({ response }: { response: any }) {
    if (!response.status) {
      return;
    }

    // 針對縣市篩選出對應的區域
    const resultData = response._data.data.map(
      (item: Partial<{
          zip_code: string
          district: string
        }>
      ) => (
        {
          zipcode: item.zip_code,
          district: item.district
        }
      )
    )
    districtTmpl = resultData
    address.district = resultData[0]
    form.userInfo.address.zipcode = address.district.zipcode
  }
})
zcRefresh()
// sPending.value = false

watch(
  () => form.userInfo.address.zipcode,
  (zipcode) => {
    address.district = districtTmpl.filter(item => item.zipcode === zipcode)[0]
  }
)


const { $dayjs } = useNuxtApp()
// 轉換日期格式
function changeDateFormat(date: string) {
  return $dayjs(date).format('M 月 D 日 dddd')
}

// 計算入住天數
const dateDiff = computed(() => {
  const day = $dayjs(form.checkInDate).diff(form.checkOutDate, 'day')
  return day * -1;
})


// 送出訂單
function submitOrder() {
  console.log('submitOrder');
}
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
