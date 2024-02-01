import __nuxt_component_2 from './Icon-_PazCQDQ.mjs';
import { Form, Field } from 'vee-validate';
import { _ as __nuxt_component_0 } from './nuxt-link-nvHjMUuE.mjs';
import { useSSRContext, defineComponent, ref, computed, watchEffect, withAsyncContext, nextTick, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { v as useCommonStore, e as navigateTo, k as useNuxtApp, t as useApi } from '../server.mjs';
import { u as useTmpl } from './useTmpl-YOe5SU_a.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "signup",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const formStatus = ref(
      "FIRST"
      /* FIRST */
    );
    const formRefs = ref([null, null]);
    const { $dayjs } = useNuxtApp();
    const initBirthday = () => {
      const [Y, M, D] = $dayjs().format("YYYY-M-D").split("-").map(Number);
      return { Y, M, D };
    };
    const { cityTmpl } = useTmpl();
    const form = ref({
      email: "",
      password: "",
      confirm: "",
      name: "",
      phone: "",
      birthday: initBirthday(),
      address: {
        city: cityTmpl[0],
        district: { district: String, zip_code: Number },
        detail: ""
      },
      agree: false
    });
    const { $validator } = useNuxtApp();
    const rules = {
      password: (val) => {
        if (!val)
          return "\u5BC6\u78BC \u70BA\u5FC5\u586B";
        if (!$validator.isLength(val, { min: 8 }))
          return "\u5BC6\u78BC\u9700\u81F3\u5C11 8 \u78BC\u4EE5\u4E0A";
        if ($validator.isAlpha(val))
          return "\u5BC6\u78BC\u4E0D\u80FD\u53EA\u6709\u82F1\u6587";
        if ($validator.isNumeric(val))
          return "\u5BC6\u78BC\u4E0D\u80FD\u53EA\u6709\u6578\u5B57";
        if (!$validator.isAlphanumeric(val))
          return "\u5BC6\u78BC\u9700\u81F3\u5C11 8 \u78BC\u4EE5\u4E0A\uFF0C\u4E26\u82F1\u6578\u6DF7\u5408";
        return {};
      },
      agree: (val) => {
        return !val ? "\u8ACB\u95B1\u8B80\u4E26\u540C\u610F\u672C\u7DB2\u7AD9\u500B\u8CC7\u4F7F\u7528\u898F\u7BC4" : {};
      }
    };
    const daysInMonth = computed(() => {
      const { Y, M } = form.value.birthday;
      return $dayjs(`${Y}-${M}`, "YYYY-M").daysInMonth();
    });
    watchEffect(() => {
      if (daysInMonth.value < form.value.birthday.D) {
        form.value.birthday.D = 1;
      }
    });
    const districtTmpl = ref([]);
    const submit = (status) => {
      if (status === "SECOND")
        return formStatus.value = "SECOND";
      sRefresh();
    };
    const { signupApi, getTwzipcodeApi } = useApi();
    const commonStore = useCommonStore();
    const apiPending = computed(() => sPending.value || gtPending.value);
    const { pending: sPending, refresh: sRefresh } = ([__temp, __restore] = withAsyncContext(() => signupApi({
      body: computed(() => {
        const { agree, confirm, birthday, address, ...res } = form.value;
        const { Y, M, D } = birthday;
        return {
          ...res,
          address: {
            zipcode: address.district.zip_code,
            detail: address.detail
          },
          birthday: $dayjs(`${Y}-${M}-${D}`, "YYYY-M-D").format("YYYY-MM-DD")
        };
      }),
      immediate: false,
      watch: false,
      onResponse({ response }) {
        if (response.status === 200) {
          commonStore.token = response._data.token;
          commonStore.me = response._data.result;
          navigateTo("/");
        }
      },
      onResponseError({ error }) {
        var _a;
        switch ((_a = error._data) == null ? void 0 : _a.message) {
          case "\u6B64 Email \u5DF2\u8A3B\u518A":
            formStatus.value = "FIRST";
            nextTick(() => {
              var _a2;
              (_a2 = formRefs.value[0]) == null ? void 0 : _a2.setFieldError("email", "\u6B64 Email \u5DF2\u8A3B\u518A");
            });
            break;
        }
      }
    })), __temp = await __temp, __restore(), __temp);
    sPending.value = false;
    const { pending: gtPending, refresh: gtRefresh } = ([__temp, __restore] = withAsyncContext(() => getTwzipcodeApi({
      query: computed(() => ({ city: form.value.address.city })),
      immediate: false,
      onResponse({ response }) {
        if (response.status === 200) {
          const resultData = response._data.data.map(
            (i) => ({
              zip_code: i.zip_code,
              district: i.district
            })
          );
          districtTmpl.value = resultData;
          form.value.address.district = resultData[0];
        }
      }
    })), __temp = await __temp, __restore(), __temp);
    gtPending.value = false;
    gtRefresh();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_VForm = Form;
      const _component_VField = Field;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "login-wrapper" }, _attrs))} data-v-7f611229><div data-v-7f611229><div class="text-primary fs-8 fs-md-7 fw-bold lh-lg ls-1 mb-2" data-v-7f611229>\u4EAB\u6A02\u9152\u5E97\uFF0C\u8AA0\u646F\u6B61\u8FCE</div><div class="text-light fs-3 fs-md-1 fw-bold lh-lg ls-1 mb-3" data-v-7f611229>\u7ACB\u5373\u8A3B\u518A</div><div class="py-3 d-flex align-items-center gap-2" data-v-7f611229><div class="d-flex text-light flex-column align-items-center" data-v-7f611229><div class="bg-primary rounded-circle num-ball mb-1" data-v-7f611229>`);
      if (unref(formStatus) === "FIRST") {
        _push(`<!--[-->1<!--]-->`);
      } else {
        _push(ssrRenderComponent(_component_Icon, { name: "ic:baseline-check" }, null, _parent));
      }
      _push(`</div><div class="fs-8 fs-md-7" data-v-7f611229>\u8F38\u5165\u4FE1\u7BB1\u53CA\u5BC6\u78BC</div></div><div class="${ssrRenderClass([
        unref(formStatus) === "FIRST" ? "bg-primary-60" : "bg-primary-40",
        "flex-fill space-line"
      ])}" data-v-7f611229></div><div class="${ssrRenderClass([
        unref(formStatus) === "FIRST" ? "text-primary-60" : "text-light",
        "d-flex flex-column align-items-center"
      ])}" data-v-7f611229><div class="${ssrRenderClass([
        unref(formStatus) === "FIRST" ? "border border-primary-60" : "bg-primary",
        "rounded-circle num-ball mb-1"
      ])}" data-v-7f611229> 2 </div><div class="fs-8 fs-md-7" data-v-7f611229>\u586B\u5BEB\u57FA\u672C\u8CC7\u6599</div></div></div></div>`);
      if (unref(formStatus) === "FIRST") {
        _push(ssrRenderComponent(_component_VForm, {
          ref: (el) => unref(formRefs)[0] = el,
          onSubmit: ($event) => submit(
            "SECOND"
            /* SECOND */
          )
        }, {
          default: withCtx(({ errors }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="input-wrapper fs-8 fs-md-7 mb-5" data-v-7f611229${_scopeId}><div data-v-7f611229${_scopeId}><label class="form-label" for="email" data-v-7f611229${_scopeId}>\u96FB\u5B50\u4FE1\u7BB1</label>`);
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
              _push2(`<div class="text-danger fs-8 fw-bold mt-2" data-v-7f611229${_scopeId}>${ssrInterpolate(errors.email)}</div></div><div data-v-7f611229${_scopeId}><label class="form-label" for="password" data-v-7f611229${_scopeId}>\u5BC6\u78BC</label>`);
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
                rules: rules.password,
                disabled: unref(apiPending)
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-danger fs-8 fw-bold mt-2" data-v-7f611229${_scopeId}>${ssrInterpolate(errors.password)}</div></div><div data-v-7f611229${_scopeId}><label class="form-label" for="confirm" data-v-7f611229${_scopeId}>\u5BC6\u78BC</label>`);
              _push2(ssrRenderComponent(_component_VField, {
                id: "confirm",
                modelValue: unref(form).confirm,
                "onUpdate:modelValue": ($event) => unref(form).confirm = $event,
                modelModifiers: { trim: true },
                class: [errors.confirm && "verify-error", "form-control"],
                name: "confirm",
                label: "\u5BC6\u78BC",
                type: "password",
                placeholder: "\u8ACB\u518D\u8F38\u5165\u4E00\u6B21\u5BC6\u78BC",
                rules: "required|confirmed:@password",
                disabled: unref(apiPending)
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-danger fs-8 fw-bold mt-2" data-v-7f611229${_scopeId}>${ssrInterpolate(errors.confirm)}</div></div></div><div data-v-7f611229${_scopeId}><button class="btn btn-primary mb-3 w-100" type="submit" data-v-7f611229${_scopeId}>\u4E0B\u4E00\u6B65</button><div class="d-flex" data-v-7f611229${_scopeId}><div class="text-light me-2 fs-8 fs-md-7" data-v-7f611229${_scopeId}>\u5DF2\u7D93\u6709\u6703\u54E1\u4E86\u55CE\uFF1F</div>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                class: "btn btn-text text-primary fs-8 fs-md-7",
                to: "/login"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u7ACB\u5373\u767B\u5165`);
                  } else {
                    return [
                      createTextVNode("\u7ACB\u5373\u767B\u5165")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
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
                      rules: rules.password,
                      disabled: unref(apiPending)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "rules", "disabled"]),
                    createVNode("div", { class: "text-danger fs-8 fw-bold mt-2" }, toDisplayString(errors.password), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      class: "form-label",
                      for: "confirm"
                    }, "\u5BC6\u78BC"),
                    createVNode(_component_VField, {
                      id: "confirm",
                      modelValue: unref(form).confirm,
                      "onUpdate:modelValue": ($event) => unref(form).confirm = $event,
                      modelModifiers: { trim: true },
                      class: [errors.confirm && "verify-error", "form-control"],
                      name: "confirm",
                      label: "\u5BC6\u78BC",
                      type: "password",
                      placeholder: "\u8ACB\u518D\u8F38\u5165\u4E00\u6B21\u5BC6\u78BC",
                      rules: "required|confirmed:@password",
                      disabled: unref(apiPending)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "disabled"]),
                    createVNode("div", { class: "text-danger fs-8 fw-bold mt-2" }, toDisplayString(errors.confirm), 1)
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("button", {
                    class: "btn btn-primary mb-3 w-100",
                    type: "submit"
                  }, "\u4E0B\u4E00\u6B65"),
                  createVNode("div", { class: "d-flex" }, [
                    createVNode("div", { class: "text-light me-2 fs-8 fs-md-7" }, "\u5DF2\u7D93\u6709\u6703\u54E1\u4E86\u55CE\uFF1F"),
                    createVNode(_component_NuxtLink, {
                      class: "btn btn-text text-primary fs-8 fs-md-7",
                      to: "/login"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u7ACB\u5373\u767B\u5165")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_VForm, {
          ref: (el) => unref(formRefs)[1] = el,
          onSubmit: ($event) => submit()
        }, {
          default: withCtx(({ errors }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="input-wrapper fs-8 fs-md-7 mb-5" data-v-7f611229${_scopeId}><div data-v-7f611229${_scopeId}><label class="form-label" for="name" data-v-7f611229${_scopeId}>\u59D3\u540D</label>`);
              _push2(ssrRenderComponent(_component_VField, {
                id: "name",
                modelValue: unref(form).name,
                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                modelModifiers: { trim: true },
                class: [errors.name && "verify-error", "form-control"],
                name: "name",
                label: "\u59D3\u540D",
                type: "text",
                placeholder: "\u8ACB\u8F38\u5165\u59D3\u540D",
                rules: "required|min:2",
                disabled: unref(apiPending)
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-danger fs-8 fw-bold mt-2" data-v-7f611229${_scopeId}>${ssrInterpolate(errors.name)}</div></div><div data-v-7f611229${_scopeId}><label class="form-label" for="phone" data-v-7f611229${_scopeId}>\u624B\u6A5F\u865F\u78BC</label>`);
              _push2(ssrRenderComponent(_component_VField, {
                id: "phone",
                modelValue: unref(form).phone,
                "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                modelModifiers: { trim: true },
                class: [errors.phone && "verify-error", "form-control"],
                name: "phone",
                label: "\u624B\u6A5F\u865F\u78BC",
                type: "text",
                placeholder: "\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC",
                rules: "required",
                disabled: unref(apiPending)
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-danger fs-8 fw-bold mt-2" data-v-7f611229${_scopeId}>${ssrInterpolate(errors.phone)}</div></div><div data-v-7f611229${_scopeId}><label class="form-label" for="birthday" data-v-7f611229${_scopeId}>\u751F\u65E5</label><div class="d-flex flex-row gap-2" data-v-7f611229${_scopeId}>`);
              _push2(ssrRenderComponent(_component_VField, {
                modelValue: unref(form).birthday.Y,
                "onUpdate:modelValue": ($event) => unref(form).birthday.Y = $event,
                class: "select flex-grow-1",
                name: "birthdayY",
                as: "select",
                rules: "required",
                disabled: unref(apiPending)
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(Array.from(
                      { length: 100 },
                      (_2, i) => Number(unref(form).birthday.Y) - i
                    ), (item, index) => {
                      _push3(`<option${ssrRenderAttr("value", item)} data-v-7f611229${_scopeId2}>${ssrInterpolate(item)} \u5E74 </option>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(Array.from(
                        { length: 100 },
                        (_2, i) => Number(unref(form).birthday.Y) - i
                      ), (item, index) => {
                        return openBlock(), createBlock("option", {
                          key: index,
                          value: item
                        }, toDisplayString(item) + " \u5E74 ", 9, ["value"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_VField, {
                modelValue: unref(form).birthday.M,
                "onUpdate:modelValue": ($event) => unref(form).birthday.M = $event,
                class: "select flex-grow-1",
                name: "birthdayM",
                as: "select",
                rules: "required",
                disabled: unref(apiPending)
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(Array.from({ length: 12 }, (_2, i) => i + 1), (item, index) => {
                      _push3(`<option${ssrRenderAttr("value", item)} data-v-7f611229${_scopeId2}>${ssrInterpolate(item)} \u6708 </option>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(Array.from({ length: 12 }, (_2, i) => i + 1), (item, index) => {
                        return openBlock(), createBlock("option", {
                          key: index,
                          value: item
                        }, toDisplayString(item) + " \u6708 ", 9, ["value"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_VField, {
                modelValue: unref(form).birthday.D,
                "onUpdate:modelValue": ($event) => unref(form).birthday.D = $event,
                class: "select flex-grow-1",
                name: "birthdayD",
                as: "select",
                rules: "required",
                disabled: unref(apiPending)
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(Array.from({ length: unref(daysInMonth) }, (_2, i) => i + 1), (item, index) => {
                      _push3(`<option${ssrRenderAttr("value", item)} data-v-7f611229${_scopeId2}>${ssrInterpolate(item)} \u65E5 </option>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(Array.from({ length: unref(daysInMonth) }, (_2, i) => i + 1), (item, index) => {
                        return openBlock(), createBlock("option", {
                          key: index,
                          value: item
                        }, toDisplayString(item) + " \u65E5 ", 9, ["value"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-danger fs-8 fw-bold mt-2" data-v-7f611229${_scopeId}>${ssrInterpolate(errors.birthday)}</div></div><div data-v-7f611229${_scopeId}><label class="form-label" for="address" data-v-7f611229${_scopeId}>\u5730\u5740</label><div class="select-wrapper mb-3" data-v-7f611229${_scopeId}>`);
              _push2(ssrRenderComponent(_component_VField, {
                modelValue: unref(form).address.city,
                "onUpdate:modelValue": ($event) => unref(form).address.city = $event,
                class: "select",
                name: "addressCity",
                as: "select",
                rules: "required",
                disabled: unref(apiPending)
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(cityTmpl), (item, index) => {
                      _push3(`<option${ssrRenderAttr("value", item)} data-v-7f611229${_scopeId2}>${ssrInterpolate(item)}</option>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(cityTmpl), (item, index) => {
                        return openBlock(), createBlock("option", {
                          key: index,
                          value: item
                        }, toDisplayString(item), 9, ["value"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_VField, {
                modelValue: unref(form).address.district,
                "onUpdate:modelValue": ($event) => unref(form).address.district = $event,
                class: "select",
                name: "addressDistrict",
                as: "select",
                rules: "required",
                disabled: unref(apiPending)
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(districtTmpl), (district, index) => {
                      _push3(`<option${ssrRenderAttr("value", district)} data-v-7f611229${_scopeId2}>${ssrInterpolate(district.district)}</option>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(districtTmpl), (district, index) => {
                        return openBlock(), createBlock("option", {
                          key: index,
                          value: district
                        }, toDisplayString(district.district), 9, ["value"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_VField, {
                id: "address",
                modelValue: unref(form).address.detail,
                "onUpdate:modelValue": ($event) => unref(form).address.detail = $event,
                modelModifiers: { trim: true },
                class: [errors.address && "verify-error", "form-control"],
                name: "address",
                label: "\u8A73\u7D30\u5730\u5740",
                type: "text",
                placeholder: "\u8ACB\u8F38\u5165\u8A73\u7D30\u5730\u5740",
                rules: "required",
                disabled: unref(apiPending)
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-danger fs-8 fw-bold mt-2" data-v-7f611229${_scopeId}>${ssrInterpolate(errors.address)}</div></div><div data-v-7f611229${_scopeId}><label class="form-check-label text-light" for="agree" data-v-7f611229${_scopeId}>`);
              _push2(ssrRenderComponent(_component_VField, {
                id: "agree",
                modelValue: unref(form).agree,
                "onUpdate:modelValue": ($event) => unref(form).agree = $event,
                class: "form-check-input",
                name: "agree",
                label: "\u4F7F\u7528\u898F\u7BC4",
                type: "checkbox",
                value: true,
                rules: rules.agree,
                disabled: unref(apiPending)
              }, null, _parent2, _scopeId));
              _push2(` \u6211\u5DF2\u95B1\u8B80\u4E26\u540C\u610F\u672C\u7DB2\u7AD9\u500B\u8CC7\u4F7F\u7528\u898F\u7BC4 </label><div class="text-danger fs-8 fw-bold mt-2" data-v-7f611229${_scopeId}>${ssrInterpolate(errors.agree)}</div></div></div><div data-v-7f611229${_scopeId}><button class="btn btn-primary mb-3 w-100" type="submit" data-v-7f611229${_scopeId}>\u7ACB\u5373\u8A3B\u518A</button><div class="d-flex" data-v-7f611229${_scopeId}><div class="text-light me-2 fs-8 fs-md-7" data-v-7f611229${_scopeId}>\u5DF2\u7D93\u6709\u6703\u54E1\u4E86\u55CE\uFF1F</div>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                class: "btn btn-text text-primary fs-8 fs-md-7",
                to: "/login"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u7ACB\u5373\u767B\u5165`);
                  } else {
                    return [
                      createTextVNode("\u7ACB\u5373\u767B\u5165")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "input-wrapper fs-8 fs-md-7 mb-5" }, [
                  createVNode("div", null, [
                    createVNode("label", {
                      class: "form-label",
                      for: "name"
                    }, "\u59D3\u540D"),
                    createVNode(_component_VField, {
                      id: "name",
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      modelModifiers: { trim: true },
                      class: [errors.name && "verify-error", "form-control"],
                      name: "name",
                      label: "\u59D3\u540D",
                      type: "text",
                      placeholder: "\u8ACB\u8F38\u5165\u59D3\u540D",
                      rules: "required|min:2",
                      disabled: unref(apiPending)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "disabled"]),
                    createVNode("div", { class: "text-danger fs-8 fw-bold mt-2" }, toDisplayString(errors.name), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      class: "form-label",
                      for: "phone"
                    }, "\u624B\u6A5F\u865F\u78BC"),
                    createVNode(_component_VField, {
                      id: "phone",
                      modelValue: unref(form).phone,
                      "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                      modelModifiers: { trim: true },
                      class: [errors.phone && "verify-error", "form-control"],
                      name: "phone",
                      label: "\u624B\u6A5F\u865F\u78BC",
                      type: "text",
                      placeholder: "\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC",
                      rules: "required",
                      disabled: unref(apiPending)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "disabled"]),
                    createVNode("div", { class: "text-danger fs-8 fw-bold mt-2" }, toDisplayString(errors.phone), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      class: "form-label",
                      for: "birthday"
                    }, "\u751F\u65E5"),
                    createVNode("div", { class: "d-flex flex-row gap-2" }, [
                      createVNode(_component_VField, {
                        modelValue: unref(form).birthday.Y,
                        "onUpdate:modelValue": ($event) => unref(form).birthday.Y = $event,
                        class: "select flex-grow-1",
                        name: "birthdayY",
                        as: "select",
                        rules: "required",
                        disabled: unref(apiPending)
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(Array.from(
                            { length: 100 },
                            (_, i) => Number(unref(form).birthday.Y) - i
                          ), (item, index) => {
                            return openBlock(), createBlock("option", {
                              key: index,
                              value: item
                            }, toDisplayString(item) + " \u5E74 ", 9, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      createVNode(_component_VField, {
                        modelValue: unref(form).birthday.M,
                        "onUpdate:modelValue": ($event) => unref(form).birthday.M = $event,
                        class: "select flex-grow-1",
                        name: "birthdayM",
                        as: "select",
                        rules: "required",
                        disabled: unref(apiPending)
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(Array.from({ length: 12 }, (_, i) => i + 1), (item, index) => {
                            return openBlock(), createBlock("option", {
                              key: index,
                              value: item
                            }, toDisplayString(item) + " \u6708 ", 9, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      createVNode(_component_VField, {
                        modelValue: unref(form).birthday.D,
                        "onUpdate:modelValue": ($event) => unref(form).birthday.D = $event,
                        class: "select flex-grow-1",
                        name: "birthdayD",
                        as: "select",
                        rules: "required",
                        disabled: unref(apiPending)
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(Array.from({ length: unref(daysInMonth) }, (_, i) => i + 1), (item, index) => {
                            return openBlock(), createBlock("option", {
                              key: index,
                              value: item
                            }, toDisplayString(item) + " \u65E5 ", 9, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ]),
                    createVNode("div", { class: "text-danger fs-8 fw-bold mt-2" }, toDisplayString(errors.birthday), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      class: "form-label",
                      for: "address"
                    }, "\u5730\u5740"),
                    createVNode("div", { class: "select-wrapper mb-3" }, [
                      createVNode(_component_VField, {
                        modelValue: unref(form).address.city,
                        "onUpdate:modelValue": ($event) => unref(form).address.city = $event,
                        class: "select",
                        name: "addressCity",
                        as: "select",
                        rules: "required",
                        disabled: unref(apiPending)
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(cityTmpl), (item, index) => {
                            return openBlock(), createBlock("option", {
                              key: index,
                              value: item
                            }, toDisplayString(item), 9, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      createVNode(_component_VField, {
                        modelValue: unref(form).address.district,
                        "onUpdate:modelValue": ($event) => unref(form).address.district = $event,
                        class: "select",
                        name: "addressDistrict",
                        as: "select",
                        rules: "required",
                        disabled: unref(apiPending)
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(districtTmpl), (district, index) => {
                            return openBlock(), createBlock("option", {
                              key: index,
                              value: district
                            }, toDisplayString(district.district), 9, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ]),
                    createVNode(_component_VField, {
                      id: "address",
                      modelValue: unref(form).address.detail,
                      "onUpdate:modelValue": ($event) => unref(form).address.detail = $event,
                      modelModifiers: { trim: true },
                      class: [errors.address && "verify-error", "form-control"],
                      name: "address",
                      label: "\u8A73\u7D30\u5730\u5740",
                      type: "text",
                      placeholder: "\u8ACB\u8F38\u5165\u8A73\u7D30\u5730\u5740",
                      rules: "required",
                      disabled: unref(apiPending)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "disabled"]),
                    createVNode("div", { class: "text-danger fs-8 fw-bold mt-2" }, toDisplayString(errors.address), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      class: "form-check-label text-light",
                      for: "agree"
                    }, [
                      createVNode(_component_VField, {
                        id: "agree",
                        modelValue: unref(form).agree,
                        "onUpdate:modelValue": ($event) => unref(form).agree = $event,
                        class: "form-check-input",
                        name: "agree",
                        label: "\u4F7F\u7528\u898F\u7BC4",
                        type: "checkbox",
                        value: true,
                        rules: rules.agree,
                        disabled: unref(apiPending)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "disabled"]),
                      createTextVNode(" \u6211\u5DF2\u95B1\u8B80\u4E26\u540C\u610F\u672C\u7DB2\u7AD9\u500B\u8CC7\u4F7F\u7528\u898F\u7BC4 ")
                    ]),
                    createVNode("div", { class: "text-danger fs-8 fw-bold mt-2" }, toDisplayString(errors.agree), 1)
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("button", {
                    class: "btn btn-primary mb-3 w-100",
                    type: "submit"
                  }, "\u7ACB\u5373\u8A3B\u518A"),
                  createVNode("div", { class: "d-flex" }, [
                    createVNode("div", { class: "text-light me-2 fs-8 fs-md-7" }, "\u5DF2\u7D93\u6709\u6703\u54E1\u4E86\u55CE\uFF1F"),
                    createVNode(_component_NuxtLink, {
                      class: "btn btn-text text-primary fs-8 fs-md-7",
                      to: "/login"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u7ACB\u5373\u767B\u5165")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const signup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7f611229"]]);

export { signup as default };
//# sourceMappingURL=signup-_o7CgXSf.mjs.map
