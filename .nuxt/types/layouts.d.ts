import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default" | "h-bg-f-spl" | "h-bg-f" | "h-f-spl" | "h-logo-f-no" | "h-logo-f-spl" | "none"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}