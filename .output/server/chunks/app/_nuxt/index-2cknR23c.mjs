import { Form, Field } from 'vee-validate';
import __nuxt_component_2 from './Icon-_PazCQDQ.mjs';
import { useSSRContext, defineComponent, computed, ref, watchEffect, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { v as useCommonStore, k as useNuxtApp, t as useApi } from '../server.mjs';
import { u as useTmpl } from './useTmpl-YOe5SU_a.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
    const me = computed(() => commonStore.me);
    const form = ref({
      userId: me.value.id,
      oldPassword: "",
      newPassword: "",
      confirm: ""
    });
    const { $dayjs } = useNuxtApp();
    const initBirthday = () => {
      const [Y, M, D] = $dayjs(me.value.birthday).format("YYYY-M-D").split("-").map(Number);
      return { Y, M, D };
    };
    const { cityTmpl } = useTmpl();
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
      newPassword: (val) => {
        if (!val)
          return "\u65B0\u5BC6\u78BC \u70BA\u5FC5\u586B";
        if (!$validator.isLength(val, { min: 8 }))
          return "\u65B0\u5BC6\u78BC\u9700\u81F3\u5C11 8 \u78BC\u4EE5\u4E0A";
        if ($validator.isAlpha(val))
          return "\u65B0\u5BC6\u78BC\u4E0D\u80FD\u53EA\u6709\u82F1\u6587";
        if ($validator.isNumeric(val))
          return "\u65B0\u5BC6\u78BC\u4E0D\u80FD\u53EA\u6709\u6578\u5B57";
        if (!$validator.isAlphanumeric(val))
          return "\u65B0\u5BC6\u78BC\u9700\u81F3\u5C11 8 \u78BC\u4EE5\u4E0A\uFF0C\u4E26\u82F1\u6578\u6DF7\u5408";
        return {};
      }
    };
    const daysInMonth = computed(() => {
      const { Y, M } = form2.value.birthday;
      return $dayjs(`${Y}-${M}`, "YYYY-M").daysInMonth();
    });
    watchEffect(() => {
      if (daysInMonth.value < form2.value.birthday.D) {
        form2.value.birthday.D = 1;
      }
    });
    const districtTmpl = ref([]);
    const data = ref({
      password: {
        tool: false
      },
      info: {
        tool: false
      },
      submit: 0
    });
    const formRefs = ref([null, null]);
    const submit = (index2) => {
      data.value.submit = index2;
      uuRefresh();
    };
    const { updateUserApi, getUserApi, getTwzipcodeApi } = useApi();
    const { $swal } = useNuxtApp();
    const apiPending = computed(() => uuPending.value || gtPending.value || guPending.value);
    const { pending: uuPending, refresh: uuRefresh } = ([__temp, __restore] = withAsyncContext(() => updateUserApi({
      body: computed(() => {
        if (data.value.submit === 0) {
          const { userId, oldPassword, newPassword } = form.value;
          return {
            userId,
            oldPassword,
            newPassword
          };
        } else {
          const { birthday, address, ...res } = form2.value;
          const { Y, M, D } = birthday;
          return {
            ...res,
            address: {
              zipcode: address.district.zip_code,
              detail: address.detail
            },
            birthday: $dayjs(`${Y}-${M}-${D}`, "YYYY-M-D").format("YYYY-MM-DD")
          };
        }
      }),
      immediate: false,
      watch: false,
      onResponse({ response }) {
        if (response.status === 200) {
          if (response._data.status && data.value.submit === 0) {
            $swal.fire({ icon: "success", title: "\u5BC6\u78BC\u91CD\u8A2D\u6210\u529F" }).then(() => {
              form.value = {
                userId: me.value.id,
                oldPassword: "",
                newPassword: "",
                confirm: ""
              };
              data.value.password.tool = false;
            });
          }
          if (response._data.status && data.value.submit === 1) {
            $swal.fire({ icon: "success", title: "\u57FA\u672C\u8CC7\u6599\u4FEE\u6539\u6210\u529F" }).then(() => {
              guRefresh();
              data.value.info.tool = false;
            });
          }
        }
      }
    })), __temp = await __temp, __restore(), __temp);
    uuPending.value = false;
    const { pending: guPending, refresh: guRefresh } = ([__temp, __restore] = withAsyncContext(() => getUserApi({
      immediate: false,
      watch: false,
      onResponse({ response }) {
        if (response.status === 200) {
          const temp = response._data.result;
          temp.address.county = form2.value.address.city;
          temp.address.city = form2.value.address.district.district;
          commonStore.me = temp;
        }
      }
    })), __temp = await __temp, __restore(), __temp);
    guPending.value = false;
    const { pending: gtPending, refresh: gtRefresh } = ([__temp, __restore] = withAsyncContext(() => getTwzipcodeApi({
      query: computed(() => ({ city: form2.value.address.city })),
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
          form2.value.address.district = resultData[0];
        }
      }
    })), __temp = await __temp, __restore(), __temp);
    gtPending.value = false;
    gtRefresh();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VForm = Form;
      const _component_Icon = __nuxt_component_2;
      const _component_VField = Field;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "user-wrapper" }, _attrs))} data-v-7c7ea3ce>`);
      _push(ssrRenderComponent(_component_VForm, {
        ref: (el) => unref(formRefs)[0] = el,
        class: "card-wrapper lh-lg ls-1 bg-white",
        onSubmit: ($event) => submit(0)
      }, {
        default: withCtx(({ errors }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h6 class="fs-md-5 card-title m-0 fw-bold" data-v-7c7ea3ce${_scopeId}>\u4FEE\u6539\u5BC6\u78BC</h6><ul class="card-content list-unstyled" data-v-7c7ea3ce${_scopeId}><li data-v-7c7ea3ce${_scopeId}><div class="mb-2 text-gray-80" data-v-7c7ea3ce${_scopeId}>\u96FB\u5B50\u4FE1\u7BB1</div><div class="fw-bold" data-v-7c7ea3ce${_scopeId}>${ssrInterpolate(unref(me).email)}</div></li>`);
            if (!unref(data).password.tool) {
              _push2(`<li class="d-flex align-items-center gap-3" data-v-7c7ea3ce${_scopeId}><div data-v-7c7ea3ce${_scopeId}><div class="mb-2 text-gray-80" data-v-7c7ea3ce${_scopeId}>\u96FB\u5B50\u4FE1\u7BB1</div><div class="fw-bold ellipse-list" data-v-7c7ea3ce${_scopeId}><!--[-->`);
              ssrRenderList(10, (_, index2) => {
                _push2(ssrRenderComponent(_component_Icon, {
                  key: index2,
                  class: "ellipse",
                  name: "ion:ellipse"
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div><button class="btn btn-text ms-auto" type="button" data-v-7c7ea3ce${_scopeId}> \u91CD\u8A2D </button></li>`);
            } else {
              _push2(`<!--[--><li data-v-7c7ea3ce${_scopeId}><label class="form-label" for="oldPassword" data-v-7c7ea3ce${_scopeId}>\u5BC6\u78BC</label>`);
              _push2(ssrRenderComponent(_component_VField, {
                id: "oldPassword",
                modelValue: unref(form).oldPassword,
                "onUpdate:modelValue": ($event) => unref(form).oldPassword = $event,
                modelModifiers: { trim: true },
                class: [errors.oldPassword && "verify-error", "form-control"],
                name: "oldPassword",
                label: "\u5BC6\u78BC",
                type: "password",
                placeholder: "\u8ACB\u8F38\u5165\u820A\u5BC6\u78BC",
                rules: rules.password,
                disabled: unref(apiPending)
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-danger fs-8 fw-bold mt-2" data-v-7c7ea3ce${_scopeId}>${ssrInterpolate(errors.oldPassword)}</div></li><li data-v-7c7ea3ce${_scopeId}><label class="form-label" for="newPassword" data-v-7c7ea3ce${_scopeId}>\u65B0\u5BC6\u78BC</label>`);
              _push2(ssrRenderComponent(_component_VField, {
                id: "newPassword",
                modelValue: unref(form).newPassword,
                "onUpdate:modelValue": ($event) => unref(form).newPassword = $event,
                modelModifiers: { trim: true },
                class: [errors.newPassword && "verify-error", "form-control"],
                name: "newPassword",
                label: "\u65B0\u5BC6\u78BC",
                type: "password",
                placeholder: "\u8ACB\u8F38\u5165\u65B0\u5BC6\u78BC",
                rules: rules.newPassword,
                disabled: unref(apiPending)
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-danger fs-8 fw-bold mt-2" data-v-7c7ea3ce${_scopeId}>${ssrInterpolate(errors.newPassword)}</div></li><li data-v-7c7ea3ce${_scopeId}><label class="form-label" for="confirm" data-v-7c7ea3ce${_scopeId}>\u78BA\u8A8D\u65B0\u5BC6\u78BC</label>`);
              _push2(ssrRenderComponent(_component_VField, {
                id: "confirm",
                modelValue: unref(form).confirm,
                "onUpdate:modelValue": ($event) => unref(form).confirm = $event,
                modelModifiers: { trim: true },
                class: [errors.confirm && "verify-error", "form-control"],
                name: "confirm",
                label: "\u78BA\u8A8D\u65B0\u5BC6\u78BC",
                type: "password",
                placeholder: "\u8ACB\u518D\u8F38\u5165\u4E00\u6B21\u5BC6\u78BC",
                rules: "required|confirmed:@newPassword",
                disabled: unref(apiPending)
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-danger fs-8 fw-bold mt-2" data-v-7c7ea3ce${_scopeId}>${ssrInterpolate(errors.confirm)}</div></li><!--]-->`);
            }
            _push2(`</ul>`);
            if (unref(data).password.tool) {
              _push2(`<button class="btn btn-primary" type="submit" data-v-7c7ea3ce${_scopeId}>\u5132\u5B58\u8A2D\u5B9A</button>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("h6", { class: "fs-md-5 card-title m-0 fw-bold" }, "\u4FEE\u6539\u5BC6\u78BC"),
              createVNode("ul", { class: "card-content list-unstyled" }, [
                createVNode("li", null, [
                  createVNode("div", { class: "mb-2 text-gray-80" }, "\u96FB\u5B50\u4FE1\u7BB1"),
                  createVNode("div", { class: "fw-bold" }, toDisplayString(unref(me).email), 1)
                ]),
                !unref(data).password.tool ? (openBlock(), createBlock("li", {
                  key: 0,
                  class: "d-flex align-items-center gap-3"
                }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "mb-2 text-gray-80" }, "\u96FB\u5B50\u4FE1\u7BB1"),
                    createVNode("div", { class: "fw-bold ellipse-list" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(10, (_, index2) => {
                        return createVNode(_component_Icon, {
                          key: index2,
                          class: "ellipse",
                          name: "ion:ellipse"
                        });
                      }), 64))
                    ])
                  ]),
                  createVNode("button", {
                    class: "btn btn-text ms-auto",
                    type: "button",
                    onClick: ($event) => unref(data).password.tool = true
                  }, " \u91CD\u8A2D ", 8, ["onClick"])
                ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createVNode("li", null, [
                    createVNode("label", {
                      class: "form-label",
                      for: "oldPassword"
                    }, "\u5BC6\u78BC"),
                    createVNode(_component_VField, {
                      id: "oldPassword",
                      modelValue: unref(form).oldPassword,
                      "onUpdate:modelValue": ($event) => unref(form).oldPassword = $event,
                      modelModifiers: { trim: true },
                      class: [errors.oldPassword && "verify-error", "form-control"],
                      name: "oldPassword",
                      label: "\u5BC6\u78BC",
                      type: "password",
                      placeholder: "\u8ACB\u8F38\u5165\u820A\u5BC6\u78BC",
                      rules: rules.password,
                      disabled: unref(apiPending)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "rules", "disabled"]),
                    createVNode("div", { class: "text-danger fs-8 fw-bold mt-2" }, toDisplayString(errors.oldPassword), 1)
                  ]),
                  createVNode("li", null, [
                    createVNode("label", {
                      class: "form-label",
                      for: "newPassword"
                    }, "\u65B0\u5BC6\u78BC"),
                    createVNode(_component_VField, {
                      id: "newPassword",
                      modelValue: unref(form).newPassword,
                      "onUpdate:modelValue": ($event) => unref(form).newPassword = $event,
                      modelModifiers: { trim: true },
                      class: [errors.newPassword && "verify-error", "form-control"],
                      name: "newPassword",
                      label: "\u65B0\u5BC6\u78BC",
                      type: "password",
                      placeholder: "\u8ACB\u8F38\u5165\u65B0\u5BC6\u78BC",
                      rules: rules.newPassword,
                      disabled: unref(apiPending)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "rules", "disabled"]),
                    createVNode("div", { class: "text-danger fs-8 fw-bold mt-2" }, toDisplayString(errors.newPassword), 1)
                  ]),
                  createVNode("li", null, [
                    createVNode("label", {
                      class: "form-label",
                      for: "confirm"
                    }, "\u78BA\u8A8D\u65B0\u5BC6\u78BC"),
                    createVNode(_component_VField, {
                      id: "confirm",
                      modelValue: unref(form).confirm,
                      "onUpdate:modelValue": ($event) => unref(form).confirm = $event,
                      modelModifiers: { trim: true },
                      class: [errors.confirm && "verify-error", "form-control"],
                      name: "confirm",
                      label: "\u78BA\u8A8D\u65B0\u5BC6\u78BC",
                      type: "password",
                      placeholder: "\u8ACB\u518D\u8F38\u5165\u4E00\u6B21\u5BC6\u78BC",
                      rules: "required|confirmed:@newPassword",
                      disabled: unref(apiPending)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "disabled"]),
                    createVNode("div", { class: "text-danger fs-8 fw-bold mt-2" }, toDisplayString(errors.confirm), 1)
                  ])
                ], 64))
              ]),
              unref(data).password.tool ? (openBlock(), createBlock("button", {
                key: 0,
                class: "btn btn-primary",
                type: "submit"
              }, "\u5132\u5B58\u8A2D\u5B9A")) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_VForm, {
        ref: (el) => unref(formRefs)[1] = el,
        class: "card-wrapper lh-lg ls-1 bg-white",
        onSubmit: ($event) => submit(1)
      }, {
        default: withCtx(({ errors }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h6 class="fs-md-5 card-title m-0 fw-bold" data-v-7c7ea3ce${_scopeId}>\u57FA\u672C\u8CC7\u6599</h6><ul class="card-content list-unstyled" data-v-7c7ea3ce${_scopeId}>`);
            if (!unref(data).info.tool) {
              _push2(`<!--[--><li data-v-7c7ea3ce${_scopeId}><div class="mb-2 text-gray-80" data-v-7c7ea3ce${_scopeId}>\u59D3\u540D</div><div class="fw-bold" data-v-7c7ea3ce${_scopeId}>${ssrInterpolate(unref(me).name)}</div></li><li data-v-7c7ea3ce${_scopeId}><div class="mb-2 text-gray-80" data-v-7c7ea3ce${_scopeId}>\u624B\u6A5F\u865F\u78BC</div><div class="fw-bold" data-v-7c7ea3ce${_scopeId}>${ssrInterpolate(unref(me).phone)}</div></li><li data-v-7c7ea3ce${_scopeId}><div class="mb-2 text-gray-80" data-v-7c7ea3ce${_scopeId}>\u751F\u65E5</div><div class="fw-bold" data-v-7c7ea3ce${_scopeId}>${ssrInterpolate(unref($dayjs)(unref(me).birthday).format("YYYY \u5E74 MM \u6708 DD \u65E5"))}</div></li><li data-v-7c7ea3ce${_scopeId}><div class="mb-2 text-gray-80" data-v-7c7ea3ce${_scopeId}>\u5730\u5740</div><div class="fw-bold" data-v-7c7ea3ce${_scopeId}>${ssrInterpolate(unref(me).address.county + unref(me).address.city + unref(me).address.detail)}</div></li><!--]-->`);
            } else {
              _push2(`<!--[--><li data-v-7c7ea3ce${_scopeId}><label class="form-label" for="name" data-v-7c7ea3ce${_scopeId}>\u59D3\u540D</label>`);
              _push2(ssrRenderComponent(_component_VField, {
                id: "name",
                modelValue: unref(form2).name,
                "onUpdate:modelValue": ($event) => unref(form2).name = $event,
                modelModifiers: { trim: true },
                class: [errors.name && "verify-error", "form-control"],
                name: "name",
                label: "\u59D3\u540D",
                type: "text",
                placeholder: "\u8ACB\u8F38\u5165\u59D3\u540D",
                rules: "required|min:2",
                disabled: unref(apiPending)
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-danger fs-8 fw-bold mt-2" data-v-7c7ea3ce${_scopeId}>${ssrInterpolate(errors.name)}</div></li><li data-v-7c7ea3ce${_scopeId}><label class="form-label" for="phone" data-v-7c7ea3ce${_scopeId}>\u624B\u6A5F\u865F\u78BC</label>`);
              _push2(ssrRenderComponent(_component_VField, {
                id: "phone",
                modelValue: unref(form2).phone,
                "onUpdate:modelValue": ($event) => unref(form2).phone = $event,
                modelModifiers: { trim: true },
                class: [errors.phone && "verify-error", "form-control"],
                name: "phone",
                label: "\u624B\u6A5F\u865F\u78BC",
                type: "text",
                placeholder: "\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC",
                rules: "required",
                disabled: unref(apiPending)
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-danger fs-8 fw-bold mt-2" data-v-7c7ea3ce${_scopeId}>${ssrInterpolate(errors.phone)}</div></li><li data-v-7c7ea3ce${_scopeId}><label class="form-label" for="birthday" data-v-7c7ea3ce${_scopeId}>\u751F\u65E5</label><div class="d-flex flex-row gap-2" data-v-7c7ea3ce${_scopeId}>`);
              _push2(ssrRenderComponent(_component_VField, {
                modelValue: unref(form2).birthday.Y,
                "onUpdate:modelValue": ($event) => unref(form2).birthday.Y = $event,
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
                      (_2, i) => Number(unref(form2).birthday.Y) - i
                    ), (item, index2) => {
                      _push3(`<option${ssrRenderAttr("value", item)} data-v-7c7ea3ce${_scopeId2}>${ssrInterpolate(item)} \u5E74 </option>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(Array.from(
                        { length: 100 },
                        (_2, i) => Number(unref(form2).birthday.Y) - i
                      ), (item, index2) => {
                        return openBlock(), createBlock("option", {
                          key: index2,
                          value: item
                        }, toDisplayString(item) + " \u5E74 ", 9, ["value"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_VField, {
                modelValue: unref(form2).birthday.M,
                "onUpdate:modelValue": ($event) => unref(form2).birthday.M = $event,
                class: "select flex-grow-1",
                name: "birthdayM",
                as: "select",
                rules: "required",
                disabled: unref(apiPending)
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(Array.from({ length: 12 }, (_2, i) => i + 1), (item, index2) => {
                      _push3(`<option${ssrRenderAttr("value", item)} data-v-7c7ea3ce${_scopeId2}>${ssrInterpolate(item)} \u6708 </option>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(Array.from({ length: 12 }, (_2, i) => i + 1), (item, index2) => {
                        return openBlock(), createBlock("option", {
                          key: index2,
                          value: item
                        }, toDisplayString(item) + " \u6708 ", 9, ["value"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_VField, {
                modelValue: unref(form2).birthday.D,
                "onUpdate:modelValue": ($event) => unref(form2).birthday.D = $event,
                class: "select flex-grow-1",
                name: "birthdayD",
                as: "select",
                rules: "required",
                disabled: unref(apiPending)
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(Array.from({ length: unref(daysInMonth) }, (_2, i) => i + 1), (item, index2) => {
                      _push3(`<option${ssrRenderAttr("value", item)} data-v-7c7ea3ce${_scopeId2}>${ssrInterpolate(item)} \u65E5 </option>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(Array.from({ length: unref(daysInMonth) }, (_2, i) => i + 1), (item, index2) => {
                        return openBlock(), createBlock("option", {
                          key: index2,
                          value: item
                        }, toDisplayString(item) + " \u65E5 ", 9, ["value"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-danger fs-8 fw-bold mt-2" data-v-7c7ea3ce${_scopeId}>${ssrInterpolate(errors.birthday)}</div></li><li data-v-7c7ea3ce${_scopeId}><label class="form-label" for="address" data-v-7c7ea3ce${_scopeId}>\u5730\u5740</label><div class="select-wrapper mb-3" data-v-7c7ea3ce${_scopeId}>`);
              _push2(ssrRenderComponent(_component_VField, {
                modelValue: unref(form2).address.city,
                "onUpdate:modelValue": ($event) => unref(form2).address.city = $event,
                class: "select",
                name: "addressCity",
                as: "select",
                rules: "required",
                disabled: unref(apiPending)
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(cityTmpl), (item, index2) => {
                      _push3(`<option${ssrRenderAttr("value", item)} data-v-7c7ea3ce${_scopeId2}>${ssrInterpolate(item)}</option>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(cityTmpl), (item, index2) => {
                        return openBlock(), createBlock("option", {
                          key: index2,
                          value: item
                        }, toDisplayString(item), 9, ["value"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_VField, {
                modelValue: unref(form2).address.district,
                "onUpdate:modelValue": ($event) => unref(form2).address.district = $event,
                class: "select",
                name: "addressDistrict",
                as: "select",
                rules: "required",
                disabled: unref(apiPending)
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(districtTmpl), (district, index2) => {
                      _push3(`<option${ssrRenderAttr("value", district)} data-v-7c7ea3ce${_scopeId2}>${ssrInterpolate(district.district)}</option>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(districtTmpl), (district, index2) => {
                        return openBlock(), createBlock("option", {
                          key: index2,
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
                modelValue: unref(form2).address.detail,
                "onUpdate:modelValue": ($event) => unref(form2).address.detail = $event,
                modelModifiers: { trim: true },
                class: [errors.address && "verify-error", "form-control"],
                name: "address",
                label: "\u8A73\u7D30\u5730\u5740",
                type: "text",
                placeholder: "\u8ACB\u8F38\u5165\u8A73\u7D30\u5730\u5740",
                rules: "required",
                disabled: unref(apiPending)
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-danger fs-8 fw-bold mt-2" data-v-7c7ea3ce${_scopeId}>${ssrInterpolate(errors.address)}</div></li><!--]-->`);
            }
            _push2(`</ul>`);
            if (!unref(data).info.tool) {
              _push2(`<div class="d-flex" data-v-7c7ea3ce${_scopeId}><button class="btn btn-outline-primary" type="button" data-v-7c7ea3ce${_scopeId}> \u7DE8\u8F2F </button></div>`);
            } else {
              _push2(`<button class="btn btn-primary" type="submit" data-v-7c7ea3ce${_scopeId}>\u5132\u5B58\u8A2D\u5B9A</button>`);
            }
          } else {
            return [
              createVNode("h6", { class: "fs-md-5 card-title m-0 fw-bold" }, "\u57FA\u672C\u8CC7\u6599"),
              createVNode("ul", { class: "card-content list-unstyled" }, [
                !unref(data).info.tool ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode("li", null, [
                    createVNode("div", { class: "mb-2 text-gray-80" }, "\u59D3\u540D"),
                    createVNode("div", { class: "fw-bold" }, toDisplayString(unref(me).name), 1)
                  ]),
                  createVNode("li", null, [
                    createVNode("div", { class: "mb-2 text-gray-80" }, "\u624B\u6A5F\u865F\u78BC"),
                    createVNode("div", { class: "fw-bold" }, toDisplayString(unref(me).phone), 1)
                  ]),
                  createVNode("li", null, [
                    createVNode("div", { class: "mb-2 text-gray-80" }, "\u751F\u65E5"),
                    createVNode("div", { class: "fw-bold" }, toDisplayString(unref($dayjs)(unref(me).birthday).format("YYYY \u5E74 MM \u6708 DD \u65E5")), 1)
                  ]),
                  createVNode("li", null, [
                    createVNode("div", { class: "mb-2 text-gray-80" }, "\u5730\u5740"),
                    createVNode("div", { class: "fw-bold" }, toDisplayString(unref(me).address.county + unref(me).address.city + unref(me).address.detail), 1)
                  ])
                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createVNode("li", null, [
                    createVNode("label", {
                      class: "form-label",
                      for: "name"
                    }, "\u59D3\u540D"),
                    createVNode(_component_VField, {
                      id: "name",
                      modelValue: unref(form2).name,
                      "onUpdate:modelValue": ($event) => unref(form2).name = $event,
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
                  createVNode("li", null, [
                    createVNode("label", {
                      class: "form-label",
                      for: "phone"
                    }, "\u624B\u6A5F\u865F\u78BC"),
                    createVNode(_component_VField, {
                      id: "phone",
                      modelValue: unref(form2).phone,
                      "onUpdate:modelValue": ($event) => unref(form2).phone = $event,
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
                  createVNode("li", null, [
                    createVNode("label", {
                      class: "form-label",
                      for: "birthday"
                    }, "\u751F\u65E5"),
                    createVNode("div", { class: "d-flex flex-row gap-2" }, [
                      createVNode(_component_VField, {
                        modelValue: unref(form2).birthday.Y,
                        "onUpdate:modelValue": ($event) => unref(form2).birthday.Y = $event,
                        class: "select flex-grow-1",
                        name: "birthdayY",
                        as: "select",
                        rules: "required",
                        disabled: unref(apiPending)
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(Array.from(
                            { length: 100 },
                            (_, i) => Number(unref(form2).birthday.Y) - i
                          ), (item, index2) => {
                            return openBlock(), createBlock("option", {
                              key: index2,
                              value: item
                            }, toDisplayString(item) + " \u5E74 ", 9, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      createVNode(_component_VField, {
                        modelValue: unref(form2).birthday.M,
                        "onUpdate:modelValue": ($event) => unref(form2).birthday.M = $event,
                        class: "select flex-grow-1",
                        name: "birthdayM",
                        as: "select",
                        rules: "required",
                        disabled: unref(apiPending)
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(Array.from({ length: 12 }, (_, i) => i + 1), (item, index2) => {
                            return openBlock(), createBlock("option", {
                              key: index2,
                              value: item
                            }, toDisplayString(item) + " \u6708 ", 9, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      createVNode(_component_VField, {
                        modelValue: unref(form2).birthday.D,
                        "onUpdate:modelValue": ($event) => unref(form2).birthday.D = $event,
                        class: "select flex-grow-1",
                        name: "birthdayD",
                        as: "select",
                        rules: "required",
                        disabled: unref(apiPending)
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(Array.from({ length: unref(daysInMonth) }, (_, i) => i + 1), (item, index2) => {
                            return openBlock(), createBlock("option", {
                              key: index2,
                              value: item
                            }, toDisplayString(item) + " \u65E5 ", 9, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ]),
                    createVNode("div", { class: "text-danger fs-8 fw-bold mt-2" }, toDisplayString(errors.birthday), 1)
                  ]),
                  createVNode("li", null, [
                    createVNode("label", {
                      class: "form-label",
                      for: "address"
                    }, "\u5730\u5740"),
                    createVNode("div", { class: "select-wrapper mb-3" }, [
                      createVNode(_component_VField, {
                        modelValue: unref(form2).address.city,
                        "onUpdate:modelValue": ($event) => unref(form2).address.city = $event,
                        class: "select",
                        name: "addressCity",
                        as: "select",
                        rules: "required",
                        disabled: unref(apiPending)
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(cityTmpl), (item, index2) => {
                            return openBlock(), createBlock("option", {
                              key: index2,
                              value: item
                            }, toDisplayString(item), 9, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      createVNode(_component_VField, {
                        modelValue: unref(form2).address.district,
                        "onUpdate:modelValue": ($event) => unref(form2).address.district = $event,
                        class: "select",
                        name: "addressDistrict",
                        as: "select",
                        rules: "required",
                        disabled: unref(apiPending)
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(districtTmpl), (district, index2) => {
                            return openBlock(), createBlock("option", {
                              key: index2,
                              value: district
                            }, toDisplayString(district.district), 9, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ]),
                    createVNode(_component_VField, {
                      id: "address",
                      modelValue: unref(form2).address.detail,
                      "onUpdate:modelValue": ($event) => unref(form2).address.detail = $event,
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
                  ])
                ], 64))
              ]),
              !unref(data).info.tool ? (openBlock(), createBlock("div", {
                key: 0,
                class: "d-flex"
              }, [
                createVNode("button", {
                  class: "btn btn-outline-primary",
                  type: "button",
                  onClick: ($event) => unref(data).info.tool = true
                }, " \u7DE8\u8F2F ", 8, ["onClick"])
              ])) : (openBlock(), createBlock("button", {
                key: 1,
                class: "btn btn-primary",
                type: "submit"
              }, "\u5132\u5B58\u8A2D\u5B9A"))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7c7ea3ce"]]);

export { index as default };
//# sourceMappingURL=index-2cknR23c.mjs.map
