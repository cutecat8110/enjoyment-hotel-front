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
          <div class="fs-8 fs-md-7">輸入信箱及密碼</div>
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
          <div class="fs-8 fs-md-7">填寫基本資料</div>
        </div>
      </div>
    </div>

    <VForm ref="formRefs" v-slot="{ errors }" @submit="submit">
      <div class="input-wrapper fs-8 fs-md-7 mb-5">
        <template v-if="status === 0">
          <div>
            <label class="form-label" for="email">電子信箱</label>
            <VField
              id="email"
              v-model.trim="form1.email"
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
              v-model.trim="form1.password"
              :class="[errors.password && 'verify-error', 'form-control']"
              name="password"
              label="密碼"
              type="password"
              placeholder="請輸入密碼"
              :rules="rules.password"
              :disabled="apiPending"
            />
            <div class="text-danger fs-8 fw-bold mt-2">{{ errors.password }}</div>
          </div>
          <div>
            <label class="form-label" for="confirmPassword">密碼</label>
            <VField
              id="confirmPassword"
              v-model.trim="form1.confirmPassword"
              :class="[errors.confirmPassword && 'verify-error', 'form-control']"
              name="confirmPassword"
              label="密碼"
              type="password"
              placeholder="請再輸入一次密碼"
              rules="required|confirmed:@password"
              :disabled="apiPending"
            />
            <div class="text-danger fs-8 fw-bold mt-2">{{ errors.confirmPassword }}</div>
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
          </div>
          <div>
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
          </div>
          <label class="form-check-label text-light" for="remember">
            <input id="remember" class="form-check-input" type="checkbox" />
            我已閱讀並同意本網站個資使用規範
          </label>
        </template>
      </div>

      <div>
        <button class="btn btn-primary mb-3 w-100" type="submit" @click="submit">
          {{ status === 0 ? '下一步' : '立即註冊' }}
        </button>
        <div class="d-flex">
          <div class="text-light me-2 fs-8 fs-md-7">已經有會員了嗎？</div>
          <NuxtLink class="btn btn-text text-primary fs-8 fs-md-7" to="/login">立即登入</NuxtLink>
        </div>
      </div>
    </VForm>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'h-logo-f-no'
})

const status = ref(0)

/* 註冊表單 */
const formRefs = ref<HTMLFormElement | null>(null)
const form1 = reactive({
  email: 'test@gmail.com',
  password: 'test123456',
  confirmPassword: 'test123456'
})

const form2 = reactive({
  name: '',
  phone: '',
  birthday: '',
  address: {
    zipcode: 0,
    detail: ''
  }
})

/* 輸入規則 */
const { $validator } = useNuxtApp()
const rules = {
  password: (val: string) => {
    if (!val) {
      return '密碼 為必填'
    }
    if (!$validator.isLength(val, { min: 8 })) {
      return '密碼需至少 8 碼以上'
    }
    if ($validator.isAlpha(val)) {
      return '密碼不能只有英文'
    }
    if ($validator.isNumeric(val)) {
      return '密碼不能只有數字'
    }
    if (!$validator.isAlphanumeric(val)) {
      return '密碼需至少 8 碼以上，並英數混合'
    }
    return {}
  }
}

/* 登入 */
const submit = () => {
  formRefs.value?.validate().then((res: any) => {
    console.log(res)
  })
  // sRefresh()
}

/* API */
const { signup } = useApi()
const apiPending = computed(() => sPending.value)
const { pending: sPending, refresh: sRefresh } = await signup({
  body: computed(() => ({
    ...form1,
    ...form2
  }))
})
</script>

<style lang="scss" scoped>
@import url('@/assets/scss/site/login.scss');

.num-ball {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
}

.space-line {
  height: 0.125rem;
}
</style>
