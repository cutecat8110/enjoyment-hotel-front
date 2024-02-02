<template>
  <main class="user-wrapper">
    <VForm
      :ref="(el) => (formRefs[0] = el as HTMLFormElement)"
      v-slot="{ errors }"
      class="card-wrapper lh-lg ls-1 bg-white"
      @submit="submit(0)"
    >
      <h6 class="fs-md-5 card-title m-0 fw-bold">修改密碼</h6>
      <ul class="card-content list-unstyled">
        <li>
          <div class="mb-2 text-gray-80">電子信箱</div>
          <div class="fw-bold">{{ me.email }}</div>
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
            <label class="form-label" for="oldPassword">密碼</label>
            <VField
              id="oldPassword"
              v-model.trim="form.oldPassword"
              :class="[errors.oldPassword && 'verify-error', 'form-control']"
              name="oldPassword"
              label="密碼"
              type="password"
              placeholder="請輸入舊密碼"
              :rules="rules.password"
              :disabled="apiPending"
            />
            <div class="text-danger fs-8 fw-bold mt-2">{{ errors.oldPassword }}</div>
          </li>
          <li>
            <label class="form-label" for="newPassword">新密碼</label>
            <VField
              id="newPassword"
              v-model.trim="form.newPassword"
              :class="[errors.newPassword && 'verify-error', 'form-control']"
              name="newPassword"
              label="新密碼"
              type="password"
              placeholder="請輸入新密碼"
              :rules="rules.newPassword"
              :disabled="apiPending"
            />
            <div class="text-danger fs-8 fw-bold mt-2">{{ errors.newPassword }}</div>
          </li>
          <li>
            <label class="form-label" for="confirm">確認新密碼</label>
            <VField
              id="confirm"
              v-model.trim="form.confirm"
              :class="[errors.confirm && 'verify-error', 'form-control']"
              name="confirm"
              label="確認新密碼"
              type="password"
              placeholder="請再輸入一次密碼"
              rules="required|confirmed:@newPassword"
              :disabled="apiPending"
            />
            <div class="text-danger fs-8 fw-bold mt-2">{{ errors.confirm }}</div>
          </li>
        </template>
      </ul>
      <button v-if="data.password.tool" class="btn btn-primary" type="submit">儲存設定</button>
    </VForm>

    <VForm
      :ref="(el) => (formRefs[1] = el as HTMLFormElement)"
      v-slot="{ errors }"
      class="card-wrapper lh-lg ls-1 bg-white"
      @submit="submit(1)"
    >
      <h6 class="fs-md-5 card-title m-0 fw-bold">基本資料</h6>
      <ul class="card-content list-unstyled">
        <template v-if="!data.info.tool">
          <li>
            <div class="mb-2 text-gray-80">姓名</div>
            <div class="fw-bold">{{ me.name }}</div>
          </li>
          <li>
            <div class="mb-2 text-gray-80">手機號碼</div>
            <div class="fw-bold">{{ me.phone }}</div>
          </li>
          <li>
            <div class="mb-2 text-gray-80">生日</div>
            <div class="fw-bold">{{ $dayjs(me.birthday).format('YYYY 年 MM 月 DD 日') }}</div>
          </li>
          <li>
            <div class="mb-2 text-gray-80">地址</div>
            <div class="fw-bold">
              {{ me.address.county + me.address.city + me.address.detail }}
            </div>
          </li>
        </template>
        <template v-else>
          <!-- 姓名 -->
          <li>
            <label class="form-label" for="name">姓名</label>
            <VField
              id="name"
              v-model.trim="form2.name"
              :class="[errors.name && 'verify-error', 'form-control']"
              name="name"
              label="姓名"
              type="text"
              placeholder="請輸入姓名"
              rules="required|min:2"
              :disabled="apiPending"
            />
            <div class="text-danger fs-8 fw-bold mt-2">{{ errors.name }}</div>
          </li>

          <!-- 手機 -->
          <li>
            <label class="form-label" for="phone">手機號碼</label>
            <VField
              id="phone"
              v-model.trim="form2.phone"
              :class="[errors.phone && 'verify-error', 'form-control']"
              name="phone"
              label="手機號碼"
              type="text"
              placeholder="請輸入手機號碼"
              rules="required"
              :disabled="apiPending"
            />
            <div class="text-danger fs-8 fw-bold mt-2">{{ errors.phone }}</div>
          </li>

          <!-- 生日 -->
          <li>
            <label class="form-label" for="birthday">生日</label>
            <div class="d-flex flex-row gap-2">
              <VField
                v-model="form2.birthday.Y"
                class="select flex-grow-1"
                name="birthdayY"
                as="select"
                rules="required"
                :disabled="apiPending"
              >
                <option
                  v-for="(item, index) in Array.from(
                    { length: 100 },
                    (_, i) => Number(form2.birthday.Y) - i
                  )"
                  :key="index"
                  :value="item"
                >
                  {{ item }} 年
                </option>
              </VField>
              <VField
                v-model="form2.birthday.M"
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
                v-model="form2.birthday.D"
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
          </li>
          <!-- 地址 -->
          <li>
            <label class="form-label" for="address">地址</label>
            <div class="select-wrapper mb-3">
              <VField
                v-model="form2.address.city"
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
                v-model="form2.address.district"
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
              v-model.trim="form2.address.detail"
              :class="[errors.address && 'verify-error', 'form-control']"
              name="address"
              label="詳細地址"
              type="text"
              placeholder="請輸入詳細地址"
              rules="required"
              :disabled="apiPending"
            />
            <div class="text-danger fs-8 fw-bold mt-2">{{ errors.address }}</div>
          </li>
        </template>
      </ul>
      <div v-if="!data.info.tool" class="d-flex">
        <button class="btn btn-outline-primary" type="button" @click="data.info.tool = true">
          編輯
        </button>
      </div>
      <button v-else class="btn btn-primary" type="submit">儲存設定</button>
    </VForm>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'h-bg-f-spl'
})

type Me = {
  address: {
    zipcode: number
    detail: string
    county: string
    city: string
  }
  _id: string
  name: string
  email: string
  phone: string
  birthday: string
  createdAt: string
  updatedAt: string
  id: string
}

/* 客戶資料 */
const commonStore = useCommonStore()
const me = computed<Me>(() => commonStore.me as Me)
const form = ref({
  userId: me.value.id,
  oldPassword: '',
  newPassword: '',
  confirm: ''
})
const { $dayjs } = useNuxtApp()
const initBirthday = () => {
  const [Y, M, D] = $dayjs(me.value.birthday).format('YYYY-M-D').split('-').map(Number)
  return { Y, M, D }
}
const { cityTmpl } = useTmpl()
const form2 = ref({
  userId: me.value.id,
  name: me.value.name,
  phone: me.value.phone,
  birthday: initBirthday(),
  address: {
    city: me.value.address.county,
    district: { district: me.value.address.city, zip_code: me.value.address.zipcode },
    detail: me.value.address.detail
  }
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
  newPassword: (val: string) => {
    if (!val) return '新密碼 為必填'
    if (!$validator.isLength(val, { min: 8 })) return '新密碼需至少 8 碼以上'
    if ($validator.isAlpha(val)) return '新密碼不能只有英文'
    if ($validator.isNumeric(val)) return '新密碼不能只有數字'
    if (!$validator.isAlphanumeric(val)) return '新密碼需至少 8 碼以上，並英數混合'
    return {}
  }
}

/* 生日 */
const daysInMonth = computed(() => {
  const { Y, M } = form2.value.birthday
  return $dayjs(`${Y}-${M}`, 'YYYY-M').daysInMonth()
})
watchEffect(() => {
  if (daysInMonth.value < form2.value.birthday.D) {
    form2.value.birthday.D = 1
  }
})

/* 地址 */
const districtTmpl = ref<
  {
    zip_code: string
    district: string
  }[]
>([])

const data = ref({
  password: {
    tool: false
  },
  info: {
    tool: false
  },
  submit: 0
})

const formRefs = ref<(HTMLFormElement | null)[]>([null, null])

/* 事件: 送出 */
const submit = (index: number) => {
  data.value.submit = index
  uuRefresh()
}

/* API */
const { updateUserApi, getUserApi, getTwzipcodeApi } = useApi()
const { $swal } = useNuxtApp()
const apiPending = computed(() => uuPending.value || gtPending.value || guPending.value)
/* API: 註冊 */
const { pending: uuPending, refresh: uuRefresh } = await updateUserApi({
  body: computed(() => {
    if (data.value.submit === 0) {
      const { userId, oldPassword, newPassword } = form.value
      return {
        userId,
        oldPassword,
        newPassword
      }
    } else {
      const { birthday, address, ...res } = form2.value
      const { Y, M, D } = birthday

      return {
        ...res,
        address: {
          zipcode: address.district.zip_code,
          detail: address.detail
        },
        birthday: $dayjs(`${Y}-${M}-${D}`, 'YYYY-M-D').format('YYYY-MM-DD')
      }
    }
  }),
  immediate: false,
  watch: false,
  onResponse({ response }: { response: any }) {
    if (response.status === 200) {
      if (response._data.status && data.value.submit === 0) {
        $swal.fire({ icon: 'success', title: '密碼重設成功' }).then(() => {
          form.value = {
            userId: me.value.id,
            oldPassword: '',
            newPassword: '',
            confirm: ''
          }
          data.value.password.tool = false
        })
      }
      if (response._data.status && data.value.submit === 1) {
        $swal.fire({ icon: 'success', title: '基本資料修改成功' }).then(() => {
          guRefresh()
          data.value.info.tool = false
        })
      }
    }
  }
})
uuPending.value = false
/* API: 取得使用者資訊 */
const { pending: guPending, refresh: guRefresh } = await getUserApi({
  immediate: false,
  watch: false,
  onResponse({ response }: { response: any }) {
    if (response.status === 200) {
      const temp = response._data.result
      temp.address.county = form2.value.address.city
      temp.address.city = form2.value.address.district.district
      commonStore.me = temp
    }
  }
})
guPending.value = false
/* API: 取得郵遞區號 */
const { pending: gtPending, refresh: gtRefresh } = await getTwzipcodeApi({
  query: computed(() => ({ city: form2.value.address.city })),
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
      form2.value.address.district = resultData[0]
    }
  }
})
gtPending.value = false
gtRefresh()
</script>

<style lang="scss" scoped>
@import url('@/assets/scss/site/user.scss');

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
