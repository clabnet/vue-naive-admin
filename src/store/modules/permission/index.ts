import { defineStore } from 'pinia'
import { asyncRoutes, basicRoutes } from '@/router/routes'
import { RouteRecordRaw } from 'vue-router'

function hasPermission(route, role) {
  // * Return true directly without permission
  if (!route.meta?.requireAuth) return true

  const routeRole = route.meta?.role ? route.meta.role : []

  // * If the login user does not have a role or the route does not have a role set, it is judged as having no permission
  if (!role.length || !routeRole.length) return false

  // * If the role specified by the route contains any login user role, it is determined to have permission
  return role.some((item) => routeRole.includes(item))
}

function filterAsyncRoutes(routes = [], role) {
  const ret = []
  routes.forEach((route) => {
    if (hasPermission(route, role)) {
      const curRoute = {
        ...route,
        children: [],
      }
      if (route.children && route.children.length) {
        curRoute.children = filterAsyncRoutes(route.children, role)
      } else {
        Reflect.deleteProperty(curRoute, 'children')
      }
      ret.push(curRoute)
    }
  })
  return ret
}

export const usePermissionStore = defineStore('permission', {
  state() {
    return {
      accessRoutes: [] as RouteRecordRaw[],
      routes: [] as RouteRecordRaw[],
    }
  },
  getters: {
    routes(state) {
      return [...basicRoutes, ...state.accessRoutes] as RouteRecordRaw[]
    },
    menus(state) {
      return state.routes.filter(
        (route: any) => route.name && !route.isHidden
      )
    },
  },
  actions: {
    generateRoutes(role = []) {
      const accessRoutes = filterAsyncRoutes(asyncRoutes, role)
      this.accessRoutes = accessRoutes
      return accessRoutes
    },
    resetPermission() {
      this.$reset()
    },
  },
})
