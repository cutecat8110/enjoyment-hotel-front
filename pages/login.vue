<template>
  <main class="login-wrapper">
    <div>
      <div class="text-primary fs-8 fs-md-7 fw-bold lh-lg ls-1 mb-2">享樂酒店，誠摯歡迎</div>
      <div class="text-light fs-3 fs-md-1 fw-bold lh-lg ls-1">立即開始旅程</div>
    </div>

    <div class="input-wrapper fs-8 fs-md-7">
      <div>
        <label class="form-label" for="email">電子信箱</label>
        <input id="text" class="form-control" type="email" placeholder="hello@exsample.com" />
      </div>
      <div>
        <label class="form-label" for="password">密碼</label>
        <input id="password" class="form-control" type="password" placeholder="請輸入密碼" />
      </div>
      <div class="d-flex justify-content-between">
        <label class="form-check-label text-light" for="remember">
          <input id="remember" class="form-check-input" type="checkbox" />
          記住帳號
        </label>
        <button class="btn btn-text fs-8 fs-md-7">忘記密碼？</button>
      </div>
    </div>

    <button class="btn btn-primary mb-2" type="button" @click="login">會員登入</button>

    <div class="d-flex">
      <div class="text-light me-2 fs-8 fs-md-7">沒有會員嗎？</div>
      <NuxtLink class="btn btn-text text-primary fs-8 fs-md-7" to="/signup">前往註冊</NuxtLink>
    </div>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'no-footer'
})

const login = () => {
  navigateTo('/user')
}
</script>

<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
  max-width: 28.5rem;
  padding: 1.25rem;

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
