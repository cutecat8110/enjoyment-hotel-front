<template>
  <div class="login-wrapper bg-background">
    <NuxtImg class="img-cover d-none d-md-block" src="/img/register.png" />
    <div class="login-content">
      <main>
        <div>
          <div class="text-primary fs-7 fw-bold lh-lg ls-1 mb-2">享樂酒店，誠摯歡迎</div>
          <div class="text-light fs-1 fs-md-3 fw-bold lh-lg ls-1">立即開始旅程</div>
        </div>
        <div class="input-wrapper">
          <div>
            <label class="form-label" for="email"> 電子信箱 </label>
            <input id="text" class="form-control" type="email" placeholder="hello@exsample.com" />
          </div>
          <div>
            <label class="form-label" for="password"> 密碼 </label>
            <input id="password" class="form-control" type="password" placeholder="請輸入密碼" />
          </div>
          <div class="d-flex justify-content-between">
            <label class="form-check-label text-light" for="remember">
              <input id="remember" class="form-check-input" type="checkbox" />
              記住帳號
            </label>
            <button class="btn btn-text">忘記密碼？</button>
          </div>
        </div>
        <button class="btn btn-primary" type="button">會員登入</button>

        <div class="d-flex">
          <div class="text-light me-2">沒有會員嗎？</div>
          <NuxtLink class="btn btn-text text-primary" to="/signup">前往註冊</NuxtLink>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'no-footer'
})
</script>

<style lang="scss" scoped>
.login-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 100vh;

  @include md {
    grid-template-columns: 1fr;
  }
  .login-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  main {
    max-width: 26rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 1.25rem;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
