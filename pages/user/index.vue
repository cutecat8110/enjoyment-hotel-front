<template>
  <main class="user-wrapper">
    <div class="card-wrapper lh-lg ls-1 bg-white">
      <h6 class="fs-md-5 card-title m-0 fw-bold">修改密碼</h6>
      <ul class="card-content list-unstyled">
        <li>
          <div class="mb-2 text-gray-80">電子信箱</div>
          <div class="fw-bold">Jessica@exsample.com</div>
        </li>
        <li v-if="!data.password.tool" class="d-flex align-items-center gap-3">
          <div>
            <div class="mb-2 text-gray-80">電子信箱</div>
            <div class="fw-bold ellipse-list">
              <Icon v-for="(_, index) in 10" :key="index" class="ellipse" name="ion:ellipse" />
            </div>
          </div>
          <button class="btn btn-text ms-auto" type="button" @click="data.password.tool = true">
            重設
          </button>
        </li>
        <template v-else>
          <li>
            <label class="form-label" for="old-password">密碼</label>
            <input
              id="old-password"
              class="form-control"
              type="password"
              placeholder="請輸入舊密碼"
            />
          </li>
          <li>
            <label class="form-label" for="new-password">新密碼</label>
            <input
              id="new-password"
              class="form-control"
              type="password"
              placeholder="請輸入新密碼"
            />
          </li>
          <li>
            <label class="form-label" for="check-new-password">確認新密碼</label>
            <input
              id="check-new-password"
              class="form-control"
              type="password"
              placeholder="請再輸入一次新密碼"
            />
          </li>
        </template>
      </ul>
      <button v-if="data.password.tool" class="btn btn-primary" @click="data.password.tool = false">
        儲存設定
      </button>
    </div>

    <div class="card-wrapper lh-lg ls-1 bg-white">
      <h6 class="fs-md-5 card-title m-0 fw-bold">基本資料</h6>
      <ul class="card-content list-unstyled">
        <template v-if="!data.info.tool">
          <li>
            <div class="mb-2 text-gray-80">姓名</div>
            <div class="fw-bold">Jessica Ｗang</div>
          </li>
          <li>
            <div class="mb-2 text-gray-80">手機號碼</div>
            <div class="fw-bold">+886 912 345 678</div>
          </li>
          <li>
            <div class="mb-2 text-gray-80">生日</div>
            <div class="fw-bold">1990 年 8 月 15 日</div>
          </li>
          <li>
            <div class="mb-2 text-gray-80">地址</div>
            <div class="fw-bold">高雄市新興區六角路 123 號</div>
          </li>
        </template>
        <template v-else>
          <li>
            <label class="form-label" for="name">姓名</label>
            <input id="name" class="form-control" type="text" placeholder="請輸入姓名" />
          </li>
          <li>
            <label class="form-label" for="phone">手機號碼</label>
            <input id="phone" class="form-control" type="text" placeholder="請輸入手機號碼" />
          </li>
          <li>
            <label class="form-label" for="birthday">生日</label>
            <div class="d-flex flex-row gap-2">
              <div class="dropdown flex-grow-1">
                <button
                  class="btn btn-outline-primary btn-dropdown dropdown-toggle px-0 border-gray-40 w-100"
                  type="button"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                  data-bs-toggle="dropdown"
                >
                  1990 年
                </button>
                <ul class="dropdown-menu px-0">
                  <li><a class="dropdown-item active" href="#">1990 年</a></li>
                </ul>
              </div>
              <div class="dropdown flex-grow-1">
                <button
                  class="btn btn-outline-primary btn-dropdown dropdown-toggle px-0 border-gray-40 w-100"
                  type="button"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                  data-bs-toggle="dropdown"
                >
                  8 月
                </button>
                <ul class="dropdown-menu px-0">
                  <li><a class="dropdown-item active" href="#">8 月</a></li>
                </ul>
              </div>
              <div class="dropdown flex-grow-1">
                <button
                  class="btn btn-outline-primary btn-dropdown dropdown-toggle px-0 border-gray-40 w-100"
                  type="button"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                  data-bs-toggle="dropdown"
                >
                  15 日
                </button>
                <ul class="dropdown-menu px-0">
                  <li><a class="dropdown-item active" href="#">15 日</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <label class="form-label" for="address">地址</label>
            <div class="d-flex flex-row gap-2 mb-3">
              <div class="dropdown flex-grow-1">
                <button
                  class="btn btn-outline-primary btn-dropdown dropdown-toggle border-gray-40 w-100"
                  type="button"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                  data-bs-toggle="dropdown"
                >
                  高雄市
                </button>
                <ul class="dropdown-menu px-0">
                  <li><a class="dropdown-item active" href="#">高雄市</a></li>
                </ul>
              </div>
              <div class="dropdown flex-grow-1">
                <button
                  class="btn btn-outline-primary btn-dropdown dropdown-toggle border-gray-40 w-100"
                  type="button"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                  data-bs-toggle="dropdown"
                >
                  新興區
                </button>
                <ul class="dropdown-menu px-0">
                  <li><a class="dropdown-item active" href="#">新興區</a></li>
                </ul>
              </div>
            </div>
            <input id="address" class="form-control" type="text" placeholder="請輸入詳細地址" />
          </li>
        </template>
      </ul>
      <div v-if="!data.info.tool" class="d-flex">
        <button class="btn btn-outline-primary" type="button" @click="data.info.tool = true">
          編輯
        </button>
      </div>
      <button v-else class="btn btn-primary" @click="data.info.tool = false">儲存設定</button>
    </div>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'h-bg-f-spl'
})
const data = ref({
  password: {
    tool: false
  },
  info: {
    tool: false
  }
})
</script>

<style lang="scss" scoped>
@import url('@/assets/scss/site/user.scss');
</style>
