import __nuxt_component_2 from './Icon-_PazCQDQ.mjs';
import { useSSRContext, defineComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './ic_Size-GWftFk2l.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TheRoomsInfo",
  __ssrInlineRender: true,
  props: {
    mbSpace: {},
    showPart: { type: Boolean },
    roomDetail: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-96942fbc>`);
      if (!_ctx.showPart) {
        _push(`<div data-v-96942fbc><h5 class="room-info-title-border title-border-primary fw-bold fs-5 ps-3 mb-3 mb-lg-4" data-v-96942fbc> \u623F\u578B\u57FA\u672C\u8CC7\u8A0A </h5><ul class="${ssrRenderClass([`mb-lg-${_ctx.mbSpace}`, "list-unstyled d-flex mb-4"])}" data-v-96942fbc><li class="info-icon-wrap d-flex flex-column justify-content-center p-3 me-3 bg-light rounded-3 text-gray-80" data-v-96942fbc><span class="mb-2" data-v-96942fbc><img${ssrRenderAttr("src", _imports_0)} alt="ic_Size" data-v-96942fbc></span> ${ssrInterpolate((_a = _ctx.roomDetail) == null ? void 0 : _a.areaInfo)}</li><li class="info-icon-wrap d-flex flex-column justify-content-center p-3 me-3 bg-light rounded-3 text-gray-80" data-v-96942fbc><span class="mb-2" data-v-96942fbc>`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "fs-5 fw-blod text-primary",
          name: "ic:round-king-bed"
        }, null, _parent));
        _push(`</span> ${ssrInterpolate(_ctx.roomDetail.bedInfo)}</li><li class="info-icon-wrap d-flex flex-column justify-content-center p-3 bg-light rounded-3 text-gray-80" data-v-96942fbc><span class="mb-2" data-v-96942fbc>`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "fs-5 fw-blod text-primary",
          name: "ic:round-person"
        }, null, _parent));
        _push(`</span> ${ssrInterpolate(_ctx.roomDetail.maxPeople)} \u4EBA </li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!_ctx.showPart) {
        _push(`<div data-v-96942fbc><h5 class="room-info-title-border title-border-primary fw-bold fs-5 ps-3 mb-3 mb-lg-4" data-v-96942fbc> \u623F\u9593\u683C\u5C40 </h5><ul class="${ssrRenderClass([`mb-lg-${_ctx.mbSpace}`, "list-unstyled row row-cols-2 row-cols-xl-5 p-4 bg-light rounded-3 mb-4 mx-0"])}" data-v-96942fbc><li class="col fw-bold text-gray-80" data-v-96942fbc>`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "fs-5 fw-blod text-primary",
          name: "ic:round-check"
        }, null, _parent));
        _push(` \u5E02\u666F </li><li class="col fw-bold text-gray-80" data-v-96942fbc>`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "fs-5 fw-blod text-primary",
          name: "ic:round-check"
        }, null, _parent));
        _push(` \u7368\u7ACB\u885B\u6D74 </li><li class="col fw-bold text-gray-80" data-v-96942fbc>`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "fs-5 fw-blod text-primary",
          name: "ic:round-check"
        }, null, _parent));
        _push(` \u5BA2\u5EF3 </li><li class="col fw-bold text-gray-80" data-v-96942fbc>`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "fs-5 fw-blod text-primary",
          name: "ic:round-check"
        }, null, _parent));
        _push(` \u66F8\u623F </li><li class="col fw-bold text-gray-80" data-v-96942fbc>`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "fs-5 fw-blod text-primary",
          name: "ic:round-check"
        }, null, _parent));
        _push(` \u6A13\u5C64\u96FB\u68AF </li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h5 class="room-info-title-border title-border-primary fw-bold fs-5 ps-3 mb-3 mb-lg-4" data-v-96942fbc> \u623F\u5167\u8A2D\u5099 </h5><ul class="${ssrRenderClass([[
        `mb-lg-${_ctx.mbSpace}`,
        { "row-cols-xl-5": !_ctx.showPart },
        { "row-cols-xl-3 border": _ctx.showPart }
      ], "list-unstyled row flex-wrap row-cols-2 p-4 bg-light rounded-3 mb-4 mx-0"])}" data-v-96942fbc><!--[-->`);
      ssrRenderList(_ctx.roomDetail.facilityInfo, (facility) => {
        _push(`<li class="col fw-bold text-gray-80" data-v-96942fbc>`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "fs-5 fw-blod text-primary",
          name: "ic:round-check"
        }, null, _parent));
        _push(` ${ssrInterpolate(facility.title)}</li>`);
      });
      _push(`<!--]--></ul><h5 class="room-info-title-border title-border-primary fw-bold fs-5 ps-3 mb-3 mb-lg-4" data-v-96942fbc> \u5099\u54C1\u63D0\u4F9B </h5><ul class="${ssrRenderClass([[
        `mb-lg-${_ctx.mbSpace}`,
        { "row-cols-xl-5": !_ctx.showPart },
        { "row-cols-xl-3 border": _ctx.showPart }
      ], "list-unstyled row flex-wrap row-cols-2 p-4 bg-light rounded-3 mb-4 mx-0"])}" data-v-96942fbc><!--[-->`);
      ssrRenderList(_ctx.roomDetail.amenityInfo, (amenity) => {
        _push(`<li class="col fw-bold text-gray-80" data-v-96942fbc>`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "fs-5 fw-blod text-primary",
          name: "ic:round-check"
        }, null, _parent));
        _push(` ${ssrInterpolate(amenity.title)}</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rooms/TheRoomsInfo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TheRoomsInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-96942fbc"]]);

export { TheRoomsInfo as T };
//# sourceMappingURL=TheRoomsInfo-HxgM7GuC.mjs.map
