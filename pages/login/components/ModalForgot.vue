<template>
  <Teleport to="body">
    <VForm
      id="ModalForgot"
      ref="formRefs"
      v-slot="{ errors }"
      class="modal fade"
      aria-hidden="true"
      aria-labelledby="exampleModalLabel"
      data-bs-backdrop="static"
      tabindex="-1"
      @submit="submit(0)"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">忘記密碼</h5>
            <button
              class="btn-close"
              type="button"
              aria-label="Close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body">
            <label class="form-label text-dark" for="ModalForgotEmail">註冊電子信箱</label>
            <VField
              id="ModalForgotEmail"
              v-model.trim="form.email"
              :class="[errors.email && 'verify-error', 'form-control']"
              name="email"
              label="註冊電子信箱"
              type="email"
              placeholder="hello@exsample.com"
              rules="required|email"
              :disabled="apiPending"
            />
            <div class="text-danger fs-8 fw-bold mt-2">{{ errors.email }}</div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-outline-primary"
              type="submit"
              data-bs-dismiss="modal"
              :disabled="apiPending"
            >
              取消
            </button>
            <button class="btn btn-primary" type="submit" :disabled="apiPending">驗證</button>
          </div>
        </div>
      </div>
    </VForm>

    <VForm
      id="ModalForgot2"
      ref="form2Refs"
      v-slot="{ errors }"
      class="modal fade"
      aria-hidden="true"
      aria-labelledby="exampleModalLabel"
      data-bs-backdrop="static"
      tabindex="-1"
      @submit="submit(1)"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">重設密碼</h5>
            <button
              class="btn-close"
              type="button"
              aria-label="Close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body">
            <div>
              <label class="form-label text-dark" for="ModalForgot2Email">註冊電子信箱</label>
              <VField
                id="ModalForgot2Email"
                v-model.trim="form2.email"
                :class="[errors.email && 'verify-error', 'form-control']"
                name="email"
                label="註冊電子信箱"
                type="email"
                placeholder="hello@exsample.com"
                rules="required|email"
                :disabled="apiPending"
              />
              <div class="text-danger fs-8 fw-bold mt-2">{{ errors.email }}</div>
            </div>

            <div>
              <label class="form-label text-dark" for="ModalForgot2Code">Node 驗證碼</label>
              <VField
                id="ModalForgot2Code"
                v-model.trim="form2.code"
                :class="[errors.code && 'verify-error', 'form-control']"
                name="code"
                label="Node 驗證碼"
                type="text"
                placeholder="Node 驗證碼"
                rules="required"
                :disabled="apiPending"
              />
              <div class="text-danger fs-8 fw-bold mt-2">{{ errors.code }}</div>
            </div>

            <div>
              <label class="form-label text-dark" for="ModalForgot2NewPassword">新密碼</label>
              <VField
                id="ModalForgot2NewPassword"
                v-model.trim="form2.newPassword"
                :class="[errors.newPassword && 'verify-error', 'form-control']"
                name="newPassword"
                label="新密碼"
                type="password"
                placeholder="請輸入新密碼"
                rules="required"
                :disabled="apiPending"
              />
              <div class="text-danger fs-8 fw-bold mt-2">{{ errors.newPassword }}</div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-outline-primary"
              type="submit"
              data-bs-dismiss="modal"
              :disabled="apiPending"
            >
              取消
            </button>
            <button class="btn btn-primary" type="submit" :disabled="apiPending">確認</button>
          </div>
        </div>
      </div>
    </VForm>
  </Teleport>
</template>

<script lang="ts" setup>
const formRefs = ref<HTMLFormElement | null>(null)
const form = ref({ email: 'cutecat8110@gmail.com' })

const form2Refs = ref<HTMLFormElement | null>(null)
const form2 = ref({
  email: '',
  code: '',
  newPassword: 'Vul3xm4000000'
})

/* 事件: 驗證信箱 */
const submit = (index: number) => {
  index === 0 ? ceRefresh() : rpRefresh()
}

/* API */
const { $swal, $bootstrap } = useNuxtApp()
let ModalForgot: any
let ModalForgot2: any
onMounted(() => {
  const ModalForgotEL = document.getElementById('ModalForgot')
  const ModalForgot2EL = document.getElementById('ModalForgot2')

  ModalForgot = $bootstrap.modal(ModalForgotEL)
  ModalForgot2 = $bootstrap.modal(ModalForgot2EL)

  ModalForgotEL?.addEventListener('hidden.bs.modal', () => {
    formRefs.value?.resetForm({ email: '' })
  })

  ModalForgot2EL?.addEventListener('hidden.bs.modal', () => {
    form2Refs.value?.resetForm({
      email: '',
      code: '',
      newPassword: ''
    })
  })
})
const { checkEmail, sendEmailCode, resetPassword } = useApi()
const apiPending = computed(() => cePending.value || secPending.value)
/* API: 檢查信箱是否存在 */
const { pending: cePending, refresh: ceRefresh } = await checkEmail({
  body: computed(() => form.value),
  immediate: false,
  watch: false,
  onResponse({ response }: { response: any }) {
    if (response.status === 200) {
      if (response._data.result.isEmailExists) {
        secRefresh()
      } else {
        formRefs.value?.setFieldError('email', '使用者不存在')
      }
    }
  }
})
cePending.value = false
/* API: 取得認證碼 */
const { pending: secPending, refresh: secRefresh } = await sendEmailCode({
  body: computed(() => form.value),
  immediate: false,
  watch: false,
  onResponse({ response }: { response: any }) {
    if (response.status === 200) {
      $swal.fire({ icon: 'success', title: '驗證碼發送成功' }).then(() => {
        form2.value.email = form.value.email
        ModalForgot.hide()
        ModalForgot2.show()
      })
    }
  }
})
secPending.value = false
/* API: 重設密碼 */
const { pending: rpPending, refresh: rpRefresh } = await resetPassword({
  body: computed(() => form2.value),
  immediate: false,
  watch: false,
  onResponse({ response }: { response: any }) {
    if (response.status === 200 && response._data.status) {
      $swal.fire({ icon: 'success', title: '密碼重設成功' })
      ModalForgot2.hide()
    }
  }
})
rpPending.value = false
</script>
