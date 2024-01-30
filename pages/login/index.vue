<template>
  <main class="login-wrapper">
    <div>
      <div class="text-primary fs-8 fs-md-7 fw-bold lh-lg ls-1 mb-2">享樂酒店，誠摯歡迎</div>
      <div class="text-light fs-3 fs-md-1 fw-bold lh-lg ls-1">立即開始旅程</div>
    </div>

    <VForm ref="formRefs" v-slot="{ errors }" @submit="submit">
      <div class="input-wrapper fs-8 fs-md-7 mb-5">
        <div>
          <label class="form-label" for="email">電子信箱</label>
          <VField
            id="email"
            v-model.trim="form.email"
            :class="[errors.email && 'verify-error', 'form-control']"
            name="email"
            label="電子信箱"
            type="email"
            placeholder="hello@exsample.com"
            rules="required|email"
            :disabled="apiPending"
          />
          <div class="text-danger fs-8 fw-bold mt-2">{{ errors.email }}</div>
        </div>

        <div>
          <label class="form-label" for="password">密碼</label>
          <VField
            id="password"
            v-model.trim="form.password"
            :class="[errors.password && 'verify-error', 'form-control']"
            name="password"
            label="密碼"
            type="password"
            placeholder="請輸入密碼"
            rules="required"
            :disabled="apiPending"
          />
          <div class="text-danger fs-8 fw-bold mt-2">{{ errors.password }}</div>
        </div>

        <div class="d-flex justify-content-between">
          <label class="form-check-label text-light" for="remember">
            <input
              id="remember"
              v-model="commonStore.remember"
              class="form-check-input"
              type="checkbox"
              :disabled="apiPending"
            />
            記住帳號
          </label>
          <button
            class="btn btn-text fs-8 fs-md-7"
            type="button"
            data-bs-target="#ModalForgot"
            data-bs-toggle="modal"
          >
            忘記密碼？
          </button>
          <ModalForgot />
        </div>
      </div>
      
      <button
        class="btn btn-primary mb-2 d-flex align-items-center gap-2"
        type="submit"
        :disabled="apiPending"
      >
        <template v-if="!apiPending">會員登入</template>
        <template v-else>
          登入中
          <Icon class="fs-5" name="eos-icons:three-dots-loading"></Icon>
        </template>
      </button>
    </VForm>

    <div class="d-flex">
      <div class="text-light me-2 fs-8 fs-md-7">沒有會員嗎？</div>
      <NuxtLink class="btn btn-text text-primary fs-8 fs-md-7" to="/signup">前往註冊</NuxtLink>
    </div>
  </main>
</template>

<script lang="ts" setup>
import ModalForgot from './components/ModalForgot.vue'

import { useCommonStore } from '@/stores/common'

/* layout */
definePageMeta({
  layout: 'h-logo-f-no'
})

/* 登入表單 */
const commonStore = useCommonStore()
const formRefs = ref<HTMLFormElement | null>(null)
const form = ref({
  email: commonStore.remember && commonStore.email ? commonStore.email : '',
  password: ''
})

/* 事件: 登入 */
const submit = () => {
  lRefresh()
}

/* API */
const { login } = useApi()
const apiPending = computed(() => lPending.value)
/* API: 登入 */
const { pending: lPending, refresh: lRefresh } = await login({
  body: computed(() => form.value),
  immediate: false,
  watch: false,
  onResponse({ response }: { response: any }) {
    if (response.status === 200) {
      commonStore.token = response._data.token
      commonStore.me = response._data.result
      commonStore.email = commonStore.remember ? form.value.email : ''

      navigateTo('/')
    }
  },
  onResponseError({ response }: { response: any }) {
    switch (response._data?.message) {
      case '此使用者不存在':
        formRefs.value?.setFieldError('email', '使用者不存在')
        break
      case '密碼錯誤':
      case '密碼需至少 8 碼以上':
      case '密碼不能只有英文':
      case '密碼不能只有數字':
      case '密碼需至少 8 碼以上，並英數混合':
        formRefs.value?.setFieldError('password', '密碼錯誤')
        break
      default:
        break
    }
  }
})
lPending.value = false
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
