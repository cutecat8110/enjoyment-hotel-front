<template>
  <main class="login-wrapper">
    <div>
      <div class="text-primary fs-8 fs-md-7 fw-bold lh-lg ls-1 mb-2">享樂酒店，誠摯歡迎</div>

      <div class="text-light fs-3 fs-md-1 fw-bold lh-lg ls-1 mb-3">立即註冊</div>

      <div class="py-3 d-flex align-items-center gap-2">
        <div class="d-flex text-light flex-column align-items-center">
          <div class="bg-primary rounded-circle num-ball mb-1">
            <template v-if="formStatus === 0">1</template>
            <template v-else>
              <Icon name="ic:baseline-check" />
            </template>
          </div>
          <div class="fs-8 fs-md-7">輸入信箱及密碼</div>
        </div>

        <div
          :class="[formStatus === 0 ? 'bg-primary-60' : 'bg-primary-40', 'flex-fill space-line']"
        />

        <div
          :class="[
            formStatus === 0 ? 'text-primary-60' : 'text-light',
            'd-flex flex-column align-items-center'
          ]"
        >
          <div
            :class="[
              formStatus === 0 ? 'border border-primary-60' : 'bg-primary',
              'rounded-circle num-ball mb-1'
            ]"
          >
            2
          </div>
          <div class="fs-8 fs-md-7">填寫基本資料</div>
        </div>
      </div>
    </div>

    <ClientOnly>
      <VForm
        v-if="formStatus === 0"
        :ref="(el) => (formRefs[0] = el as HTMLFormElement)"
        v-slot="{ errors }"
        @submit="submit(0)"
      >
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
              :rules="rules.password"
              :disabled="apiPending"
            />
            <div class="text-danger fs-8 fw-bold mt-2">{{ errors.password }}</div>
          </div>
          <div>
            <label class="form-label" for="confirm">密碼</label>
            <VField
              id="confirm"
              v-model.trim="form.confirm"
              :class="[errors.confirm && 'verify-error', 'form-control']"
              name="confirm"
              label="密碼"
              type="password"
              placeholder="請再輸入一次密碼"
              rules="required|confirmed:@password"
              :disabled="apiPending"
            />
            <div class="text-danger fs-8 fw-bold mt-2">{{ errors.confirm }}</div>
          </div>
        </div>

        <div>
          <button class="btn btn-primary mb-3 w-100" type="submit">下一步</button>
          <div class="d-flex">
            <div class="text-light me-2 fs-8 fs-md-7">已經有會員了嗎？</div>
            <NuxtLink class="btn btn-text text-primary fs-8 fs-md-7" to="/login">立即登入</NuxtLink>
          </div>
        </div>
      </VForm>

      <VForm
        v-else
        :ref="(el) => (formRefs[1] = el as HTMLFormElement)"
        v-slot="{ errors }"
        @submit="submit(1)"
      >
        <div class="input-wrapper fs-8 fs-md-7 mb-5">
          <!-- 姓名 -->
          <div>
            <label class="form-label" for="name">姓名</label>
            <VField
              id="name"
              v-model.trim="form.name"
              :class="[errors.name && 'verify-error', 'form-control']"
              name="name"
              label="姓名"
              type="text"
              placeholder="請輸入姓名"
              rules="required|min:2"
              :disabled="apiPending"
            />
            <div class="text-danger fs-8 fw-bold mt-2">{{ errors.name }}</div>
          </div>
          <!-- 手機 -->
          <div>
            <label class="form-label" for="phone">手機號碼</label>
            <VField
              id="phone"
              v-model.trim="form.phone"
              :class="[errors.phone && 'verify-error', 'form-control']"
              name="phone"
              label="手機號碼"
              type="text"
              placeholder="請輸入手機號碼"
              rules="required"
              :disabled="apiPending"
            />
            <div class="text-danger fs-8 fw-bold mt-2">{{ errors.phone }}</div>
          </div>
          <!-- 生日 -->
          <div>
            <label class="form-label" for="birthday">生日</label>
            <div class="d-flex flex-row gap-2">
              <VField
                v-model="birthday.Y"
                class="select flex-grow-1"
                name="birthdayY"
                as="select"
                rules="required"
                :disabled="apiPending"
              >
                <option
                  v-for="(item, index) in Array.from(
                    { length: 100 },
                    (_, i) => Number(birthday.Y) - i
                  )"
                  :key="index"
                  :value="item"
                >
                  {{ item }} 年
                </option>
              </VField>
              <VField
                v-model="birthday.M"
                class="select flex-grow-1"
                name="birthdayM"
                as="select"
                rules="required"
                :disabled="apiPending"
              >
                <option
                  v-for="(item, index) in Array.from({ length: 12 }, (_, i) => i + 1)"
                  :key="index"
                  :value="item"
                >
                  {{ item }} 月
                </option>
              </VField>
              <VField
                v-model="birthday.D"
                class="select flex-grow-1"
                name="birthdayD"
                as="select"
                rules="required"
                :disabled="apiPending"
              >
                <option
                  v-for="(item, index) in Array.from({ length: daysInMonth }, (_, i) => i + 1)"
                  :key="index"
                  :value="item"
                >
                  {{ item }} 日
                </option>
              </VField>
            </div>
            <div class="text-danger fs-8 fw-bold mt-2">{{ errors.birthday }}</div>
          </div>
          <!-- 地址 -->
          <div>
            <label class="form-label" for="address">地址</label>
            <div class="d-flex flex-row gap-2 mb-3">
              <VField
                v-model="address.city"
                class="select flex-grow-1"
                name="addressCity"
                as="select"
                rules="required"
                :disabled="apiPending"
              >
                <option v-for="(item, index) in cityTmpl" :key="index" :value="item">
                  {{ item }}
                </option>
              </VField>
              <VField
                v-model="address.district"
                class="select flex-grow-1"
                name="addressDistrict"
                as="select"
                rules="required"
                :disabled="apiPending"
              >
                <option
                  v-for="(district, index) in districtTmpl"
                  :key="index"
                  :value="district.district"
                >
                  {{ district.district }}
                </option>
              </VField>
            </div>
            <input id="address" class="form-control" type="text" placeholder="請輸入詳細地址" />
          </div>
          <label class="form-check-label text-light" for="remember">
            <input id="remember" class="form-check-input" type="checkbox" />
            我已閱讀並同意本網站個資使用規範
          </label>
        </div>

        <div>
          <button class="btn btn-primary mb-3 w-100" type="submit">立即註冊</button>
          <div class="d-flex">
            <div class="text-light me-2 fs-8 fs-md-7">已經有會員了嗎？</div>
            <NuxtLink class="btn btn-text text-primary fs-8 fs-md-7" to="/login">立即登入</NuxtLink>
          </div>
        </div>
      </VForm>
    </ClientOnly>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'h-logo-f-no'
})

/* 生日 */
const { $dayjs } = useNuxtApp()
const birthday = reactive({
  Y: $dayjs().format('YYYY-M-D').split('-')[0],
  M: $dayjs().format('YYYY-M-D').split('-')[1],
  D: $dayjs().format('YYYY-M-D').split('-')[2]
})
const daysInMonth = computed(() => {
  return $dayjs(`${birthday.Y}-${birthday.M}`, 'YYYY-M').daysInMonth()
})
watchEffect(() => {
  if (daysInMonth.value < Number(birthday.D)) {
    birthday.D = '1'
  }
})

/* 註冊表單 */
const formStatus = ref(1)
const formRefs = ref<Array<HTMLFormElement | null>>([null, null])
const form = reactive({
  email: 'test@gmail.com',
  password: 'test123456',
  confirm: 'test123456',
  name: '',
  phone: '',
  birthday: computed(() =>
    $dayjs(`${birthday.Y}-${birthday.M}-${birthday.D}`, 'YYYY-M-D').format('YYYY-MM-DD')
  ),
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
const submit = (i: number) => {
  // const { valid } = await formRefs.value[i]?.validate()
  // if (valid) {
  // }
  if (i === 0) {
    formStatus.value = 1
  }

  sRefresh()
}

/* 地址 */
const { cityTmpl } = useTmpl()
const address = reactive({
  city: cityTmpl[0],
  district: '',
  zip_code: ''
})
const districtTmpl = ref<
  {
    district: string
    zip_code: string
  }[]
>([])

/* API */
const { signup, getTwzipcode } = useApi()
const apiPending = computed(() => sPending.value || gtPending.value)
/* API:註冊 */
const { pending: sPending, refresh: sRefresh } = await signup({
  body: computed(() => form)
})

const { pending: gtPending } = await getTwzipcode({
  query: computed(() => ({ city: address.city })),
  onResponse({ response }: { response: any }) {
    if (response.status === 200) {
      const temp = response._data.data.map(
        ({ district, zip_code }: { district: any; zip_code: any }) => ({
          district,
          zip_code
        })
      )
      districtTmpl.value = temp
      address.district = temp[0].district
    }
  }
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

.select {
  padding: 8px;
  padding: calc(1rem - 1px);
  color: #4b4b4b;
  border: $gray-400 1px solid;
  border-radius: 0.375rem;
  background: $white;
  background:
    url('/img/ic_ArrowDown.png') no-repeat right 1rem center,
    linear-gradient($white, $white);

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  &:focus-visible {
    outline: none;
  }
}
</style>
