import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "C:/Users/user/Documents/regu-piket/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}