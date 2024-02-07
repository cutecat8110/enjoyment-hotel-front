import { _ as __nuxt_component_0 } from './PageHeader-QqnUiDNf.mjs';
import { _ as __nuxt_component_1 } from './PageFooter-cOG11wt_.mjs';
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
import './nuxt-img-IgI-1Ysf.mjs';
import './index-tbNGurtz.mjs';
import './Icon-_PazCQDQ.mjs';
import './index-b-_tUYOc.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PageHeader = __nuxt_component_0;
  const _component_PageFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-bg-f-wrapper flex-column min-h-screen d-flex" }, _attrs))} data-v-4bb03c1d>`);
  _push(ssrRenderComponent(_component_PageHeader, {
    class: "sticky-top",
    status: "bg"
  }, null, _parent));
  _push(`<main data-v-4bb03c1d>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_PageFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/h-bg-f.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hBgF = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4bb03c1d"]]);

export { hBgF as default };
//# sourceMappingURL=h-bg-f-2AHMjbzg.mjs.map
