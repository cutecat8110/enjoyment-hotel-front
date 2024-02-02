import __nuxt_component_2 from './Icon-_PazCQDQ.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-nvHjMUuE.mjs';
import { useSSRContext, defineComponent, ref, computed, withAsyncContext, resolveComponent, unref, withCtx, createVNode } from 'vue';
import { t as useApi } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "rooms",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const roomsTmpl = ref([]);
    const { getRoomsApi } = useApi();
    computed(() => roomsPending.value);
    const {
      pending: roomsPending,
      refresh: roomsRefresh
    } = ([__temp, __restore] = withAsyncContext(() => getRoomsApi({
      immediate: false,
      onResponse({ response }) {
        if (response.status === 200) {
          const temp = response._data.result;
          console.log("response._data.result:", response._data.result);
          roomsTmpl.value = temp;
        }
      },
      onResponseError({ response }) {
        console.log("getRoomsApi api Error:", response);
      }
    })), __temp = await __temp, __restore(), __temp);
    roomsRefresh();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_dir = resolveComponent("dir");
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-86dbf8c9><article data-v-86dbf8c9><div id="carouselExampleIndicators" class="carousel slide position-relative banner-img-mask" data-bs-ride="carousel" data-v-86dbf8c9><div class="carousel-indicators" data-v-86dbf8c9><button class="active" type="button" aria-current="true" aria-label="Slide 1" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" data-v-86dbf8c9></button><button type="button" aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" data-v-86dbf8c9></button><button type="button" aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" data-v-86dbf8c9></button></div><div class="carousel-inner" data-v-86dbf8c9><div class="carousel-item active" data-v-86dbf8c9><div class="banner-img d-block w-100" data-v-86dbf8c9></div></div><div class="carousel-item" data-v-86dbf8c9><div class="banner-img d-block w-100" data-v-86dbf8c9></div></div><div class="carousel-item" data-v-86dbf8c9><div class="banner-img d-block w-100" data-v-86dbf8c9></div></div></div><div class="banner-content position-absolute d-lg-flex justify-content-lg-between" data-v-86dbf8c9><div data-v-86dbf8c9><p class="fs-4 fs-md-2 fw-bold text-primary" data-v-86dbf8c9>\u4EAB\u6A02\u9152\u5E97</p><p class="fs-7 fs-md-5 fw-bold text-primary" data-v-86dbf8c9>Enjoyment Luxury Hotel</p><div class="line" data-v-86dbf8c9></div></div><div data-v-86dbf8c9><p class="right-content fs-3 fs-md-1 fw-bold text-light" data-v-86dbf8c9>\u5BA2\u623F\u65C5\u5BBF</p></div></div></div></article><article class="bg-color" data-v-86dbf8c9><div class="container" data-v-86dbf8c9><div class="row" data-v-86dbf8c9><div class="fs-6 fs-md-8 fw-bold col-12 room-choose" data-v-86dbf8c9>\u623F\u578B\u9078\u64C7</div><div class="fs-1 fs-md-3 fw-bold text-primary col-12" data-v-86dbf8c9>\u5404\u7A2E\u623F\u578B\uFF0C\u4EFB\u60A8\u6311\u9078</div></div><!--[-->`);
      ssrRenderList(unref(roomsTmpl), (room, index) => {
        _push(`<div class="row" data-v-86dbf8c9><div class="col-12" data-v-86dbf8c9><div class="card mb-3 mb-md-4 card-outer" data-v-86dbf8c9><div class="row g-0" data-v-86dbf8c9><div class="col-12 col-lg-7" data-v-86dbf8c9><div${ssrRenderAttr("id", `carousel_${index}`)} class="carousel slide" data-bs-ride="carousel" data-v-86dbf8c9><div class="carousel-indicators" data-v-86dbf8c9><!--[-->`);
        ssrRenderList(room.imageUrlList, (list, i) => {
          _push(`<button class="${ssrRenderClass(`${i === 0 ? "active" : ""}`)}" type="button"${ssrRenderAttr("aria-current", `${i === 0}`)}${ssrRenderAttr("aria-label", `Slide${i + 1}`)}${ssrRenderAttr("data-bs-slide-to", `${i}`)}${ssrRenderAttr("data-bs-target", `#carousel_${index}`)} data-v-86dbf8c9></button>`);
        });
        _push(`<!--]--></div><div class="carousel-inner" data-v-86dbf8c9><!--[-->`);
        ssrRenderList(room.imageUrlList, (list, i) => {
          _push(`<div class="${ssrRenderClass([i === 0 ? "active" : "", "carousel-item ratio ratio-16x9"])}" data-v-86dbf8c9><img${ssrRenderAttr("src", `${list}`)} alt="" data-v-86dbf8c9></div>`);
        });
        _push(`<!--]--></div><button class="carousel-control-prev" type="button" data-bs-slide="prev"${ssrRenderAttr("data-bs-target", `#carousel_${index}`)} data-v-86dbf8c9><span class="carousel-control-prev-icon" aria-hidden="true" data-v-86dbf8c9></span><span class="visually-hidden" data-v-86dbf8c9>Previous</span></button><button class="carousel-control-next" type="button" data-bs-slide="next"${ssrRenderAttr("data-bs-target", `#carousel_${index}`)} data-v-86dbf8c9><span class="carousel-control-next-icon" aria-hidden="true" data-v-86dbf8c9></span><span class="visually-hidden" data-v-86dbf8c9>Next</span></button></div></div><div class="col-12 col-lg-5" data-v-86dbf8c9><div class="card-body room-content" data-v-86dbf8c9><p class="fs-2 fs-md-3 mb-md-2" data-v-86dbf8c9>${ssrInterpolate(room.name)}</p><p class="fs-7 fs-md-8" data-v-86dbf8c9>${ssrInterpolate(room.description)}</p><div class="room-set d-flex" data-v-86dbf8c9><div class="room-set-detail" data-v-86dbf8c9><div class="icon-space" data-v-86dbf8c9></div><p class="fs-8 fs-md-7" data-v-86dbf8c9>${ssrInterpolate(room.areaInfo)}</p></div><div class="room-set-detail" data-v-86dbf8c9>`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "icon-bed",
          name: "ic:round-king-bed"
        }, null, _parent));
        _push(`<p class="fs-8 fs-md-7" data-v-86dbf8c9>${ssrInterpolate(room.bedInfo)}</p></div><div class="room-set-detail" data-v-86dbf8c9>`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "icon-people",
          name: "ic:round-person"
        }, null, _parent));
        _push(`<p class="fs-8 fs-md-7" data-v-86dbf8c9>2-4 \u4EBA</p></div></div>`);
        _push(ssrRenderComponent(_component_dir, { class: "room-line" }, null, _parent));
        _push(`<div class="room-price d-flex justify-content-between align-items-center" data-v-86dbf8c9><p data-v-86dbf8c9>NT$ ${ssrInterpolate(room.price)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/room/${room._id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                class: "icon-forward",
                name: "ic:round-arrow-forward"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  class: "icon-forward",
                  name: "ic:round-arrow-forward"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></article></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/rooms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rooms = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-86dbf8c9"]]);

export { rooms as default };
//# sourceMappingURL=rooms-pUNarTe7.mjs.map
