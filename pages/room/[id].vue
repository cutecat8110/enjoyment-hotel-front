<template>
  <!-- ID: 65a6a24a4833c79e5f489517 -->
  <div class="p-0 px-lg-xl bg-primary-tint">
    <!-- 房型照片 -->
    <div class="pt-0 py-md-5 py-lg-xl mb-5">
      <div class="position-relative">
        <!-- 平板、電腦 -->
        <div class="row d-none d-md-flex px-3">
          <div class="col-6 pe-0">
            <div class="rounded-end-0 rounded-4 overflow-hidden" style="max-height: 100%;">
              <div class="ratio ratio-4x3">
                <NuxtImg class="w-auto h-100 position-absolute top-50 start-50 translate-middle" :src="roomInfo.imageUrl" :alt="`${roomInfo.name}_0`" />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="w-100 h-auto rounded-start-0 rounded-4 overflow-hidden">
              <div class="row align-content-between h-100">
                <div
                  v-for="(image, idx) in [ ...roomInfo.imageUrlList.slice(0, 4) ]"
                  :key="`${idx}_${image}`"
                  class="col-6 ps-0"
                  :class="{ 'mb-2': idx < 2 }"
                >
                  <div class="ratio ratio-4x3 overflow-hidden">
                    <NuxtImg class="w-auto h-100 position-absolute top-50 start-50 translate-middle" :src="image" :alt="`${roomInfo.name}_${idx + 1}`" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 手機 -->
        <div class="d-flex d-md-none">
          <div id="banner_img" class="carousel slide w-100" data-bs-ride="carousel">
            <div class="carousel-indicators ms-3">
              <button
                v-for="(image, idx) in [roomInfo.imageUrl, ...roomInfo.imageUrlList]"
                :key="`${idx}_${image}`"
                :class="`${idx === 0 ? 'active' : ''}`"
                type="button"
                :aria-current="`${idx === 0}`"
                :aria-label="`Slide ${idx + 1}`"
                :data-bs-slide-to="`${idx}`"
                data-bs-target="#banner_img"
              />
            </div>
            <div class="carousel-inner">
              <div
                v-for="(image, idx) in [roomInfo.imageUrl, ...roomInfo.imageUrlList]"
                :key="`${idx}_${image}`"
                class="carousel-item"
                :class="{ 'active' : idx === 0 }"
                data-bs-interval="5000"
              >
                <div class="ratio ratio-16x9">
                  <NuxtImg class="w-100 h-auto position-absolute top-50 start-50 translate-middle" :src="image" :alt="`${roomInfo.name}_${idx}`" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="btn btn-outline-primary btn-more position-absolute z-1">看更多</button>
      </div>
    </div>

    <div class="container-xl">
      <div class="row">
        <div class="col-md-7">
          <h2 class="text-primary h1 fw-bold mb-3">{{ roomInfo.name }}</h2>
          <p class="text-gray-80 mb-4 mb-lg-xl">
            {{ roomInfo.description }}
          </p>

          <TheRoomsInfo :room-detail="roomDetail" mb-space="xl" />
        </div>

        <div class="col-md-5 mb-4 mb-lg-0">
          <div class="bg-light rounded-4 p-4 p-lg-5">
            <h4 class="s-5 fw-bold pb-3 border-bottom mb-4 mb-lg-5">預訂房型</h4>

            <h3 class="fs-2 text-gray-80 fw-bold mb-2">{{ roomInfo.name }}</h3>
            <p class="text-gray-80 mb-4 mb-lg-5">
              {{ roomInfo.description }}
            </p>
            <span class="d-block text-primary fs-5 fw-bold mb-4 mb-5">
              NT$ {{ roomInfo.price }}
            </span>
            <NuxtLink :to="`/reserve/${roomId}`">
              <span class="btn btn-primary w-100">立即預訂</span>
            </NuxtLink>
          </div>
        </div>

        <div class="col-12">
          <h5 class="room-info-title-border title-border-primary fw-bold fs-5 ps-3 mb-3 mb-lg-4">
            訂房須知
          </h5>
          <ol class="pb-5 mb-lg-xl text-gray-80">
            <li>入住時間為下午3點，退房時間為上午12點。</li>
            <li>如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。</li>
            <li>請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。</li>
            <li>若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。</li>
            <li>請愛惜我們的房間與公共空間，並保持整潔。</li>
            <li>如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。</li>
            <li>我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。</li>
            <li>請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。</li>
            <li>我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。</li>
            <li>為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheRoomsInfo from '@/components/rooms/TheRoomsInfo.vue'

definePageMeta({
  layout: 'h-bg-f'
})

// 取得 route id
const route = useRoute()
const roomId = route.params.id || ''

// 房型資訊
interface RoomInfo {
  id: string
  name: string
  imageUrl: string
  imageUrlList: Array<string>
  description: string
  price: number
}
let roomInfo: RoomInfo = reactive({
  id: '',
  name: '',
  imageUrl: '',
  imageUrlList: [],
  description: '',
  price: 0
})

// 房型細節
interface InfoItem {
  isProvide: Boolean
  title: string
}
interface RoomDetail {
  amenityInfo: Array<InfoItem> // 備品
  facilityInfo: Array<InfoItem> // 房內設備
  areaInfo: string // 坪數
  bedInfo: string // 床型
  maxPeople: number // 人數
}
let roomDetail: RoomDetail = {
  amenityInfo: [], // 備品
  facilityInfo: [], // 房內設備
  areaInfo: '', // 坪數
  bedInfo: '', // 床型
  maxPeople: 0 // 人數
}

/* API */
// id: 65a77277d044dc8f856c0a52
const { getRoomInfo } = useApi()
const apiPending = computed(() => lPending.value)
const { pending: lPending } = await getRoomInfo(roomId, {
  onResponse({ response }: { response: any }) {
    if (!response.status) {
      return
    }
    console.log('res: ', response)
    const resData = response._data.result
    roomInfo = resData
    roomDetail = {
      amenityInfo: resData.amenityInfo, // 備品
      facilityInfo: resData.facilityInfo, // 房內設備
      areaInfo: resData.areaInfo, // 坪數
      bedInfo: resData.bedInfo, // 床型
      maxPeople: resData.maxPeople
    }
    console.log('roomInfo: ', roomInfo)
  },
  onResponseError({ response }: { response: any }) {
    console.log('error: ', response)
  }
})
</script>

<style lang="scss" scoped>
.btn-more {
  right: 40px;
  bottom: 40px;

  @include md {
    right: 13px;
    bottom: 23px;
  }
}

.carousel-indicators {
  right: inherit;

  & .active {
    width: 60px;
    background-color: $primary;
  }
}
</style>
