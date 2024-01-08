<template>
  <!-- <NuxtLink to="/user/orders">我的訂單</NuxtLink> -->
  <!-- TODO: vh-100 mt-xl pt-5 要拿掉 -->
  <div class="p-0 px-md-xl bg-dark vh-100 mt-xl pt-5 text-light">
    <div class="container-xl border border-danger">
      <div class="row">
        <div class="col-md-7 mb-xl">
          <div class="pb-xl mb-xl border-bottom border-light">
            <div class="d-flex align-items-center mb-5">
              <div
                class="done-icon d-flex justify-content-center align-items-center rounded-circle bg-success me-5"
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

          <div class="pb-xl mb-xl border-bottom border-light">
            <h3 class="fs-5 fw-bold ls-1 mb-5">立即查看您的訂單紀錄</h3>
            <button class="btn btn-primary px-6">繼續我的訂單</button>
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

        <div class="col-md-5 mb-5 mb-lg-0">
          <div class="bg-light rounded-4 p-5 text-dark">1231231</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.done-icon {
  width: 56px;
  height: 56px;
}
</style>
