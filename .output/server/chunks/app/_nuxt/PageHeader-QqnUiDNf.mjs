import { _ as __nuxt_component_0$1 } from './nuxt-link-nvHjMUuE.mjs';
import { _ as __nuxt_component_1 } from './nuxt-img-IgI-1Ysf.mjs';
import __nuxt_component_2 from './Icon-_PazCQDQ.mjs';
import { useSSRContext, defineComponent, computed, ref, watch, inject, mergeProps, unref, withCtx, createVNode, createTextVNode, nextTick, watchEffect, getCurrentScope, onScopeDispose, getCurrentInstance } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { v as useCommonStore } from '../server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';

function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
function getLifeCycleTarget(target) {
  return target || getCurrentInstance();
}
function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = void 0;
function useEventListener(...args) {
  let target;
  let events2;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events2, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events2, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events2))
    events2 = [events2];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events2.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useMounted() {
  const isMounted = ref(false);
  if (getCurrentInstance())
    ;
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  };
  const stopWatch = watchEffect(() => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(toValue(query));
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", handler);
    else
      mediaQuery.addListener(handler);
    matches.value = mediaQuery.matches;
  });
  tryOnScopeDispose(() => {
    stopWatch();
    cleanup();
    mediaQuery = void 0;
  });
  return matches;
}
function useWindowScroll(options = {}) {
  const { window: window2 = defaultWindow, behavior = "auto" } = options;
  if (!window2) {
    return {
      x: ref(0),
      y: ref(0)
    };
  }
  const internalX = ref(window2.scrollX);
  const internalY = ref(window2.scrollY);
  const x = computed({
    get() {
      return internalX.value;
    },
    set(x2) {
      scrollTo({ left: x2, behavior });
    }
  });
  const y = computed({
    get() {
      return internalY.value;
    },
    set(y2) {
      scrollTo({ top: y2, behavior });
    }
  });
  useEventListener(
    window2,
    "scroll",
    () => {
      internalX.value = window2.scrollX;
      internalY.value = window2.scrollY;
    },
    {
      capture: false,
      passive: true
    }
  );
  return { x, y };
}
function useWindowSize(options = {}) {
  const {
    window: window2 = defaultWindow,
    initialWidth = Number.POSITIVE_INFINITY,
    initialHeight = Number.POSITIVE_INFINITY,
    listenOrientation = true,
    includeScrollbar = true
  } = options;
  const width = ref(initialWidth);
  const height = ref(initialHeight);
  const update = () => {
    if (window2) {
      if (includeScrollbar) {
        width.value = window2.innerWidth;
        height.value = window2.innerHeight;
      } else {
        width.value = window2.document.documentElement.clientWidth;
        height.value = window2.document.documentElement.clientHeight;
      }
    }
  };
  update();
  tryOnMounted(update);
  useEventListener("resize", update, { passive: true });
  if (listenOrientation) {
    const matches = useMediaQuery("(orientation: portrait)");
    watch(matches, () => update());
  }
  return { width, height };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageHeader",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const colorful = computed(() => {
      if (isOverVH.value)
        return true;
      switch (props.status) {
        case "logo":
          return true;
        case "bg":
          return true;
        default:
          return false;
      }
    });
    const { y } = useWindowScroll();
    const { width } = useWindowSize();
    const isOverVH = computed(() => {
      return y.value > 5;
    });
    const toggler = ref();
    const isLocked = ref(false);
    const isOverMd = computed(() => width.value > 768);
    const closeNav = () => {
      if (!isOverMd.value && isLocked.value) {
        toggler.value.click();
      }
    };
    watch(width, () => {
      if (isOverMd.value && isLocked.value) {
        toggler.value.click();
      }
    });
    const commonStore = useCommonStore();
    inject("reload", () => {
    });
    const name = computed(() => !("name" in commonStore.me) ? "" : commonStore.me.name);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = __nuxt_component_1;
      const _component_Icon = __nuxt_component_2;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: [unref(colorful) && "bg-background", "page-header"]
      }, _attrs))} data-v-ece18b7e>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/logo.png",
              height: unref(width) < 768 ? 40 : 72
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/logo.png",
                height: unref(width) < 768 ? 40 : 72
              }, null, 8, ["height"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (props.status !== "logo" || !unref(isOverMd)) {
        _push(`<nav class="navbar navbar-expand-md" data-v-ece18b7e><button class="${ssrRenderClass([unref(isLocked) && "isLocked", "btn btn-ghost navbar-toggler shadow-none"])}" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" data-v-ece18b7e>`);
        _push(ssrRenderComponent(_component_Icon, { name: "ic:round-menu" }, null, _parent));
        _push(`</button><div id="navbarSupportedContent" class="collapse navbar-collapse" data-v-ece18b7e><button class="btn btn-ghost navbar-toggler inside shadow-none" type="button" data-v-ece18b7e>`);
        _push(ssrRenderComponent(_component_Icon, { name: "ic:round-close" }, null, _parent));
        _push(`</button><ul class="nav-list" data-v-ece18b7e><li data-v-ece18b7e>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "btn btn-ghost",
          to: "/rooms",
          onClick: closeNav
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u5BA2\u623F\u65C5\u5BBF`);
            } else {
              return [
                createTextVNode("\u5BA2\u623F\u65C5\u5BBF")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
        if (unref(name)) {
          _push(`<li data-v-ece18b7e><div class="dropdown flex-grow-1" data-v-ece18b7e><button class="btn btn-ghost d-flex align-items-center gap-2" type="button" aria-expanded="false" data-bs-auto-close="outside" data-bs-toggle="dropdown" data-v-ece18b7e>`);
          _push(ssrRenderComponent(_component_Icon, {
            class: "text-light fs-5",
            name: "IconProfile"
          }, null, _parent));
          _push(` ${ssrInterpolate(unref(name))}</button><ul class="dropdown-menu dropdown-menu-end px-0" data-v-ece18b7e><li data-v-ece18b7e>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "dropdown-item",
            to: "/user"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u6211\u7684\u5E33\u865F`);
              } else {
                return [
                  createTextVNode("\u6211\u7684\u5E33\u865F")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li><li data-v-ece18b7e><button class="dropdown-item" type="button" data-v-ece18b7e>\u767B\u51FA</button></li></ul></div></li>`);
        } else {
          _push(`<li data-v-ece18b7e>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "btn btn-ghost",
            to: "/login",
            onClick: closeNav
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u6703\u54E1\u767B\u5165`);
              } else {
                return [
                  createTextVNode("\u6703\u54E1\u767B\u5165")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li>`);
        }
        _push(`<li data-v-ece18b7e>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "btn btn-primary",
          to: "/rooms",
          onClick: closeNav
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
        _push(`</li></ul></div></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/PageHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ece18b7e"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=PageHeader-QqnUiDNf.mjs.map
