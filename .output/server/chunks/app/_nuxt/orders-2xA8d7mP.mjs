import { _ as __nuxt_component_1 } from './nuxt-img-IgI-1Ysf.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-nvHjMUuE.mjs';
import __nuxt_component_2 from './Icon-_PazCQDQ.mjs';
import { useSSRContext, defineComponent, ref, computed, withAsyncContext, inject, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { t as useApi } from '../server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderTeleport, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { T as TheRoomsInfo } from './TheRoomsInfo-HxgM7GuC.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import './index-tbNGurtz.mjs';
import '@unhead/shared';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './index-b-_tUYOc.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'unhead';
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'dayjs';
import 'dayjs/locale/zh-tw.js';
import 'validator';
import './ic_Size-GWftFk2l.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "orders",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const currData = ref({});
    const data = ref([]);
    const weekTmpl = ref(["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"]);
    const more = ref(false);
    const { getOrdersApi, deleteOrdersApi } = useApi();
    const apiPending = computed(() => goPending.value);
    const { pending: goPending, refresh: goRefresh } = ([__temp, __restore] = withAsyncContext(() => getOrdersApi({
      immediate: false,
      watch: false,
      onResponse({ response }) {
        if (response.status === 200) {
          const tempResult = response._data.result.filter((i) => i.status == 0);
          data.value = tempResult;
          const temp = tempResult[0];
          const { amenityInfo, facilityInfo, areaInfo, bedInfo, maxPeople } = tempResult[0].roomId;
          temp.roomDetail = { amenityInfo, facilityInfo, areaInfo, bedInfo, maxPeople };
          currData.value = temp;
          more.value = false;
        }
      }
    })), __temp = await __temp, __restore(), __temp);
    goPending.value = false;
    goRefresh();
    inject("reload", () => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "user-wrapper order-wrapper" }, _attrs))} data-v-8988a966>`);
      if (Object.keys(unref(currData)).length !== 0) {
        _push(`<div class="card-wrapper trip-wrapper lh-lg ls-1 bg-white" data-v-8988a966><div data-v-8988a966><div class="text-gray-80 mb-2" data-v-8988a966>\u9810\u8A02\u53C3\u8003\u7DE8\u865F\uFF1A ${ssrInterpolate(unref(currData)._id)}</div><div class="fs-5 fw-bold" data-v-8988a966>\u5373\u5C07\u4F86\u7684\u884C\u7A0B</div></div><div class="rounded-3 overflow-hidden" data-v-8988a966>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "order-img object-cover",
          src: unref(currData).roomId.imageUrl,
          alt: "Room_1"
        }, null, _parent));
        _push(`</div><div class="text-gray-80" data-v-8988a966><div class="fs-6 fw-bold mb-4" data-v-8988a966>${ssrInterpolate(unref(currData).roomId.name)}\uFF0C${ssrInterpolate(_ctx.$dayjs(unref(currData).checkOutDate).diff(_ctx.$dayjs(unref(currData).checkInDate), "d"))} \u665A | \u4F4F\u5BBF\u4EBA\u6578\uFF1A${ssrInterpolate(unref(currData).peopleNum)} \u4F4D </div><div data-v-8988a966><h5 class="room-info-title-border title-border-primary ps-3 mb-2 fs-7" data-v-8988a966> \u5165\u4F4F\uFF1A${ssrInterpolate(_ctx.$dayjs(unref(currData).checkInDate).format("M \u6708 D\u65E5") + "\u661F\u671F" + unref(weekTmpl)[_ctx.$dayjs(unref(currData).checkInDate).day()])}\uFF0C15:00 \u53EF\u5165\u4F4F </h5><h5 class="room-info-title-border title-border-gray ps-3 mb-2 fs-7 mb-4" data-v-8988a966> \u9000\u623F\uFF1A${ssrInterpolate(_ctx.$dayjs(unref(currData).checkOutDate).format("M \u6708 D\u65E5") + "\u661F\u671F" + unref(weekTmpl)[_ctx.$dayjs(unref(currData).checkOutDate).day()])}\uFF0C12:00 \u524D\u9000\u623F </h5></div><span data-v-8988a966> NT$${ssrInterpolate(unref(currData).roomId.price.toLocaleString("zh-TW", {
          currency: "TWD",
          style: "decimal"
        }))}</span></div><div class="border-bottom" data-v-8988a966></div>`);
        _push(ssrRenderComponent(TheRoomsInfo, {
          "room-detail": unref(currData).roomDetail,
          "mb-space": "4"
        }, null, _parent));
        _push(`<div class="d-flex gap-3 check-wrapper" data-v-8988a966><button class="btn btn-outline-primary" type="button" data-bs-target="#ModalDeleteOrder" data-bs-toggle="modal" data-v-8988a966> \u53D6\u6D88\u9810\u8A02 </button>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "btn btn-primary",
          to: `/room/${unref(currData).roomId._id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u67E5\u770B\u8A73\u60C5`);
            } else {
              return [
                createTextVNode("\u67E5\u770B\u8A73\u60C5")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="card-wrapper history-wrapper lh-lg ls-1 bg-white" data-v-8988a966><h6 class="fs-md-5 card-title m-0 fw-bold" data-v-8988a966>\u6B77\u53F2\u8A02\u55AE</h6><!--[-->`);
      ssrRenderList(unref(data), (list, index) => {
        _push(`<!--[-->`);
        if (index <= 2 || unref(more)) {
          _push(`<!--[--><div class="history-container" data-v-8988a966><div class="rounded-3 overflow-hidden" data-v-8988a966>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            class: "history-img object-cover",
            src: list.roomId.imageUrl,
            alt: "Room_1"
          }, null, _parent));
          _push(`</div><div class="history-content text-gray-80" data-v-8988a966><div data-v-8988a966>\u9810\u8A02\u53C3\u8003\u7DE8\u865F\uFF1A ${ssrInterpolate(list._id)}</div><div class="fs-6 fw-bold" data-v-8988a966>${ssrInterpolate(list.roomId.name)}</div><div data-v-8988a966><div class="mb-2" data-v-8988a966> \u4F4F\u5BBF\u5929\u6578\uFF1A${ssrInterpolate(_ctx.$dayjs(list.checkOutDate).diff(_ctx.$dayjs(list.checkInDate), "d"))} \u665A </div><div data-v-8988a966>\u4F4F\u5BBF\u4EBA\u6578\uFF1A${ssrInterpolate(list.peopleNum)} \u4F4D</div></div><div data-v-8988a966><h5 class="room-info-title-border title-border-primary ps-3 mb-2 fs-7" data-v-8988a966> \u5165\u4F4F\uFF1A${ssrInterpolate(_ctx.$dayjs(list.checkInDate).format("M \u6708 D\u65E5") + "\u661F\u671F" + unref(weekTmpl)[_ctx.$dayjs(list.checkInDate).day()])}</h5><h5 class="room-info-title-border title-border-gray ps-3 mb-2 fs-7" data-v-8988a966> \u9000\u623F\uFF1A${ssrInterpolate(_ctx.$dayjs(list.checkOutDate).format("M \u6708 D\u65E5") + "\u661F\u671F" + unref(weekTmpl)[_ctx.$dayjs(list.checkOutDate).day()])}</h5></div><span class="fw-bold" data-v-8988a966>NT$${ssrInterpolate(list.roomId.price)}</span></div></div><div class="border-bottom" data-v-8988a966></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]-->`);
      if (unref(data).length == 0) {
        _push(`<!--[-->\u60A8\u76EE\u524D\u5C1A\u7121\u4EFB\u4F55\u8A02\u55AE\u8A02\u55AE<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (unref(data).length > 3 && !unref(more)) {
        _push(`<button class="btn btn-outline-primary" type="button" data-v-8988a966> \u67E5\u770B\u66F4\u591A `);
        _push(ssrRenderComponent(_component_Icon, { name: "ic:round-keyboard-arrow-down" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div id="ModalDeleteOrder" class="modal fade" aria-hidden="true" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" tabindex="-1" data-v-8988a966><div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" data-v-8988a966><div class="modal-content" data-v-8988a966><div class="modal-header align-items-start" data-v-8988a966><h5 id="exampleModalLabel" class="modal-title fs-6 text-center flex-fill py-6" data-v-8988a966> \u78BA\u5B9A\u8981\u53D6\u6D88\u6B64\u623F\u578B\u7684\u9810\u8A02\u55CE\uFF1F </h5><button class="btn-close" type="button" aria-label="Close" data-bs-dismiss="modal" data-v-8988a966></button></div><div class="modal-footer d-flex flex-row" data-v-8988a966><button class="btn btn-outline-primary flex-fill" data-bs-dismiss="modal"${ssrIncludeBooleanAttr(unref(apiPending)) ? " disabled" : ""} data-v-8988a966> \u95DC\u9589\u8996\u7A97 </button><button class="btn btn-primary flex-fill" data-bs-dismiss="modal"${ssrIncludeBooleanAttr(unref(apiPending)) ? " disabled" : ""} data-v-8988a966> \u78BA\u5B9A\u53D6\u6D88 </button></div></div></div></div>`);
      }, "body", false, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const orders = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8988a966"]]);

export { orders as default };
//# sourceMappingURL=orders-2xA8d7mP.mjs.map
