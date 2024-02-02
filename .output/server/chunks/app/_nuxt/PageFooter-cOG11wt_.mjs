import { _ as __nuxt_component_1$1 } from './nuxt-img-IgI-1Ysf.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-nvHjMUuE.mjs';
import __nuxt_component_2 from './Icon-_PazCQDQ.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageFooter",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_2;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "page-footer bg-background text-light" }, _attrs))} data-v-d7b22c37>`);
      if (props.status == "spl") {
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "page-footer-img",
          src: "/svg/bg/bg_line_lg.svg"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="page-footer-container container-md d-flex flex-column" data-v-d7b22c37><div class="footer-top" data-v-d7b22c37><div class="social-wrapper" data-v-d7b22c37>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/logo.png",
              height: "72"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/logo.png",
                height: "72"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div data-v-d7b22c37><button class="rounded-circle btn btn-outline-light social-link" type="button" data-v-d7b22c37>`);
      _push(ssrRenderComponent(_component_Icon, { name: "bi:line" }, null, _parent));
      _push(`</button><button class="rounded-circle btn btn-outline-light social-link" type="button" data-v-d7b22c37>`);
      _push(ssrRenderComponent(_component_Icon, { name: "bi:instagram" }, null, _parent));
      _push(`</button></div></div><ul class="info-list text-nowrap m-0 p-0" data-v-d7b22c37><li data-v-d7b22c37><div class="fw-bold" data-v-d7b22c37>TEL</div><div data-v-d7b22c37>+886-7-1234567</div></li><li data-v-d7b22c37><div class="fw-bold" data-v-d7b22c37>FAX</div><div data-v-d7b22c37>+886-7-1234567</div></li><li data-v-d7b22c37><div class="fw-bold" data-v-d7b22c37>MAIL</div><div data-v-d7b22c37>elh@hexschool.com</div></li><li data-v-d7b22c37><div class="fw-bold" data-v-d7b22c37>WEB</div><div data-v-d7b22c37>www.elhhexschool.com.tw</div></li></ul></div><div class="footer-down" data-v-d7b22c37><div class="d-flex gap-3 align-items-center" data-v-d7b22c37>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn btn-ghost footer-link",
        target: "_blank",
        to: "https://freyja-7ddy.onrender.com/swagger"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "cib:swagger" }, null, _parent2, _scopeId));
            _push2(` Swagger `);
          } else {
            return [
              createVNode(_component_Icon, { name: "cib:swagger" }),
              createTextVNode(" Swagger ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` | `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn btn-ghost footer-link",
        target: "_blank",
        to: "/guideline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ic:round-book" }, null, _parent2, _scopeId));
            _push2(` Guideline `);
          } else {
            return [
              createVNode(_component_Icon, { name: "ic:round-book" }),
              createTextVNode(" Guideline ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div data-v-d7b22c37>Copyright \xA9 2024 by Hao,Tori,Renee / \u7D20\u6750\u53D6\u81EA\u7DB2\u8DEF\uFF0C\u50C5\u4F5C\u5B78\u7FD2\u7528\u9014</div></div></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/PageFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d7b22c37"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=PageFooter-cOG11wt_.mjs.map
