import { Form, Field } from 'vee-validate';
import __nuxt_component_2 from './Icon-_PazCQDQ.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-nvHjMUuE.mjs';
import { useSSRContext, defineComponent, ref, computed, withAsyncContext, mergeProps, withCtx, unref, createVNode, toDisplayString, withDirectives, vModelCheckbox, createTextVNode, openBlock, createBlock, Fragment } from 'vue';
import { v as useCommonStore, e as navigateTo, t as useApi } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import _sfc_main$1 from './ModalForgot-TnNkvhO8.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import './index-b-_tUYOc.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'dayjs';
import 'dayjs/locale/zh-tw.js';
import 'validator';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const commonStore = useCommonStore();
    const formRefs = ref(null);
    const form = ref({
      email: commonStore.remember && commonStore.email ? commonStore.email : "",
      password: ""
    });
    const submit = () => {
      lRefresh();
    };
    const { loginApi } = useApi();
    const apiPending = computed(() => lPending.value);
    const { pending: lPending, refresh: lRefresh } = ([__temp, __restore] = withAsyncContext(() => loginApi({
      body: computed(() => form.value),
      immediate: false,
      watch: false,
      onResponse({ response }) {
        if (response.status === 200) {
          commonStore.token = response._data.token;
          commonStore.me = response._data.result;
          commonStore.email = commonStore.remember ? form.value.email : "";
          navigateTo("/");
        }
      },
      onResponseError({ response }) {
        var _a, _b, _c;
        switch ((_a = response._data) == null ? void 0 : _a.message) {
          case "\u6B64\u4F7F\u7528\u8005\u4E0D\u5B58\u5728":
            (_b = formRefs.value) == null ? void 0 : _b.setFieldError("email", "\u4F7F\u7528\u8005\u4E0D\u5B58\u5728");
            break;
          case "\u5BC6\u78BC\u932F\u8AA4":
          case "\u5BC6\u78BC\u9700\u81F3\u5C11 8 \u78BC\u4EE5\u4E0A":
          case "\u5BC6\u78BC\u4E0D\u80FD\u53EA\u6709\u82F1\u6587":
          case "\u5BC6\u78BC\u4E0D\u80FD\u53EA\u6709\u6578\u5B57":
          case "\u5BC6\u78BC\u9700\u81F3\u5C11 8 \u78BC\u4EE5\u4E0A\uFF0C\u4E26\u82F1\u6578\u6DF7\u5408":
            (_c = formRefs.value) == null ? void 0 : _c.setFieldError("password", "\u5BC6\u78BC\u932F\u8AA4");
            break;
        }
      }
    })), __temp = await __temp, __restore(), __temp);
    lPending.value = false;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VForm = Form;
      const _component_VField = Field;
      const _component_Icon = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "login-wrapper" }, _attrs))} data-v-499c2476><div data-v-499c2476><div class="text-primary fs-8 fs-md-7 fw-bold lh-lg ls-1 mb-2" data-v-499c2476>\u4EAB\u6A02\u9152\u5E97\uFF0C\u8AA0\u646F\u6B61\u8FCE</div><div class="text-light fs-3 fs-md-1 fw-bold lh-lg ls-1" data-v-499c2476>\u7ACB\u5373\u958B\u59CB\u65C5\u7A0B</div></div>`);
      _push(ssrRenderComponent(_component_VForm, {
        ref_key: "formRefs",
        ref: formRefs,
        onSubmit: submit
      }, {
        default: withCtx(({ errors }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="input-wrapper fs-8 fs-md-7 mb-5" data-v-499c2476${_scopeId}><div data-v-499c2476${_scopeId}><label class="form-label" for="email" data-v-499c2476${_scopeId}>\u96FB\u5B50\u4FE1\u7BB1</label>`);
            _push2(ssrRenderComponent(_component_VField, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              modelModifiers: { trim: true },
              class: [errors.email && "verify-error", "form-control"],
              name: "email",
              label: "\u96FB\u5B50\u4FE1\u7BB1",
              type: "email",
              placeholder: "hello@exsample.com",
              rules: "required|email",
              disabled: unref(apiPending)
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-danger fs-8 fw-bold mt-2" data-v-499c2476${_scopeId}>${ssrInterpolate(errors.email)}</div></div><div data-v-499c2476${_scopeId}><label class="form-label" for="password" data-v-499c2476${_scopeId}>\u5BC6\u78BC</label>`);
            _push2(ssrRenderComponent(_component_VField, {
              id: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              modelModifiers: { trim: true },
              class: [errors.password && "verify-error", "form-control"],
              name: "password",
              label: "\u5BC6\u78BC",
              type: "password",
              placeholder: "\u8ACB\u8F38\u5165\u5BC6\u78BC",
              rules: "required",
              disabled: unref(apiPending)
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-danger fs-8 fw-bold mt-2" data-v-499c2476${_scopeId}>${ssrInterpolate(errors.password)}</div></div><div class="d-flex justify-content-between" data-v-499c2476${_scopeId}><label class="form-check-label text-light" for="remember" data-v-499c2476${_scopeId}><input id="remember"${ssrIncludeBooleanAttr(Array.isArray(unref(commonStore).remember) ? ssrLooseContain(unref(commonStore).remember, null) : unref(commonStore).remember) ? " checked" : ""} class="form-check-input" type="checkbox"${ssrIncludeBooleanAttr(unref(apiPending)) ? " disabled" : ""} data-v-499c2476${_scopeId}> \u8A18\u4F4F\u5E33\u865F </label><button class="btn btn-text fs-8 fs-md-7" type="button" data-bs-target="#ModalForgot" data-bs-toggle="modal" data-v-499c2476${_scopeId}> \u5FD8\u8A18\u5BC6\u78BC\uFF1F </button>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`</div></div><button class="btn btn-primary mb-2 d-flex align-items-center gap-2" type="submit"${ssrIncludeBooleanAttr(unref(apiPending)) ? " disabled" : ""} data-v-499c2476${_scopeId}>`);
            if (!unref(apiPending)) {
              _push2(`<!--[-->\u6703\u54E1\u767B\u5165<!--]-->`);
            } else {
              _push2(`<!--[--> \u767B\u5165\u4E2D `);
              _push2(ssrRenderComponent(_component_Icon, {
                class: "fs-5",
                name: "eos-icons:three-dots-loading"
              }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            }
            _push2(`</button>`);
          } else {
            return [
              createVNode("div", { class: "input-wrapper fs-8 fs-md-7 mb-5" }, [
                createVNode("div", null, [
                  createVNode("label", {
                    class: "form-label",
                    for: "email"
                  }, "\u96FB\u5B50\u4FE1\u7BB1"),
                  createVNode(_component_VField, {
                    id: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    modelModifiers: { trim: true },
                    class: [errors.email && "verify-error", "form-control"],
                    name: "email",
                    label: "\u96FB\u5B50\u4FE1\u7BB1",
                    type: "email",
                    placeholder: "hello@exsample.com",
                    rules: "required|email",
                    disabled: unref(apiPending)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "disabled"]),
                  createVNode("div", { class: "text-danger fs-8 fw-bold mt-2" }, toDisplayString(errors.email), 1)
                ]),
                createVNode("div", null, [
                  createVNode("label", {
                    class: "form-label",
                    for: "password"
                  }, "\u5BC6\u78BC"),
                  createVNode(_component_VField, {
                    id: "password",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    modelModifiers: { trim: true },
                    class: [errors.password && "verify-error", "form-control"],
                    name: "password",
                    label: "\u5BC6\u78BC",
                    type: "password",
                    placeholder: "\u8ACB\u8F38\u5165\u5BC6\u78BC",
                    rules: "required",
                    disabled: unref(apiPending)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "disabled"]),
                  createVNode("div", { class: "text-danger fs-8 fw-bold mt-2" }, toDisplayString(errors.password), 1)
                ]),
                createVNode("div", { class: "d-flex justify-content-between" }, [
                  createVNode("label", {
                    class: "form-check-label text-light",
                    for: "remember"
                  }, [
                    withDirectives(createVNode("input", {
                      id: "remember",
                      "onUpdate:modelValue": ($event) => unref(commonStore).remember = $event,
                      class: "form-check-input",
                      type: "checkbox",
                      disabled: unref(apiPending)
                    }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                      [vModelCheckbox, unref(commonStore).remember]
                    ]),
                    createTextVNode(" \u8A18\u4F4F\u5E33\u865F ")
                  ]),
                  createVNode("button", {
                    class: "btn btn-text fs-8 fs-md-7",
                    type: "button",
                    "data-bs-target": "#ModalForgot",
                    "data-bs-toggle": "modal"
                  }, " \u5FD8\u8A18\u5BC6\u78BC\uFF1F "),
                  createVNode(_sfc_main$1)
                ])
              ]),
              createVNode("button", {
                class: "btn btn-primary mb-2 d-flex align-items-center gap-2",
                type: "submit",
                disabled: unref(apiPending)
              }, [
                !unref(apiPending) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createTextVNode("\u6703\u54E1\u767B\u5165")
                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createTextVNode(" \u767B\u5165\u4E2D "),
                  createVNode(_component_Icon, {
                    class: "fs-5",
                    name: "eos-icons:three-dots-loading"
                  })
                ], 64))
              ], 8, ["disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="d-flex" data-v-499c2476><div class="text-light me-2 fs-8 fs-md-7" data-v-499c2476>\u6C92\u6709\u6703\u54E1\u55CE\uFF1F</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn btn-text text-primary fs-8 fs-md-7",
        to: "/signup"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u524D\u5F80\u8A3B\u518A`);
          } else {
            return [
              createTextVNode("\u524D\u5F80\u8A3B\u518A")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-499c2476"]]);

export { index as default };
//# sourceMappingURL=index-Tz0oZ4W9.mjs.map
