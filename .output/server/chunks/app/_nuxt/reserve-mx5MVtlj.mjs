import { _ as __nuxt_component_0 } from './nuxt-link-nvHjMUuE.mjs';
import __nuxt_component_2 from './Icon-_PazCQDQ.mjs';
import { u as useRoute, e as navigateTo, t as useApi, k as useNuxtApp, _ as __nuxt_component_2$1 } from '../server.mjs';
import { useSSRContext, defineComponent, withAsyncContext, reactive, ref, computed, watch, mergeProps, unref, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useReserveRoomInfoStore } from './room-Ka97noNw.mjs';
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
  __name: "reserve",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { getRoomsApi, submitOrderApi } = useApi();
    let allRoomInfo = [];
    [__temp, __restore] = withAsyncContext(() => getRoomsApi({
      onResponse({ response }) {
        if (!response._data.status) {
          return;
        }
        allRoomInfo = response._data.result.map(
          (item) => ({
            id: item._id,
            name: item.name,
            imageUrl: item.imageUrl,
            price: item.price,
            discountPrice: 1950,
            roomDetail: {
              amenityInfo: item.amenityInfo,
              facilityInfo: item.facilityInfo,
              areaInfo: item.areaInfo,
              bedInfo: item.bedInfo,
              maxPeople: item.maxPeople
            }
          })
        );
      },
      onResponseError({ error }) {
        console.log("error: ", error);
      }
    })), await __temp, __restore();
    const reserveRoomInfo = useReserveRoomInfoStore();
    reactive(reserveRoomInfo.defaultRoomInfo);
    ref(null);
    const detail = computed(() => {
      return `${address.city}${address.district.district}${address.street}`;
    });
    const route = useRoute();
    const form = reactive({
      roomId: route.query.id || "",
      checkInDate: ref(reserveRoomInfo.checkInDate),
      checkOutDate: ref(reserveRoomInfo.checkOutDate),
      peopleNum: ref(reserveRoomInfo.peopleNum),
      userInfo: {
        address: {
          zipcode: ref(""),
          detail: ref(detail)
        },
        name: ref(""),
        phone: ref(""),
        email: ref("")
      }
    });
    watch(
      () => form.roomId,
      (val) => {
        if (!val) {
          navigateTo("/rooms");
        }
        allRoomInfo.filter((item) => item.id === val)[0];
      },
      { immediate: true }
    );
    let districtTmpl = reactive([]);
    const address = reactive({
      city: "\u53F0\u5317\u5E02",
      street: "",
      district: {
        district: "",
        zipcode: ""
      }
    });
    const { getTwzipcodeApi } = useApi();
    const { pending: gtPending, refresh: zcRefresh } = ([__temp, __restore] = withAsyncContext(() => getTwzipcodeApi({
      query: computed(() => ({ city: address.city })),
      immediate: false,
      onResponse({ response }) {
        if (!response._data.status) {
          return;
        }
        const resultData = response._data.data.map(
          (item) => ({
            zipcode: item.zip_code,
            district: item.district
          })
        );
        districtTmpl = resultData;
        address.district = resultData[0];
        form.userInfo.address.zipcode = address.district.zipcode;
      }
    })), __temp = await __temp, __restore(), __temp);
    zcRefresh();
    watch(
      () => form.userInfo.address.zipcode,
      (zipcode) => {
        address.district = districtTmpl.filter((item) => item.zipcode === zipcode)[0];
      }
    );
    const { $dayjs } = useNuxtApp();
    computed(() => {
      const day = $dayjs(form.checkInDate).diff(form.checkOutDate, "day");
      return day * -1;
    });
    ({
      roomType: ref(false),
      checkDate: ref(false),
      peopleNum: ref(false)
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_2;
      const _component_ClientOnly = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-0 p-md-xl pb-md-5 bg-primary-tint" }, _attrs))} data-v-d9d2f249><div class="container-xl" data-v-d9d2f249>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/room/${unref(form).roomId}`,
        class: "btn btn-ghost d-flex align-items-center py-5 text-dark p-0 fs-3 fw-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              class: "fs-1 fw-bold",
              name: "ic:round-keyboard-arrow-left"
            }, null, _parent2, _scopeId));
            _push2(` \u78BA\u8A8D\u8A02\u623F\u8CC7\u8A0A `);
          } else {
            return [
              createVNode(_component_Icon, {
                class: "fs-1 fw-bold",
                name: "ic:round-keyboard-arrow-left"
              }),
              createTextVNode(" \u78BA\u8A8D\u8A02\u623F\u8CC7\u8A0A ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reserve.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reserve = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d9d2f249"]]);

export { reserve as default };
//# sourceMappingURL=reserve-mx5MVtlj.mjs.map
