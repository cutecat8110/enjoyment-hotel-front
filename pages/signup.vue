<template>
  <main class="login-wrapper">
    <div>
      <div class="text-primary fs-8 fs-md-7 fw-bold lh-lg ls-1 mb-2">享樂酒店，誠摯歡迎</div>

      <div class="text-light fs-3 fs-md-1 fw-bold lh-lg ls-1 mb-3">立即註冊</div>

      <div class="py-3 d-flex align-items-center gap-2">
        <div class="d-flex text-light flex-column align-items-center">
          <div class="bg-primary rounded-circle num-ball mb-1">
            <template v-if="status === 0">1</template>
            <template v-else>
              <Icon name="ic:baseline-check" />
            </template>
          </div>
          <div>輸入信箱及密碼</div>
        </div>

        <div :class="[status === 0 ? 'bg-primary-60' : 'bg-primary-40', 'flex-fill space-line']" />

        <div
          :class="[
            status === 0 ? 'text-primary-60' : 'text-light',
            'd-flex flex-column align-items-center'
          ]"
        >
          <div
            :class="[
              status === 0 ? 'border border-primary-60' : 'bg-primary',
              'rounded-circle num-ball mb-1'
            ]"
          >
            2
          </div>
          <div>填寫基本資料</div>
        </div>
      </div>
    </div>

    <div class="input-wrapper fs-8 fs-md-7">
      <template v-if="status === 0">
        <div>
          <label class="form-label" for="email">電子信箱</label>
          <input id="email" class="form-control" type="text" placeholder="hello@exsample.com" />
        </div>
        <div>
          <label class="form-label" for="password">密碼</label>
          <input id="password" class="form-control" type="password" placeholder="請輸入密碼" />
        </div>
        <div>
          <label class="form-label" for="confirmPassword">確認密碼</label>
          <input
            id="confirmPassword"
            class="form-control"
            type="password"
            placeholder="請再輸入一次密碼"
          />
        </div>
      </template>

      <template v-else>
        <div>
          <label class="form-label" for="name">姓名</label>
          <input id="name" class="form-control" type="text" placeholder="請輸入姓名" />
        </div>
        <div>
          <label class="form-label" for="phone">手機號碼</label>
          <input id="phone" class="form-control" type="text" placeholder="請輸入手機號碼" />
        </div>
        <div>
          <label class="form-label" for="birthday">生日</label>
          <div class="d-flex flex-row gap-2">
            <div class="dropdown flex-grow-1">
              <button
                class="btn btn-outline-primary btn-dropdown dropdown-toggle px-0 border-0 w-100"
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
                class="btn btn-outline-primary btn-dropdown dropdown-toggle px-0 border-0 w-100"
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
                class="btn btn-outline-primary btn-dropdown dropdown-toggle px-0 border-0 w-100"
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
        </div>
        <div>
          <label class="form-label" for="address">地址</label>
          <div class="d-flex flex-row gap-2 mb-3">
            <div class="dropdown flex-grow-1">
              <button
                class="btn btn-outline-primary btn-dropdown dropdown-toggle border-0 w-100"
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
                class="btn btn-outline-primary btn-dropdown dropdown-toggle border-0 w-100"
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
        </div>
        <label class="form-check-label text-light" for="remember">
          <input id="remember" class="form-check-input" type="checkbox" />
          我已閱讀並同意本網站個資使用規範
        </label>
      </template>
    </div>

    <div>
      <button class="btn btn-primary mb-3 w-100" type="button" @click="status = 1">
        {{ status === 0 ? '下一步' : '立即註冊' }}
      </button>
      <div class="d-flex">
        <div class="text-light me-2 fs-8 fs-md-7">已經有會員了嗎？</div>
        <NuxtLink class="btn btn-text text-primary fs-8 fs-md-7" to="/login">立即登入</NuxtLink>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'access'
})

const status = ref(0)
</script>

<style lang="scss" scoped>
@import url('@/assets/scss/site/login.scss');
.num-ball {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.space-line {
  height: 0.125rem;
}
</style>
