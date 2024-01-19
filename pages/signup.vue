<template>
  <main class="login-wrapper">
    <div>
      <div class="text-primary fs-8 fs-md-7 fw-bold lh-lg ls-1 mb-2">享樂酒店，誠摯歡迎</div>

      <div class="text-light fs-3 fs-md-1 fw-bold lh-lg ls-1 mb-3">立即註冊</div>

      <div class="py-3 d-flex align-items-center gap-2">
        <div class="d-flex text-light flex-column align-items-center">
          <div class="bg-primary rounded-circle num-ball mb-1">
            <template v-if="formStatus === FORM_PHASE.FIRST">1</template>
            <template v-else>
              <Icon name="ic:baseline-check" />
            </template>
          </div>
          <div class="fs-8 fs-md-7">輸入信箱及密碼</div>
        </div>

        <div
          :class="[
            formStatus === FORM_PHASE.FIRST ? 'bg-primary-60' : 'bg-primary-40',
            'flex-fill space-line'
          ]"
        />

        <div
          :class="[
            formStatus === FORM_PHASE.FIRST ? 'text-primary-60' : 'text-light',
            'd-flex flex-column align-items-center'
          ]"
        >
          <div
            :class="[
              formStatus === FORM_PHASE.FIRST ? 'border border-primary-60' : 'bg-primary',
              'rounded-circle num-ball mb-1'
            ]"
          >
            2
          </div>
          <div class="fs-8 fs-md-7">填寫基本資料</div>
        </div>
      </div>
    </div>

    <VForm
      v-if="formStatus === FORM_PHASE.FIRST"
      :ref="(el) => (formRefs[0] = el as HTMLFormElement)"
      v-slot="{ errors }"
      @submit="submit(FORM_PHASE.SECOND)"
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
      @submit="submit()"
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
              v-model="form.birthday.Y"
              class="select flex-grow-1"
              name="birthdayY"
              as="select"
              rules="required"
              :disabled="apiPending"
            >
              <option
                v-for="(item, index) in Array.from(
                  { length: 100 },
                  (_, i) => Number(form.birthday.Y) - i
                )"
                :key="index"
                :value="item"
              >
                {{ item }} 年
              </option>
            </VField>
            <VField
              v-model="form.birthday.M"
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
              v-model="form.birthday.D"
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
          <div class="select-wrapper mb-3">
            <VField
              v-model="form.address.city"
              class="select"
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
              v-model="form.address.district"
              class="select"
              name="addressDistrict"
              as="select"
              rules="required"
              :disabled="apiPending"
            >
              <option v-for="(district, index) in districtTmpl" :key="index" :value="district">
                {{ district.district }}
              </option>
            </VField>
          </div>
          <VField
            id="address"
            v-model.trim="form.address.detail"
            :class="[errors.address && 'verify-error', 'form-control']"
            name="address"
            label="詳細地址"
            type="text"
            placeholder="請輸入詳細地址"
            rules="required"
            :disabled="apiPending"
          />
          <div class="text-danger fs-8 fw-bold mt-2">{{ errors.address }}</div>
        </div>
        <div>
          <label class="form-check-label text-light" for="agree">
            <VField
              id="agree"
              v-model="form.agree"
              class="form-check-input"
              name="agree"
              label="使用規範"
              type="checkbox"
              :value="true"
              :rules="rules.agree"
              :disabled="apiPending"
            />
            我已閱讀並同意本網站個資使用規範
          </label>
          <div class="text-danger fs-8 fw-bold mt-2">{{ errors.agree }}</div>
        </div>
      </div>

      <div>
        <button class="btn btn-primary mb-3 w-100" type="submit">立即註冊</button>
        <div class="d-flex">
          <div class="text-light me-2 fs-8 fs-md-7">已經有會員了嗎？</div>
          <NuxtLink class="btn btn-text text-primary fs-8 fs-md-7" to="/login">立即登入</NuxtLink>
        </div>
      </div>
    </VForm>
  </main>
</template>

<script lang="ts" setup>
import { useCommonStore } from '@/stores/common'

/* layout */
definePageMeta({
  layout: 'h-logo-f-no'
})

/* 列舉 */
enum FORM_PHASE {
  FIRST = 'FIRST', // 第一階段
  SECOND = 'SECOND' // 第二階段
}

/* 註冊表單 */
const formStatus = ref(FORM_PHASE.FIRST)
const formRefs = ref<(HTMLFormElement | null)[]>([null, null])
const { $dayjs } = useNuxtApp()
const initBirthday = () => {
  const [Y, M, D] = $dayjs().format('YYYY-M-D').split('-').map(Number)
  return { Y, M, D }
}
const { cityTmpl } = useTmpl()
const form = ref({
  email: '',
  password: '',
  confirm: '',
  name: '',
  phone: '',
  birthday: initBirthday(),
  address: {
    city: cityTmpl[0],
    district: { district: String, zip_code: Number },
    detail: ''
  },
  agree: false
})

/* 輸入規則 */
const { $validator } = useNuxtApp()
const rules = {
  password: (val: string) => {
    if (!val) return '密碼 為必填'
    if (!$validator.isLength(val, { min: 8 })) return '密碼需至少 8 碼以上'
    if ($validator.isAlpha(val)) return '密碼不能只有英文'
    if ($validator.isNumeric(val)) return '密碼不能只有數字'
    if (!$validator.isAlphanumeric(val)) return '密碼需至少 8 碼以上，並英數混合'
    return {}
  },
  agree: (val: Boolean) => {
    return !val ? '請閱讀並同意本網站個資使用規範' : {}
  }
}

/* 生日 */
const daysInMonth = computed(() => {
  const { Y, M } = form.value.birthday
  return $dayjs(`${Y}-${M}`, 'YYYY-M').daysInMonth()
})
watchEffect(() => {
  if (daysInMonth.value < form.value.birthday.D) {
    form.value.birthday.D = 1
  }
})

/* 地址 */
const districtTmpl = ref<
  {
    zip_code: string
    district: string
  }[]
>([])

/* 事件: 登入 */
const submit = (status?: FORM_PHASE) => {
  if (status === FORM_PHASE.SECOND) return (formStatus.value = FORM_PHASE.SECOND)
  sRefresh()
}

/* API */
const { signup, getTwzipcode } = useApi()
const commonStore = useCommonStore()
const apiPending = computed(() => sPending.value || gtPending.value)
/* API: 註冊 */
const { pending: sPending, refresh: sRefresh } = await signup({
  body: computed(() => {
    const { agree, confirm, birthday, address, ...res } = form.value
    const { Y, M, D } = birthday

    return {
      ...res,
      address: {
        zipcode: address.district.zip_code,
        detail: address.city + address.district.district + address.detail
      },
      birthday: $dayjs(`${Y}-${M}-${D}`, 'YYYY-M-D').format('YYYY-MM-DD')
    }
  }),
  immediate: false,
  watch: false,
  onResponse({ response }: { response: any }) {
    if (response.status === 200) {
      commonStore.token = response._data.token
      commonStore.me = response._data.result
      navigateTo('/')
    }
  },
  onResponseError({ response }: { response: any }) {
    switch (response._data?.message) {
      case '此 Email 已註冊':
        formStatus.value = FORM_PHASE.FIRST
        nextTick(() => {
          formRefs.value[0]?.setFieldError('email', '此 Email 已註冊')
        })
        break
      default:
        break
    }
  }
})
sPending.value = false
/* API: 取得郵遞區號 */
const { pending: gtPending, refresh: gtRefresh } = await getTwzipcode({
  query: computed(() => ({ city: form.value.address.city })),
  immediate: false,
  onResponse({ response }: { response: any }) {
    if (response.status === 200) {
      const resultData = response._data.data.map(
        (i: Partial<{ zip_code: string; district: string }>) => ({
          zip_code: i.zip_code,
          district: i.district
        })
      )
      districtTmpl.value = resultData
      form.value.address.district = resultData[0]
    }
  }
})
sPending.value = false
gtRefresh()
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

.select-wrapper {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, calc(50% - 0.25rem));
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
