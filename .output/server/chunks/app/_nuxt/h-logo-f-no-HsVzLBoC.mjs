import { _ as __nuxt_component_0 } from './PageHeader-QqnUiDNf.mjs';
import { _ as __nuxt_component_1 } from './nuxt-img-IgI-1Ysf.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import './nuxt-link-nvHjMUuE.mjs';
import '../server.mjs';
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
import './Icon-_PazCQDQ.mjs';
import './index-b-_tUYOc.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-tbNGurtz.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PageHeader = __nuxt_component_0;
  const _component_NuxtImg = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-logo-f-no-wrapper d-flex min-h-screen bg-background" }, _attrs))} data-v-86f6bb0b>`);
  _push(ssrRenderComponent(_component_PageHeader, {
    class: "fixed-top z-1",
    status: "logo"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "fixed-top h-logo-f-no-img z-0",
    src: "/img/register.png"
  }, null, _parent));
  _push(`<div class="h-logo-f-no-content d-flex justify-content-center align-items-center z-0 z-md-2" data-v-86f6bb0b>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/h-logo-f-no.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hLogoFNo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-86f6bb0b"]]);

export { hLogoFNo as default };
//# sourceMappingURL=h-logo-f-no-HsVzLBoC.mjs.map
