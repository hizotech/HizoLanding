import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/HP/Desktop/glyde/HizoLanding/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}