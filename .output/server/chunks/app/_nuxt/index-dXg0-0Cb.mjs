import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-nvHjMUuE.mjs';
import __nuxt_component_2 from './Icon-_PazCQDQ.mjs';
import { useSSRContext, defineComponent, ref, computed, withAsyncContext, watch, withCtx, createTextVNode, unref, createVNode } from 'vue';
import { t as useApi } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './index-b-_tUYOc.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'dayjs';
import 'dayjs/locale/zh-tw.js';
import 'validator';

const _imports_0 = "" + publicAssetsURL("img/desktop/news.png");
const _imports_1 = "" + publicAssetsURL("img/desktop/deco-1.png");
const _imports_2 = "" + publicAssetsURL("img/desktop/deco-2.png");
const _imports_3 = "" + publicAssetsURL("img/desktop/line.png");
const _imports_4 = "" + publicAssetsURL("img/desktop/leftButton.png");
const _imports_5 = "" + publicAssetsURL("img/desktop/rightButton.png");
const _imports_6 = "" + publicAssetsURL("img/desktop/deco-3.png");
const _imports_7 = "" + publicAssetsURL("img/desktop/dot.png");
const _imports_8 = "" + publicAssetsURL("img/desktop/foodName.png");
const _imports_9 = "" + publicAssetsURL("img/desktop/trafficName.png");
const _imports_10 = "" + publicAssetsURL("img/desktop/car.png");
const _imports_11 = "" + publicAssetsURL("img/desktop/train.png");
const _imports_12 = "" + publicAssetsURL("img/desktop/luxurycar.png");
const _imports_13 = "" + publicAssetsURL("img/desktop/deco-4.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const newsTmpl = ref([]);
    const culinaryTmpl = ref([]);
    let imageArray;
    let showImg = ref(0);
    const transitionName = ref("right-in");
    const roomsTmpl = ref([]);
    const { newsApi, culinaryApi, getRoomsApi } = useApi();
    computed(() => newsPending.value || culinaryPending.value || roomsPending.value);
    const {
      pending: newsPending,
      refresh: newsRefresh
    } = ([__temp, __restore] = withAsyncContext(() => newsApi({
      immediate: false,
      onResponse({ response }) {
        if (response.status === 200) {
          const temp = response._data.result;
          newsTmpl.value = temp;
        }
      },
      onResponseError({ error }) {
        console.log("news api Error:", error);
      }
    })), __temp = await __temp, __restore(), __temp);
    newsRefresh();
    const {
      pending: culinaryPending,
      refresh: culinaryRefresh
    } = ([__temp, __restore] = withAsyncContext(() => culinaryApi({
      immediate: false,
      onResponse({ response }) {
        if (response.status === 200) {
          const temp = response._data.result;
          culinaryTmpl.value = temp;
        }
      },
      onResponseError({ error }) {
        console.log("culinary api Error:", error);
      }
    })), __temp = await __temp, __restore(), __temp);
    culinaryRefresh();
    watch(showImg, function(nIdx, oIdx) {
      transitionName.value = nIdx > oIdx ? "right-in" : "left-in";
    });
    const {
      pending: roomsPending,
      refresh: roomsRefresh
    } = ([__temp, __restore] = withAsyncContext(() => getRoomsApi({
      immediate: false,
      onResponse({ response }) {
        if (response.status === 200) {
          const temp = response._data.result;
          roomsTmpl.value = temp;
          imageArray = temp.map((it) => {
            return it.imageUrl;
          });
        }
      },
      onResponseError({ response }) {
        console.log("getRoomsApi Error:", response);
      }
    })), __temp = await __temp, __restore(), __temp);
    roomsRefresh();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b6867328><article data-v-b6867328><div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-v-b6867328><div class="carousel-indicators" data-v-b6867328><button class="active" type="button" aria-current="true" aria-label="Slide 1" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" data-v-b6867328></button><button type="button" aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" data-v-b6867328></button><button type="button" aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" data-v-b6867328></button></div><div class="carousel-inner position-relative" data-v-b6867328><div class="carousel-item active banner-outer" data-v-b6867328><div class="d-block banner-img" data-v-b6867328></div><div class="banner-left-content text-primary-dark" data-v-b6867328><div class="zh-title" data-v-b6867328>\u4EAB\u6A02\u9152\u5E97</div><div class="en-title" data-v-b6867328>Enjoyment Luxury Hotel</div><div class="line" data-v-b6867328></div></div><div class="banner-right-content" data-v-b6867328></div><div class="banner-middle-content" data-v-b6867328><div class="middle-content-title text-white" data-v-b6867328>\u9AD8\u96C4</div><div class="middle-content-title text-white" data-v-b6867328>\u8C6A\u83EF\u4F4F\u5BBF\u4E4B\u9078</div><div class="text-white banner-slogn" data-v-b6867328> \u6211\u5011\u81F4\u529B\u65BC\u70BA\u60A8\u63D0\u4F9B\u7121\u8207\u502B\u6BD4\u7684\u5962\u83EF\u9AD4\u9A57\u8207\u512A\u8CEA\u670D\u52D9 </div><button class="banner-button d-flex justify-content-end align-items-center" type="button" data-v-b6867328>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "banner-button-text",
        to: "/rooms"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u7ACB\u5373\u8A02\u623F`);
          } else {
            return [
              createTextVNode("\u7ACB\u5373\u8A02\u623F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="banner-button-line" data-v-b6867328></div></button></div></div></div></div></article><article class="bg-goose-yellow position-relative news-outer" data-v-b6867328><div class="news-top-absolute" data-v-b6867328></div><div class="news-bottom-absolute" data-v-b6867328></div><div class="container news-content" data-v-b6867328><div class="row" data-v-b6867328><div class="col-12 col-md-12 col-lg-2" data-v-b6867328><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-b6867328></div><div class="col-12 col-md-7 col-lg-10" data-v-b6867328><!--[-->`);
      ssrRenderList(unref(newsTmpl), (news, index2) => {
        _push(`<div class="card card-outer" data-v-b6867328><div class="news-img-desktop" data-v-b6867328><img${ssrRenderAttr("src", `/img/desktop/newsImg-${index2 + 1}.png`)} alt="" class="news-img ratio ratio-1x1" data-v-b6867328></div><div class="card-body d-flex justify-content-start align-items-center" data-v-b6867328><div class="card-content" data-v-b6867328><div class="card-title" data-v-b6867328>${ssrInterpolate(news.title)}</div><p class="card-text" data-v-b6867328>${ssrInterpolate(news.description)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></article><article class="bg-deep about-outer position-relative" data-v-b6867328><div class="about-img" data-v-b6867328></div><div class="text-white about-main" data-v-b6867328><div class="about-img-text" data-v-b6867328></div><div class="about-content" data-v-b6867328><p class="about-content-text" data-v-b6867328> \u4EAB\u6A02\u9152\u5E97\uFF0C\u4F4D\u65BC\u7F8E\u9E97\u5CF6\u9AD8\u96C4\u7684\u5FC3\u81DF\u5730\u5E36\uFF0C\u662F\u9019\u5EA7\u57CE\u5E02\u7684\u7480\u74A8\u7470\u5BF6\u8207\u50B2\u4EBA\u5730\u6A19\u3002 \u6211\u5011\u7684\u5B58\u5728\uFF0C\u4E0D\u50C5\u50C5\u662F\u70BA\u4E86\u63D0\u4F9B\u5962\u83EF\u7684\u4F4F\u5BBF\u9AD4\u9A57\uFF0C\u66F4\u662F\u70BA\u4E86\u5C07\u9AD8\u96C4\u7684\u7F8E\u9E97\u8207\u6D3B\u529B\uFF0C\u737B\u7D66\u6BCF\u4E00\u4F4D\u849E\u81E8\u7684\u65C5\u5BA2\u3002 </p><p class="about-content-text" data-v-b6867328> \u6211\u5011\u7684\u9152\u5E97\uFF0C\u64C1\u6709\u6642\u5C1A\u5178\u96C5\u7684\u88DD\u6F62\uFF0C\u6BCF\u4E00\u500B\u7D30\u7BC0\u90FD\u5145\u6EFF\u8457\u85DD\u8853\u8207\u8A2D\u8A08\u7684\u7CBE\u7DFB\u3002 \u6211\u5011\u7684\u54E1\u5DE5\uFF0C\u90FD\u4EE5\u71B1\u60C5\u7684\u670D\u52D9\u8207\u5C08\u696D\u7684\u614B\u5EA6\uFF0C\u8B93\u6BCF\u4E00\u4F4D\u5BA2\u4EBA\u90FD\u80FD\u611F\u53D7\u5230\u8CD3\u81F3\u5982\u6B78\u7684\u6EAB\u6696\u3002 </p><p class="about-content-text" data-v-b6867328> \u5728\u9019\u88E1\uFF0C\u60A8\u53EF\u4EE5\u9059\u671B\u7A97\u5916\uFF0C\u6B23\u8CDE\u9AD8\u96C4\u7684\u57CE\u5E02\u666F\u8272\uFF0C\u611F\u53D7\u9019\u5EA7\u57CE\u5E02\u7684\u7E41\u83EF\u8207\u6D3B\u529B\uFF1B\u60A8\u4E5F\u53EF\u4EE5\u8212\u9069\u5730\u5750\u5728\u6211\u5011\u7684\u9910\u5EF3\uFF0C\u54C1\u5690\u7CBE\u7DFB\u7684\u4F73\u991A\uFF0C\u9AD4\u9A57\u7121\u8207\u502B\u6BD4\u7684\u5473\u89BA\u76DB\u5BB4\u3002 </p><p class="about-content-text" data-v-b6867328> \u4EAB\u6A02\u9152\u5E97\uFF0C\u4E0D\u50C5\u662F\u60A8\u5728\u9AD8\u96C4\u7684\u4F4F\u5BBF\u4E4B\u9078\uFF0C\u66F4\u662F\u60A8\u611F\u53D7\u9AD8\u96C4\u9B45\u529B\u7684\u6700\u4F73\u821E\u53F0\u3002\u6211\u5011\u671F\u5F85\u8457\u60A8\u7684\u849E\u81E8\uFF0C\u8B93\u6211\u5011\u5171\u540C\u7DE8\u7E54\u4E00\u6BB5\u96E3\u5FD8\u7684\u9AD8\u96C4\u6545\u4E8B\u3002 </p></div></div></article><article class="position-relative room-outer" data-v-b6867328><img class="position-absolute deco-top"${ssrRenderAttr("src", _imports_1)} alt="" data-v-b6867328><img style="${ssrRenderStyle({ "z-index": "1" })}" class="position-absolute deco-bottom"${ssrRenderAttr("src", _imports_2)} alt="" data-v-b6867328><div class="row" data-v-b6867328><div class="col-12 col-lg-6 mx-lg-0 mx-1" style="${ssrRenderStyle({ "z-index": "9" })}" data-v-b6867328><div class="slides" data-v-b6867328><div tag="div"${ssrRenderAttr("name", unref(transitionName))} data-v-b6867328><!--[-->`);
      ssrRenderList(unref(imageArray), (item, idx) => {
        _push(`<div class="ratio ratio-1x1" style="${ssrRenderStyle(idx == unref(showImg) ? null : { display: "none" })}" data-v-b6867328><img${ssrRenderAttr("src", item)} data-v-b6867328><div class="btn-group d-flex flex-row justify-content-center align-items-end" style="${ssrRenderStyle({ "z-index": "10" })}" data-v-b6867328><!--[-->`);
        ssrRenderList(5, (num) => {
          _push(`<div class="page" data-v-b6867328>`);
          _push(ssrRenderComponent(_component_Icon, {
            class: "text-white",
            name: "heroicons-solid:minus"
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></div><!--[-->`);
      ssrRenderList(unref(roomsTmpl), (room, id) => {
        _push(`<div class="col-12 col-lg-6 mx-lg-0 mx-1 text-light room-content" style="${ssrRenderStyle([
          { "z-index": "9" },
          id == unref(showImg) ? null : { display: "none" }
        ])}" data-v-b6867328><h2 class="room-title" data-v-b6867328>${ssrInterpolate(room.name)}</h2><div class="fs-7" data-v-b6867328>${ssrInterpolate(room.description)}</div><h3 class="room-price" data-v-b6867328>NT$ ${ssrInterpolate(room.price)}</h3>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "btn room-button fs-5 d-flex justify-content-end align-items-center",
          to: "/rooms"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u67E5\u770B\u66F4\u591A <img class="room-button-line"${ssrRenderAttr("src", _imports_3)} alt="" data-v-b6867328${_scopeId}>`);
            } else {
              return [
                createTextVNode(" \u67E5\u770B\u66F4\u591A "),
                createVNode("img", {
                  class: "room-button-line",
                  src: _imports_3,
                  alt: ""
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="room-arrow d-flex justify-content-end" data-v-b6867328><div class="prev" data-v-b6867328><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-b6867328></div><div class="next" data-v-b6867328><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-b6867328></div></div></div>`);
      });
      _push(`<!--]--></div></article><article class="bg-goose-yellow position-relative food-outer" data-v-b6867328><img class="food-deco"${ssrRenderAttr("src", _imports_6)} alt="" data-v-b6867328><img class="position-absolute food-dot"${ssrRenderAttr("src", _imports_7)} alt="" data-v-b6867328><img class="position-absolute food-title-absolute"${ssrRenderAttr("src", _imports_8)} alt="" data-v-b6867328><div class="position-absolute food-card-box" data-v-b6867328><!--[-->`);
      ssrRenderList(unref(culinaryTmpl), (culinary, i) => {
        _push(`<div class="card-content" data-v-b6867328><img class="position-relative ratio ratio-1x1"${ssrRenderAttr("src", `/img/desktop/food-${i + 1}.png`)} alt="" data-v-b6867328><div class="card-bg position-absolute py-4" data-v-b6867328><div class="d-flex mb-4" data-v-b6867328><h5 class="ms-4 fs-5" data-v-b6867328>${ssrInterpolate(culinary.title)}</h5><div class="ms-auto me-4 fs-8" data-v-b6867328><div class="fs-7 card-week" data-v-b6867328>${ssrInterpolate(culinary.diningTime)}</div></div></div><div class="mx-4" data-v-b6867328><div class="card-directions fs-ml-7 fs-8" data-v-b6867328>${ssrInterpolate(culinary.description)}</div></div></div></div>`);
      });
      _push(`<!--]--></div></article><article class="bg-deep position-relative traffic-outer" data-v-b6867328><div class="container" data-v-b6867328><div class="row" data-v-b6867328><div class="col-12 col-lg-3 traffic-name" data-v-b6867328><img${ssrRenderAttr("src", _imports_9)} alt="" data-v-b6867328></div><div class="col-12 col-lg-9" data-v-b6867328></div><div class="col-12 col-lg-3 mb-3" data-v-b6867328><p class="fs-7 text-white" data-v-b6867328>\u53F0\u7063\u9AD8\u96C4\u5E02\u65B0\u8208\u5340\u516D\u89D2\u8DEF123\u865F</p></div><div class="col-lg-9" data-v-b6867328></div><div class="col-12 traffic-map" data-v-b6867328><div class="traffic-map-img" data-v-b6867328></div></div><div class="col-12 col-lg-4 mb-4" data-v-b6867328><img class="mb-3"${ssrRenderAttr("src", _imports_10)} alt="" data-v-b6867328><h5 class="text-white mb-2" data-v-b6867328>\u81EA\u884C\u958B\u8ECA</h5><div class="fs-7 text-white" data-v-b6867328> \u5982\u679C\u60A8\u9078\u64C7\u81EA\u884C\u958B\u8ECA\uFF0C\u53EF\u4EE5\u900F\u904E\u570B\u9053\u4E00\u865F\u4E0B\u9AD8\u96C4\u4EA4\u6D41\u9053\uFF0C\u5F80\u5E02\u5340\u65B9\u5411\u884C\u99DB\uFF0C\u4E26\u4F9D\u8DEF\u6A19\u6307\u793A\u5373\u53EF\u62B5\u9054\u300C\u4EAB\u6A02\u9152\u5E97\u300D\u3002\u98EF\u5E97\u5167\u8A2D\u6709\u505C\u8ECA\u5834\uFF0C\u8B93\u60A8\u505C\u8ECA\u65B9\u4FBF\u3002 </div></div><div class="col-12 col-lg-4 mb-4" data-v-b6867328><img class="mb-3"${ssrRenderAttr("src", _imports_11)} alt="" data-v-b6867328><h5 class="text-white mb-2" data-v-b6867328>\u9AD8\u9435/\u706B\u8ECA</h5><div class="text-white fs-7" data-v-b6867328> \u5982\u679C\u60A8\u662F\u642D\u4E58\u9AD8\u9435\u6216\u706B\u8ECA\uFF0C\u53EF\u65BC\u5DE6\u71DF\u7AD9\u4E0B\u8ECA\uFF0C\u5916\u982D\u6709\u8A08\u7A0B\u8ECA\u7AD9\uFF0C\u642D\u4E58\u8A08\u7A0B\u8ECA\u7D0420\u5206\u9418\u5373\u53EF\u62B5\u9054\u3002\u6216\u8005\u60A8\u4E5F\u53EF\u4EE5\u8F49\u4E58\u6377\u904B\u7D05\u7DDA\u81F3\u4E2D\u592E\u516C\u5712\u7AD9\u4E0B\u8ECA\uFF0C\u6B65\u884C\u7D0410\u5206\u9418\u4FBF\u53EF\u62B5\u9054\u3002 </div></div><div class="col-12 col-lg-4 mb-4" data-v-b6867328><img class="mb-3"${ssrRenderAttr("src", _imports_12)} alt="" data-v-b6867328><h5 class="text-white mb-2" data-v-b6867328>\u79AE\u8CD3\u8ECA\u670D\u52D9</h5><div class="fs-7 text-white" data-v-b6867328> \u627F\u5104\u9152\u5E97\u63D0\u4F9B\u79AE\u8CD3\u5C08\u8ECA\u63A5\u9001\u670D\u52D9\uFF0C\u4F46\u56E0\u76EE\u7684\u5730\u9060\u8FD1\u6703\u6709\u4E0D\u540C\u7684\u6536\u8CBB\uFF0C\u8ACB\u64A5\u6253\u96FB\u8A71\u5C07\u7531\u5C08\u4EBA\u70BA\u60A8\u670D\u52D9\u6D3D\u8A62\u5C08\u7DDA\uFF1A(07)123-4567 </div></div></div></div><img class="traffic-deco"${ssrRenderAttr("src", _imports_13)} alt="" data-v-b6867328></article></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b6867328"]]);

export { index as default };
//# sourceMappingURL=index-dXg0-0Cb.mjs.map
