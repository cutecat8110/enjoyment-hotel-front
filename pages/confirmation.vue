<template>
  <div class="p-0 px-md-xl text-light py-lg-xl">
    <div class="container-xl py-5">
      <div class="row">
        <div class="col-md-6 mb-6 mb-lg-xl">
          <div class="pb-5 pb-lg-xl mb-5 mb-lg-xl border-bottom border-light">
            <div class="d-lg-flex align-items-center mb-5">
              <div
                class="done-icon d-flex justify-content-center align-items-center rounded-circle bg-success me-5 mb-3 mb-lg-0"
              >
                <Icon class="fs-5 fw-blod" name="ic:round-check" />
              </div>
              <div class="fs-1 fw-bold">
                <p class="mb-2 ls-1">恭喜，Jessica！</p>
                <p class="ls-1">您已預訂成功</p>
              </div>
            </div>
            <span>
              我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。
            </span>
          </div>

          <div class="pb-5 pb-lg-xl mb-5 mb-lg-xl border-bottom border-light">
            <h3 class="fs-5 fw-bold ls-1 mb-4 mb-lg-5">立即查看您的訂單紀錄</h3>
            <NuxtLink class="btn btn-primary px-6" to="/user/orders">繼續我的訂單</NuxtLink>
          </div>

          <div>
            <h3 class="fs-5 fw-bold ls-1 mb-5">訂房人資訊</h3>

            <ul class="list-unstyled">
              <li class="mb-4">
                <div class="mb-2">姓名</div>
                <div>Jessica Ｗang</div>
              </li>
              <li class="mb-4">
                <div class="mb-2">手機號碼</div>
                <div>+886 912 345 678</div>
              </li>
              <li>
                <div class="mb-2">電子信箱</div>
                <div>jessica@sample.com</div>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-6 mb-5 mb-lg-0">
          <div class="bg-light rounded-4 p-3 p-lg-5 text-dark">
            <div class="text-gray-80 mb-2">預訂參考編號： HH2302183151222</div>
            <div class="fs-5 fw-bold mb-4 mb-lg-5">即將來的行程</div>
            <div class="rounded-3 overflow-hidden mb-4 mb-lg-5">
              <NuxtImg class="w-100 h-auto" src="/img/room/Room_1.png" alt="Room_1" />
            </div>

            <div class="text-gray-80 pb-4 pb-lg-5 mb-4 mb-lg-5 border-bottom">
              <div class="fs-6 fw-bold mb-4 mb-lg-5">尊爵雙人房，1 晚 | 住宿人數：2 位</div>
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

            <!-- <TheRoomsInfo :show-part="true" mb-space="4" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheRoomsInfo from '@/components/rooms/TheRoomsInfo.vue'
// 訂單 id 65b1db2d2013bfaa3219e590

definePageMeta({
  layout: 'h-logo-f-spl'
})
</script>

<style lang="scss" scoped>
.done-icon {
  width: 56px;
  height: 56px;
}
</style>
