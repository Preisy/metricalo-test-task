import { route } from 'quasar/wrappers'
import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { useAuthStore } from 'shared/api/auth'
import { ROUTES } from 'shared/config/routes'
import { routes } from './routes'

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0, behavior: 'smooth' }),
    history: createHistory(process.env.VUE_ROUTER_BASE),
    routes,
  })

  Router.beforeEach(async (to) => {
    const { isAuth } = useAuthStore()

    if (to.meta.auth) {
      if (!isAuth.data) {
        return {
          name: ROUTES.AUTH.LOGIN,
        }
      }
    }
    return true
  })

  return Router
})
