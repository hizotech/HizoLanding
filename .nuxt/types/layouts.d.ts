import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "download" | "hizo-business" | "hizo-lend" | "waitlist"
declare module "C:/Users/HP/Desktop/glyde/HizoLanding/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}