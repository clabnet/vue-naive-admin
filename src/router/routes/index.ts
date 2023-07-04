const Layout = () => import('@/layout/index.vue')

export const basicRoutes = [
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    isHidden: true,
  },

  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    isHidden: true,
    meta: {
      title: 'Login page',
    },
  },

  {
    name: 'ExternalLink',
    path: '/external-link',
    component: Layout,
    meta: {
      title: 'External link',
      icon: 'mdi:link-variant',
      order: 4,
    },
    children: [
      {
        name: 'LinkGithubSrc',
        path: 'https://github.com/zclzone/vue-naive-admin',
        meta: {
          title: 'Source code - github',
          icon: 'mdi:github',
        },
      },
      {
        name: 'LinkGiteeSrc',
        path: 'https://gitee.com/zclzone/vue-naive-admin',
        meta: {
          title: 'Source code - gitee',
          icon: 'simple-icons:gitee',
        },
      },
      {
        name: 'LinkDocs',
        path: 'https://zclzone.github.io/vue-naive-admin-docs',
        meta: {
          title: 'Document - vuepress',
          icon: 'mdi:vuejs',
        },
      },
    ],
  },
]

export const NOT_FOUND_ROUTE = {
  name: 'NotFound',
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  isHidden: true,
}

export const EMPTY_ROUTE = {
  name: 'Empty',
  path: '/:pathMatch(.*)*',
  component: null,
}

const modules = import.meta.glob('@/views/**/route.ts', { eager: true })
const asyncRoutes: any[] = []
Object.keys(modules).forEach((key) => {
  asyncRoutes.push((modules[key] as any).default)
})

export { asyncRoutes }
