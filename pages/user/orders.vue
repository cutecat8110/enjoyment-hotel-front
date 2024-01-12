<template>
  <main class="user-wrapper order-wrapper">
    <div class="card-wrapper trip-wrapper lh-lg ls-1 bg-white">
      <div>
        <div class="text-gray-80 mb-2">預訂參考編號： HH2302183151222</div>
        <div class="fs-5 fw-bold">即將來的行程</div>
      </div>
      <div class="rounded-3 overflow-hidden">
        <NuxtImg class="order-img" src="/img/room/Room_1.png" alt="Room_1" />
      </div>

      <div class="text-gray-80">
        <div class="fs-6 fw-bold mb-4">尊爵雙人房，1 晚 | 住宿人數：2 位</div>
        <div>
          <h5 class="room-info-title-border title-border-primary ps-3 mb-2 fs-7">
            入住：6 月 10 日星期二，15:00 可入住
          </h5>
          <h5 class="room-info-title-border title-border-gray ps-3 mb-2 fs-7 mb-4">
            退房：6 月 11 日星期三，12:00 前退房
          </h5>
        </div>
        <span>NT$ 10,000</span>
      </div>

      <div class="border-bottom"></div>

      <TheRoomsInfo :show-part="true" mb-space="4" />

      <div class="d-flex gap-3 check-wrapper">
        <button class="btn btn-outline-primary" type="button">取消預訂</button>
        <button class="btn btn-primary" type="button">查看詳情</button>
      </div>
    </div>

    <div class="card-wrapper history-wrapper lh-lg ls-1 bg-white">
      <h6 class="fs-md-5 card-title m-0 fw-bold">歷史訂單</h6>
      <div class="history-container">
        <div class="rounded-3 overflow-hidden">
          <NuxtImg class="history-img" src="/img/room/Room_1.png" alt="Room_1" />
        </div>
        <div class="history-content text-gray-80">
          <div>預訂參考編號： HH2302183151222</div>
          <div class="fs-6 fw-bold">尊爵雙人房</div>
          <div>
            <div class="mb-2">住宿天數： 1 晚</div>
            <div>住宿人數：2 位</div>
          </div>
          <div>
            <h5 class="room-info-title-border title-border-primary ps-3 mb-2 fs-7">
              入住：6 月 10 日星期二
            </h5>
            <h5 class="room-info-title-border title-border-gray ps-3 mb-2 fs-7">
              退房：6 月 11 日星期三
            </h5>
          </div>
          <span class="fw-bold">NT$10,000</span>
        </div>
      </div>
      <div class="border-bottom"></div>
      <div class="history-container">
        <div class="rounded-3 overflow-hidden">
          <NuxtImg class="history-img" src="/img/room/Room_1.png" alt="Room_1" />
        </div>
        <div class="history-content text-gray-80">
          <div>預訂參考編號： HH2302183151222</div>
          <div class="fs-6 fw-bold">尊爵雙人房</div>
          <div>
            <div class="mb-2">住宿天數： 1 晚</div>
            <div>住宿人數：2 位</div>
          </div>
          <div>
            <h5 class="room-info-title-border title-border-primary ps-3 mb-2 fs-7">
              入住：6 月 10 日星期二
            </h5>
            <h5 class="room-info-title-border title-border-gray ps-3 mb-2 fs-7">
              退房：6 月 11 日星期三
            </h5>
          </div>
          <span class="fw-bold">NT$10,000</span>
        </div>
      </div>
      <div class="border-bottom"></div>
      <div class="history-container">
        <div class="rounded-3 overflow-hidden">
          <NuxtImg class="history-img" src="/img/room/Room_1.png" alt="Room_1" />
        </div>
        <div class="history-content text-gray-80">
          <div>預訂參考編號： HH2302183151222</div>
          <div class="fs-6 fw-bold">尊爵雙人房</div>
          <div>
            <div class="mb-2">住宿天數： 1 晚</div>
            <div>住宿人數：2 位</div>
          </div>
          <div>
            <h5 class="room-info-title-border title-border-primary ps-3 mb-2 fs-7">
              入住：6 月 10 日星期二
            </h5>
            <h5 class="room-info-title-border title-border-gray ps-3 mb-2 fs-7">
              退房：6 月 11 日星期三
            </h5>
          </div>
          <span class="fw-bold">NT$10,000</span>
        </div>
      </div>
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
