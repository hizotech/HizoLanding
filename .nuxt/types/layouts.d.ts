import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "waitlist"
declare module "/Users/nkezesylvester/Documents/Codes/Hizo/HizoSPA/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}