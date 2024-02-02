import { _ as __nuxt_component_1 } from './nuxt-img-IgI-1Ysf.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-nvHjMUuE.mjs';
import { useSSRContext, defineComponent, ref, reactive, computed, withAsyncContext, mergeProps, unref, withCtx, createVNode } from 'vue';
import { u as useRoute, t as useApi } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { T as TheRoomsInfo } from './TheRoomsInfo-HxgM7GuC.mjs';
import { u as useReserveRoomInfoStore } from './room-Ka97noNw.mjs';
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
import 'unhead';
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'dayjs';
import 'dayjs/locale/zh-tw.js';
import 'validator';
import './Icon-_PazCQDQ.mjs';
import './index-b-_tUYOc.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './ic_Size-GWftFk2l.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const roomId = route.params.id || "";
    const reserveRoomInfo = useReserveRoomInfoStore();
    ref(reserveRoomInfo.checkInDate);
    ref(reserveRoomInfo.checkInDate);
    ref(reserveRoomInfo.peopleNum);
    let roomInfo = reactive({
      ...reserveRoomInfo.defaultRoomInfo,
      ...reserveRoomInfo.enlargeRoomInfo
    });
    const { getRoomInfoApi } = useApi();
    computed(() => lPending.value);
    const { pending: lPending } = ([__temp, __restore] = withAsyncContext(() => getRoomInfoApi(roomId, {
      onResponse({ response }) {
        if (!response.status) {
          return;
        }
        const resData = response._data.result;
        roomInfo = {
          id: resData._id,
          name: resData.name,
          imageUrl: resData.imageUrl,
          imageUrlList: resData.imageUrlList,
          description: resData.description,
          price: resData.price,
          discountPrice: 0,
          roomDetail: {
            amenityInfo: resData.amenityInfo,
            facilityInfo: resData.facilityInfo,
            areaInfo: resData.areaInfo,
            bedInfo: resData.bedInfo,
            maxPeople: resData.maxPeople
          }
        };
      },
      onResponseError({ error }) {
        console.log("error: ", error);
      }
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-0 px-lg-xl bg-primary-tint" }, _attrs))} data-v-1cdfcbca><div class="pt-0 py-md-5 py-lg-xl mb-5" data-v-1cdfcbca><div class="position-relative" data-v-1cdfcbca><div class="row d-none d-md-flex px-3" data-v-1cdfcbca><div class="col-6 pe-0" data-v-1cdfcbca><div class="rounded-end-0 rounded-4 overflow-hidden" style="${ssrRenderStyle({ "max-height": "100%" })}" data-v-1cdfcbca><div class="ratio ratio-4x3" data-v-1cdfcbca>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "w-auto h-100 position-absolute top-50 start-50 translate-middle",
        src: unref(roomInfo).imageUrl,
        alt: `${unref(roomInfo).name}_0`
      }, null, _parent));
      _push(`</div></div></div><div class="col-6" data-v-1cdfcbca><div class="w-100 h-auto rounded-start-0 rounded-4 overflow-hidden" data-v-1cdfcbca><div class="row align-content-between h-100" data-v-1cdfcbca><!--[-->`);
      ssrRenderList([...unref(roomInfo).imageUrlList.slice(0, 4)], (image, idx) => {
        _push(`<div class="${ssrRenderClass([{ "mb-2": idx < 2 }, "col-6 ps-0"])}" data-v-1cdfcbca><div class="ratio ratio-4x3 overflow-hidden" data-v-1cdfcbca>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "w-auto h-100 position-absolute top-50 start-50 translate-middle",
          src: image,
          alt: `${unref(roomInfo).name}_${idx + 1}`
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="d-flex d-md-none" data-v-1cdfcbca><div id="banner_img" class="carousel slide w-100" data-bs-ride="carousel" data-v-1cdfcbca><div class="carousel-indicators ms-3" data-v-1cdfcbca><!--[-->`);
      ssrRenderList([unref(roomInfo).imageUrl, ...unref(roomInfo).imageUrlList], (image, idx) => {
        _push(`<button class="${ssrRenderClass(`${idx === 0 ? "active" : ""}`)}" type="button"${ssrRenderAttr("aria-current", `${idx === 0}`)}${ssrRenderAttr("aria-label", `Slide ${idx + 1}`)}${ssrRenderAttr("data-bs-slide-to", `${idx}`)} data-bs-target="#banner_img" data-v-1cdfcbca></button>`);
      });
      _push(`<!--]--></div><div class="carousel-inner" data-v-1cdfcbca><!--[-->`);
      ssrRenderList([unref(roomInfo).imageUrl, ...unref(roomInfo).imageUrlList], (image, idx) => {
        _push(`<div class="${ssrRenderClass([{ "active": idx === 0 }, "carousel-item"])}" data-bs-interval="5000" data-v-1cdfcbca><div class="ratio ratio-16x9" data-v-1cdfcbca>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "w-100 h-auto position-absolute top-50 start-50 translate-middle",
          src: image,
          alt: `${unref(roomInfo).name}_${idx}`
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div><button class="btn btn-outline-primary btn-more position-absolute z-1" data-v-1cdfcbca>\u770B\u66F4\u591A</button></div></div><div class="container-xl" data-v-1cdfcbca><div class="row" data-v-1cdfcbca><div class="col-md-7" data-v-1cdfcbca><h2 class="text-primary h1 fw-bold mb-3" data-v-1cdfcbca>${ssrInterpolate(unref(roomInfo).name)}</h2><p class="text-gray-80 mb-4 mb-lg-xl" data-v-1cdfcbca>${ssrInterpolate(unref(roomInfo).description)}</p>`);
      _push(ssrRenderComponent(TheRoomsInfo, {
        "room-detail": unref(roomInfo).roomDetail,
        "mb-space": "xl"
      }, null, _parent));
      _push(`</div><div class="col-md-5 mb-4 mb-lg-0" data-v-1cdfcbca><div class="bg-light rounded-4 p-4 p-lg-5" data-v-1cdfcbca><h4 class="s-5 fw-bold pb-3 border-bottom mb-4 mb-lg-5" data-v-1cdfcbca>\u9810\u8A02\u623F\u578B</h4><h3 class="fs-2 text-gray-80 fw-bold mb-2" data-v-1cdfcbca>${ssrInterpolate(unref(roomInfo).name)}</h3><p class="text-gray-80 mb-4 mb-lg-5" data-v-1cdfcbca>${ssrInterpolate(unref(roomInfo).description)}</p><span class="d-block text-primary fs-5 fwold mb-4 mb-5" data-v-1cdfcbca> NT$ ${ssrInterpolate(unref(roomInfo).price)}</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: {
          path: "/reserve",
          query: { id: unref(roomInfo).id }
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="btn btn-primary w-100" data-v-1cdfcbca${_scopeId}>\u7ACB\u5373\u9810\u8A02</span>`);
          } else {
            return [
              createVNode("span", { class: "btn btn-primary w-100" }, "\u7ACB\u5373\u9810\u8A02")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-12" data-v-1cdfcbca><h5 class="room-info-title-border title-border-primary fw-bold fs-5 ps-3 mb-3 mb-lg-4" data-v-1cdfcbca> \u8A02\u623F\u9808\u77E5 </h5><ol class="pb-5 mb-lg-xl text-gray-80" data-v-1cdfcbca><li data-v-1cdfcbca>\u5165\u4F4F\u6642\u9593\u70BA\u4E0B\u53483\u9EDE\uFF0C\u9000\u623F\u6642\u9593\u70BA\u4E0A\u534812\u9EDE\u3002</li><li data-v-1cdfcbca>\u5982\u9700\u5EF6\u9072\u9000\u623F\uFF0C\u8ACB\u63D0\u524D\u8207\u6AC3\u6AAF\u4EBA\u54E1\u806F\u7E6B\uFF0C\u8996\u7576\u65E5\u623F\u6CC1\u53EF\u80FD\u6703\u7522\u751F\u984D\u5916\u8CBB\u7528\u3002</li><li data-v-1cdfcbca>\u8ACB\u52FF\u5728\u623F\u9593\u5167\u62BD\u7159\uFF0C\u82E5\u6709\u62BD\u7159\u9700\u6C42\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8A2D\u5728\u9152\u5E97\u5404\u6A13\u5C64\u7684\u5C08\u7528\u5438\u7159\u5340\u3002</li><li data-v-1cdfcbca>\u82E5\u767C\u73FE\u623F\u9593\u5167\u7684\u8A2D\u65BD\u6709\u640D\u58DE\u6216\u907A\u5931\uFF0C\u5C07\u6703\u6309\u7167\u50F9\u503C\u6536\u53D6\u8CE0\u511F\u91D1\u3002</li><li data-v-1cdfcbca>\u8ACB\u611B\u60DC\u6211\u5011\u7684\u623F\u9593\u8207\u516C\u5171\u7A7A\u9593\uFF0C\u4E26\u4FDD\u6301\u6574\u6F54\u3002</li><li data-v-1cdfcbca>\u5982\u9700\u984D\u5916\u7684\u6BDB\u5DFE\u3001\u76E5\u6D17\u7528\u54C1\u6216\u5176\u4ED6\u7269\u54C1\uFF0C\u8ACB\u806F\u7E6B\u6AC3\u6AAF\u3002</li><li data-v-1cdfcbca>\u6211\u5011\u63D0\u4F9B\u514D\u8CBB\u7684Wi-Fi\uFF0C\u5BC6\u78BC\u53EF\u4EE5\u5728\u6AC3\u6AAF\u6216\u662F\u623F\u9593\u5167\u7684\u8CC7\u8A0A\u5361\u4E0A\u627E\u5230\u3002</li><li data-v-1cdfcbca>\u8ACB\u52FF\u5E36\u8D70\u9152\u5E97\u623F\u5167\u7684\u7269\u54C1\uFF0C\u5982\u6709\u9700\u8981\u8CFC\u8CB7\uFF0C\u8ACB\u8207\u6211\u5011\u7684\u6AC3\u6AAF\u4EBA\u54E1\u806F\u7E6B\u3002</li><li data-v-1cdfcbca>\u6211\u5011\u63D0\u4F9B24\u5C0F\u6642\u6AC3\u6AAF\u670D\u52D9\uFF0C\u82E5\u6709\u4EFB\u4F55\u9700\u6C42\u6216\u7591\u554F\uFF0C\u6B61\u8FCE\u96A8\u6642\u8A62\u554F\u3002</li><li data-v-1cdfcbca>\u70BA\u4E86\u78BA\u4FDD\u6240\u6709\u5BA2\u4EBA\u7684\u5B89\u5168\uFF0C\u8ACB\u52FF\u5728\u8D70\u5ECA\u6216\u516C\u5171\u5340\u57DF\u5927\u8072\u55A7\u5629\uFF0C\u4E26\u9075\u5B88\u9152\u5E97\u7684\u5176\u4ED6\u898F\u5B9A\u3002</li></ol></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/room/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1cdfcbca"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-W3yNlFHA.mjs.map
