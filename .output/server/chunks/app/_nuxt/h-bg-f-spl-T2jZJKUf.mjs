import { _ as __nuxt_component_0 } from './PageHeader-QqnUiDNf.mjs';
import { _ as __nuxt_component_1 } from './nuxt-img-IgI-1Ysf.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-nvHjMUuE.mjs';
import { _ as __nuxt_component_1$1 } from './PageFooter-cOG11wt_.mjs';
import { v as useCommonStore } from '../server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import './Icon-_PazCQDQ.mjs';
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
import './index-tbNGurtz.mjs';
import '@unhead/shared';
import 'unhead';
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'dayjs';
import 'dayjs/locale/zh-tw.js';
import 'validator';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "h-bg-f-spl",
  __ssrInlineRender: true,
  setup(__props) {
    const commonStore = useCommonStore();
    const name = computed(() => !("name" in commonStore.me) ? "" : commonStore.me.name);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_PageFooter = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-bg-f-spl-wrapper flex-column min-h-screen d-flex bg-background" }, _attrs))} data-v-90753f0e>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        class: "sticky-top",
        status: "bg"
      }, null, _parent));
      _push(`<div class="h-bg-f-spl-banner" data-v-90753f0e><div class="container fs-3 fs-md-1 text-light fw-bold lh-lg ls-1" data-v-90753f0e>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "user-photo",
        src: "/img/user.png"
      }, null, _parent));
      _push(` Hello\uFF0C${ssrInterpolate(unref(name))}</div></div><div class="h-bg-f-spl-content container-xl" data-v-90753f0e><ul class="nav list-unstyled d-flex" data-v-90753f0e><li class="nav-item" data-v-90753f0e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/user"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u500B\u4EBA\u8CC7\u6599`);
          } else {
            return [
              createTextVNode("\u500B\u4EBA\u8CC7\u6599")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" data-v-90753f0e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/user/orders"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u6211\u7684\u8A02\u55AE`);
          } else {
            return [
              createTextVNode("\u6211\u7684\u8A02\u55AE")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_PageFooter, { status: "spl" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/h-bg-f-spl.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hBgFSpl = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-90753f0e"]]);

export { hBgFSpl as default };
//# sourceMappingURL=h-bg-f-spl-T2jZJKUf.mjs.map
