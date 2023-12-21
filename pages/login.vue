<template>
  <div class="login-wrapper">
    <NuxtImg class="img-cover" src="/img/register.png" />
    <div class="login-content">
      <main>
        <div>
          <div>享樂酒店，誠摯歡迎</div>
          <h2>立即開始旅程</h2>
        </div>
        <div class="input-wrapper">
          <div>
            <label for="email">電子信箱</label>
            <input id="email" name="email" type="text" />
          </div>
          <div>
            <label for="email">電子信箱</label>
            <input id="email" name="email" type="text" />
          </div>
          <div class="d-flex justify-content-between">
            <div>
              <input id="remember" name="remember" type="checkbox" checked />
              <label for="remember">記住帳號</label>
            </div>
            <div>忘記密碼？</div>
          </div>
          <button type="button">會員登入</button>
          <div>
            沒有會員嗎？
            <NuxtLink to="/signup">前往註冊</NuxtLink>
          </div>
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
  .login-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
