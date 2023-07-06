import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "hizo-business" | "waitlist"
declare module "/workspaces/HizoLanding/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}