<template>
  <div class="p-0 px-md-xl bg-primary-tint">
    <div class="container-xl border border-danger">
      <div class="d-flex align-items-center mb-5">
        <span class="material-icons me-2 fs-1">chevron_left</span>
        <button class="btn p-0 fs-3 fw-bold">確認訂房資訊</button>
      </div>
      <div class="row">
        <div class="col-md-7 mb-xl">
          <h4 class="fw-bold mb-5">訂房資訊</h4>
          <div class="pb-6 mb-6 border-bottom">
            <div class="row align-items-center mb-4">
              <div class="col-10">
                <div class="room-info-title-border ps-3 fw-bold mb-2">選擇房型</div>
                <div>尊爵雙人房</div>
              </div>
              <div class="col-2">
                <button class="btn btn-text text-dark fw-bold">編輯</button>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-10">
                <div class="room-info-title-border ps-3 fw-bold mb-2">房客人數</div>
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
            <li>
              <label class="form-label d-flex justify-content-between text-dark" for="default">
                地址
              </label>
              <div class="row">
                <div class="col-6 mb-3">
                  <select class="form-select -" aria-label="Default select example">
                    <option selected>請選擇縣市</option>
                    <option value="高雄市">高雄市</option>
                    <option value="台中市">台中市</option>
                    <option value="台北市">台北市</option>
                  </select>
                </div>
                <div class="col-6">
                  <select class="form-select -" aria-label="Default select example">
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

          <TheRoomsInfo mb-space="4" />
        </div>

        <div class="col-md-5 mb-5 mb-lg-0">
          <div class="bg-light rounded-4 p-5">
            <img src="" alt="圖片" />

            <h3 class="fs-4 fw-bold mb-4 mt-5">價格詳情</h3>
            <ul class="list-unstyled mb-5">
              <li class="d-flex justify-content-between active mb-3">
                <div>
                  <span>NT$ 10,000</span>×
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
            <NuxtLink to="/confirmation">
              <span class="btn btn-primary w-100">確認訂房</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheRoomsInfo from '@/components/rooms/TheRoomsInfo.vue'

definePageMeta({
  layout: 'page-info'
})
</script>

<style lang="scss" scoped></style>
