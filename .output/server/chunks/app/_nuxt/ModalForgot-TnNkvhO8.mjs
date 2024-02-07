import { Form, Field } from 'vee-validate';
import { defineComponent, ref, computed, withAsyncContext, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { k as useNuxtApp, t as useApi } from '../server.mjs';
import { ssrRenderTeleport, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'dayjs';
import 'dayjs/locale/zh-tw.js';
import 'validator';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ModalForgot",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const formRefs = ref(null);
    const form = ref({ email: "" });
    const form2Refs = ref(null);
    const form2 = ref({
      email: "",
      code: "",
      newPassword: ""
    });
    const submit = (index) => {
      index === 0 ? ceRefresh() : rpRefresh();
    };
    const { $swal, $bootstrap } = useNuxtApp();
    let ModalForgot;
    let ModalForgot2;
    const { checkEmailApi, sendEmailCodeApi, resetPasswordApi } = useApi();
    const apiPending = computed(() => cePending.value || secPending.value);
    const { pending: cePending, refresh: ceRefresh } = ([__temp, __restore] = withAsyncContext(() => checkEmailApi({
      body: computed(() => form.value),
      immediate: false,
      watch: false,
      onResponse({ response }) {
        var _a;
        if (response.status === 200) {
          if (response._data.result.isEmailExists) {
            secRefresh();
          } else {
            (_a = formRefs.value) == null ? void 0 : _a.setFieldError("email", "\u4F7F\u7528\u8005\u4E0D\u5B58\u5728");
          }
        }
      }
    })), __temp = await __temp, __restore(), __temp);
    cePending.value = false;
    const { pending: secPending, refresh: secRefresh } = ([__temp, __restore] = withAsyncContext(() => sendEmailCodeApi({
      body: computed(() => form.value),
      immediate: false,
      watch: false,
      onResponse({ response }) {
        if (response.status === 200) {
          $swal.fire({ icon: "success", title: "\u9A57\u8B49\u78BC\u767C\u9001\u6210\u529F" }).then(() => {
            form2.value.email = form.value.email;
            ModalForgot.hide();
            ModalForgot2.show();
          });
        }
      }
    })), __temp = await __temp, __restore(), __temp);
    secPending.value = false;
    const { pending: rpPending, refresh: rpRefresh } = ([__temp, __restore] = withAsyncContext(() => resetPasswordApi({
      body: computed(() => form2.value),
      immediate: false,
      watch: false,
      onResponse({ response }) {
        if (response.status === 200 && response._data.status) {
          $swal.fire({ icon: "success", title: "\u5BC6\u78BC\u91CD\u8A2D\u6210\u529F" });
          ModalForgot2.hide();
        }
      }
    })), __temp = await __temp, __restore(), __temp);
    rpPending.value = false;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VForm = Form;
      const _component_VField = Field;
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_component_VForm, {
          id: "ModalForgot",
          ref_key: "formRefs",
          ref: formRefs,
          class: "modal fade",
          "aria-hidden": "true",
          "aria-labelledby": "exampleModalLabel",
          "data-bs-backdrop": "static",
          tabindex: "-1",
          onSubmit: ($event) => submit(0)
        }, {
          default: withCtx(({ errors }, _push3, _parent2, _scopeId) => {
            if (_push3) {
              _push3(`<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"${_scopeId}><div class="modal-content"${_scopeId}><div class="modal-header"${_scopeId}><h5 id="exampleModalLabel" class="modal-title"${_scopeId}>\u5FD8\u8A18\u5BC6\u78BC</h5><button class="btn-close" type="button" aria-label="Close" data-bs-dismiss="modal"${_scopeId}></button></div><div class="modal-body"${_scopeId}><label class="form-label text-dark" for="ModalForgotEmail"${_scopeId}>\u8A3B\u518A\u96FB\u5B50\u4FE1\u7BB1</label>`);
              _push3(ssrRenderComponent(_component_VField, {
                id: "ModalForgotEmail",
                modelValue: unref(form).email,
                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                modelModifiers: { trim: true },
                class: [errors.email && "verify-error", "form-control"],
                name: "email",
                label: "\u8A3B\u518A\u96FB\u5B50\u4FE1\u7BB1",
                type: "email",
                placeholder: "hello@exsample.com",
                rules: "required|email",
                disabled: unref(apiPending)
              }, null, _parent2, _scopeId));
              _push3(`<div class="text-danger fs-8 fw-bold mt-2"${_scopeId}>${ssrInterpolate(errors.email)}</div></div><div class="modal-footer"${_scopeId}><button class="btn btn-outline-primary" type="submit" data-bs-dismiss="modal"${ssrIncludeBooleanAttr(unref(apiPending)) ? " disabled" : ""}${_scopeId}> \u53D6\u6D88 </button><button class="btn btn-primary" type="submit"${ssrIncludeBooleanAttr(unref(apiPending)) ? " disabled" : ""}${_scopeId}>\u9A57\u8B49</button></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "modal-dialog modal-dialog-centered modal-dialog-scrollable" }, [
                  createVNode("div", { class: "modal-content" }, [
                    createVNode("div", { class: "modal-header" }, [
                      createVNode("h5", {
                        id: "exampleModalLabel",
                        class: "modal-title"
                      }, "\u5FD8\u8A18\u5BC6\u78BC"),
                      createVNode("button", {
                        class: "btn-close",
                        type: "button",
                        "aria-label": "Close",
                        "data-bs-dismiss": "modal"
                      })
                    ]),
                    createVNode("div", { class: "modal-body" }, [
                      createVNode("label", {
                        class: "form-label text-dark",
                        for: "ModalForgotEmail"
                      }, "\u8A3B\u518A\u96FB\u5B50\u4FE1\u7BB1"),
                      createVNode(_component_VField, {
                        id: "ModalForgotEmail",
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        modelModifiers: { trim: true },
                        class: [errors.email && "verify-error", "form-control"],
                        name: "email",
                        label: "\u8A3B\u518A\u96FB\u5B50\u4FE1\u7BB1",
                        type: "email",
                        placeholder: "hello@exsample.com",
                        rules: "required|email",
                        disabled: unref(apiPending)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "disabled"]),
                      createVNode("div", { class: "text-danger fs-8 fw-bold mt-2" }, toDisplayString(errors.email), 1)
                    ]),
                    createVNode("div", { class: "modal-footer" }, [
                      createVNode("button", {
                        class: "btn btn-outline-primary",
                        type: "submit",
                        "data-bs-dismiss": "modal",
                        disabled: unref(apiPending)
                      }, " \u53D6\u6D88 ", 8, ["disabled"]),
                      createVNode("button", {
                        class: "btn btn-primary",
                        type: "submit",
                        disabled: unref(apiPending)
                      }, "\u9A57\u8B49", 8, ["disabled"])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push2(ssrRenderComponent(_component_VForm, {
          id: "ModalForgot2",
          ref_key: "form2Refs",
          ref: form2Refs,
          class: "modal fade",
          "aria-hidden": "true",
          "aria-labelledby": "exampleModalLabel",
          "data-bs-backdrop": "static",
          tabindex: "-1",
          onSubmit: ($event) => submit(1)
        }, {
          default: withCtx(({ errors }, _push3, _parent2, _scopeId) => {
            if (_push3) {
              _push3(`<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"${_scopeId}><div class="modal-content"${_scopeId}><div class="modal-header"${_scopeId}><h5 id="exampleModalLabel" class="modal-title"${_scopeId}>\u91CD\u8A2D\u5BC6\u78BC</h5><button class="btn-close" type="button" aria-label="Close" data-bs-dismiss="modal"${_scopeId}></button></div><div class="modal-body"${_scopeId}><div${_scopeId}><label class="form-label text-dark" for="ModalForgot2Email"${_scopeId}>\u8A3B\u518A\u96FB\u5B50\u4FE1\u7BB1</label>`);
              _push3(ssrRenderComponent(_component_VField, {
                id: "ModalForgot2Email",
                modelValue: unref(form2).email,
                "onUpdate:modelValue": ($event) => unref(form2).email = $event,
                modelModifiers: { trim: true },
                class: [errors.email && "verify-error", "form-control"],
                name: "email",
                label: "\u8A3B\u518A\u96FB\u5B50\u4FE1\u7BB1",
                type: "email",
                placeholder: "hello@exsample.com",
                rules: "required|email",
                disabled: unref(apiPending)
              }, null, _parent2, _scopeId));
              _push3(`<div class="text-danger fs-8 fw-bold mt-2"${_scopeId}>${ssrInterpolate(errors.email)}</div></div><div${_scopeId}><label class="form-label text-dark" for="ModalForgot2Code"${_scopeId}>Node \u9A57\u8B49\u78BC</label>`);
              _push3(ssrRenderComponent(_component_VField, {
                id: "ModalForgot2Code",
                modelValue: unref(form2).code,
                "onUpdate:modelValue": ($event) => unref(form2).code = $event,
                modelModifiers: { trim: true },
                class: [errors.code && "verify-error", "form-control"],
                name: "code",
                label: "Node \u9A57\u8B49\u78BC",
                type: "text",
                placeholder: "Node \u9A57\u8B49\u78BC",
                rules: "required",
                disabled: unref(apiPending)
              }, null, _parent2, _scopeId));
              _push3(`<div class="text-danger fs-8 fw-bold mt-2"${_scopeId}>${ssrInterpolate(errors.code)}</div></div><div${_scopeId}><label class="form-label text-dark" for="ModalForgot2NewPassword"${_scopeId}>\u65B0\u5BC6\u78BC</label>`);
              _push3(ssrRenderComponent(_component_VField, {
                id: "ModalForgot2NewPassword",
                modelValue: unref(form2).newPassword,
                "onUpdate:modelValue": ($event) => unref(form2).newPassword = $event,
                modelModifiers: { trim: true },
                class: [errors.newPassword && "verify-error", "form-control"],
                name: "newPassword",
                label: "\u65B0\u5BC6\u78BC",
                type: "password",
                placeholder: "\u8ACB\u8F38\u5165\u65B0\u5BC6\u78BC",
                rules: "required",
                disabled: unref(apiPending)
              }, null, _parent2, _scopeId));
              _push3(`<div class="text-danger fs-8 fw-bold mt-2"${_scopeId}>${ssrInterpolate(errors.newPassword)}</div></div></div><div class="modal-footer"${_scopeId}><button class="btn btn-outline-primary" type="submit" data-bs-dismiss="modal"${ssrIncludeBooleanAttr(unref(apiPending)) ? " disabled" : ""}${_scopeId}> \u53D6\u6D88 </button><button class="btn btn-primary" type="submit"${ssrIncludeBooleanAttr(unref(apiPending)) ? " disabled" : ""}${_scopeId}>\u78BA\u8A8D</button></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "modal-dialog modal-dialog-centered modal-dialog-scrollable" }, [
                  createVNode("div", { class: "modal-content" }, [
                    createVNode("div", { class: "modal-header" }, [
                      createVNode("h5", {
                        id: "exampleModalLabel",
                        class: "modal-title"
                      }, "\u91CD\u8A2D\u5BC6\u78BC"),
                      createVNode("button", {
                        class: "btn-close",
                        type: "button",
                        "aria-label": "Close",
                        "data-bs-dismiss": "modal"
                      })
                    ]),
                    createVNode("div", { class: "modal-body" }, [
                      createVNode("div", null, [
                        createVNode("label", {
                          class: "form-label text-dark",
                          for: "ModalForgot2Email"
                        }, "\u8A3B\u518A\u96FB\u5B50\u4FE1\u7BB1"),
                        createVNode(_component_VField, {
                          id: "ModalForgot2Email",
                          modelValue: unref(form2).email,
                          "onUpdate:modelValue": ($event) => unref(form2).email = $event,
                          modelModifiers: { trim: true },
                          class: [errors.email && "verify-error", "form-control"],
                          name: "email",
                          label: "\u8A3B\u518A\u96FB\u5B50\u4FE1\u7BB1",
                          type: "email",
                          placeholder: "hello@exsample.com",
                          rules: "required|email",
                          disabled: unref(apiPending)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "disabled"]),
                        createVNode("div", { class: "text-danger fs-8 fw-bold mt-2" }, toDisplayString(errors.email), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          class: "form-label text-dark",
                          for: "ModalForgot2Code"
                        }, "Node \u9A57\u8B49\u78BC"),
                        createVNode(_component_VField, {
                          id: "ModalForgot2Code",
                          modelValue: unref(form2).code,
                          "onUpdate:modelValue": ($event) => unref(form2).code = $event,
                          modelModifiers: { trim: true },
                          class: [errors.code && "verify-error", "form-control"],
                          name: "code",
                          label: "Node \u9A57\u8B49\u78BC",
                          type: "text",
                          placeholder: "Node \u9A57\u8B49\u78BC",
                          rules: "required",
                          disabled: unref(apiPending)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "disabled"]),
                        createVNode("div", { class: "text-danger fs-8 fw-bold mt-2" }, toDisplayString(errors.code), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          class: "form-label text-dark",
                          for: "ModalForgot2NewPassword"
                        }, "\u65B0\u5BC6\u78BC"),
                        createVNode(_component_VField, {
                          id: "ModalForgot2NewPassword",
                          modelValue: unref(form2).newPassword,
                          "onUpdate:modelValue": ($event) => unref(form2).newPassword = $event,
                          modelModifiers: { trim: true },
                          class: [errors.newPassword && "verify-error", "form-control"],
                          name: "newPassword",
                          label: "\u65B0\u5BC6\u78BC",
                          type: "password",
                          placeholder: "\u8ACB\u8F38\u5165\u65B0\u5BC6\u78BC",
                          rules: "required",
                          disabled: unref(apiPending)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "disabled"]),
                        createVNode("div", { class: "text-danger fs-8 fw-bold mt-2" }, toDisplayString(errors.newPassword), 1)
                      ])
                    ]),
                    createVNode("div", { class: "modal-footer" }, [
                      createVNode("button", {
                        class: "btn btn-outline-primary",
                        type: "submit",
                        "data-bs-dismiss": "modal",
                        disabled: unref(apiPending)
                      }, " \u53D6\u6D88 ", 8, ["disabled"]),
                      createVNode("button", {
                        class: "btn btn-primary",
                        type: "submit",
                        disabled: unref(apiPending)
                      }, "\u78BA\u8A8D", 8, ["disabled"])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/components/ModalForgot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ModalForgot-TnNkvhO8.mjs.map
