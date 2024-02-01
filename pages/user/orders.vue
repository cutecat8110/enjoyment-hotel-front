<template>
  <main class="user-wrapper order-wrapper">
    <div
      v-if="Object.keys(currData).length !== 0"
      class="card-wrapper trip-wrapper lh-lg ls-1 bg-white"
    >
      <div>
        <div class="text-gray-80 mb-2">預訂參考編號： {{ currData._id }}</div>
        <div class="fs-5 fw-bold">即將來的行程</div>
      </div>
      <div class="rounded-3 overflow-hidden">
        <NuxtImg class="order-img" src="/img/room/Room_1.png" alt="Room_1" />
      </div>

      <div class="text-gray-80">
        <div class="fs-6 fw-bold mb-4">
          {{ currData.roomId.name }}，{{
            $dayjs(currData.checkOutDate).diff($dayjs(currData.checkInDate), 'd')
          }}
          晚 | 住宿人數：{{ currData.peopleNum }} 位
        </div>
        <div>
          <h5 class="room-info-title-border title-border-primary ps-3 mb-2 fs-7">
            入住：{{
              $dayjs(currData.checkInDate).format('M 月 D日') +
              '星期' +
              weekTmpl[$dayjs(currData.checkInDate).day()]
            }}，15:00 可入住
          </h5>
          <h5 class="room-info-title-border title-border-gray ps-3 mb-2 fs-7 mb-4">
            退房：{{
              $dayjs(currData.checkOutDate).format('M 月 D日') +
              '星期' +
              weekTmpl[$dayjs(currData.checkOutDate).day()]
            }}，12:00 前退房
          </h5>
        </div>
        <span>
          NT${{
            currData.roomId.price.toLocaleString('zh-TW', {
              currency: 'TWD',
              style: 'decimal'
            })
          }}
        </span>
      </div>

      <div class="border-bottom"></div>
      <TheRoomsInfo :room-detail="currData.roomDetail" mb-space="4" />

      <div class="d-flex gap-3 check-wrapper">
        <button class="btn btn-outline-primary" type="button" @click="deleteOrder()">
          取消預訂
        </button>

        <NuxtLink class="btn btn-primary" :to="`/room/${currData.roomId._id}`">查看詳情</NuxtLink>
      </div>
    </div>

    <div class="card-wrapper history-wrapper lh-lg ls-1 bg-white">
      <h6 class="fs-md-5 card-title m-0 fw-bold">歷史訂單</h6>
      <template v-for="list in data">
        <div class="history-container">
          <div class="rounded-3 overflow-hidden">
            <NuxtImg class="history-img" :src="list.roomId.imageUrl" alt="Room_1" />
          </div>
          <div class="history-content text-gray-80">
            <div>預訂參考編號： {{ list._id }}</div>
            <div class="fs-6 fw-bold">{{ list.roomId.name }}</div>
            <div>
              <div class="mb-2">
                住宿天數：{{ $dayjs(list.checkOutDate).diff($dayjs(list.checkInDate), 'd') }}
                晚
              </div>
              <div>住宿人數：{{ list.peopleNum }} 位</div>
            </div>
            <div>
              <h5 class="room-info-title-border title-border-primary ps-3 mb-2 fs-7">
                入住：{{
                  $dayjs(list.checkInDate).format('M 月 D日') +
                  '星期' +
                  weekTmpl[$dayjs(list.checkInDate).day()]
                }}
              </h5>
              <h5 class="room-info-title-border title-border-gray ps-3 mb-2 fs-7">
                退房：{{
                  $dayjs(list.checkOutDate).format('M 月 D日') +
                  '星期' +
                  weekTmpl[$dayjs(list.checkOutDate).day()]
                }}
              </h5>
            </div>
            <span class="fw-bold">NT${{ list.roomId.price }}</span>
          </div>
        </div>
        <div class="border-bottom"></div>
      </template>

      <button class="btn btn-outline-primary" type="button">
        查看更多
        <Icon name="ic:round-keyboard-arrow-down" />
      </button>
    </div>
  </main>
</template>

<script lang="ts" setup>
import TheRoomsInfo from '@/components/rooms/TheRoomsInfo.vue'

definePageMeta({
  layout: 'h-bg-f-spl'
})

type FacilityInfo = {
  title: string
  isProvide: boolean
}

type AmenityInfo = {
  title: string
  isProvide: boolean
}

type RoomInfo = {
  _id: string
  name: string
  description: string
  imageUrl: string
  imageUrlList: string[]
  areaInfo: string
  bedInfo: string
  maxPeople: number
  price: number
  status: number
  facilityInfo: FacilityInfo[]
  amenityInfo: AmenityInfo[]
  createdAt: string
  updatedAt: string
}

type Address = {
  zipcode: number
  detail: string
}

type UserInfo = {
  address: Address
  name: string
  phone: string
  email: string
}

type Reservation = {
  userInfo: UserInfo
  _id: string
  roomId: RoomInfo
  checkInDate: string
  checkOutDate: string
  peopleNum: number
  orderUserId: string
  status: number
  createdAt: string
  updatedAt: string
}

const currData = ref<Reservation | any>({})
const data = ref<Reservation[]>([])

const weekTmpl = ref(['日', '一', '二', '三', '四', '五', '六'])

/* API */
const { getOrdersApi, deleteOrdersApi } = useApi()
const apiPending = computed(() => goPending.value)
/* API: 取得訂單資料 */
const { pending: goPending, refresh: goRefresh } = await getOrdersApi({
  immediate: false,
  watch: false,
  onResponse({ response }: { response: any }) {
    console.log(response._data.result)
    if (response.status === 200) {
      data.value = response._data.result
      const temp = response._data.result[0]
      const { amenityInfo, facilityInfo, areaInfo, bedInfo, maxPeople } =
        response._data.result[0].roomId
      temp.roomDetail = { amenityInfo, facilityInfo, areaInfo, bedInfo, maxPeople }
      currData.value = temp
    }
  }
})
goPending.value = false
goRefresh()
/* API: 刪除訂單資料 */
const deleteOrder = async () => {
  const orderId = computed(() => currData.value._id)
  await deleteOrdersApi(orderId, {
    onResponse({ response }: { response: any }) {
      console.log(response._data.result)
      if (response.status === 200) {
        console.log(response)
        goRefresh()
      }
    }
  })
}
</script>

<style lang="scss" scoped>
@import url('@/assets/scss/site/user.scss');

.order-wrapper {
  .order-img {
    height: 15rem;
    width: 100%;
    object-position: bottom;
  }
  .check-wrapper {
    .btn {
      flex: 1;
    }
  }
  .trip-wrapper {
    flex: 7;
  }
  .history-wrapper {
    flex: 5;
  }

  .history-container {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .history-img {
    width: 7.5rem;
    height: 5rem;
  }
  .history-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
