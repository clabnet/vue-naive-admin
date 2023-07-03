import { getToken, refreshAccessToken, isNullOrWhitespace } from '@/utils'

const WHITE_LIST = ['/login', '/404']
export function createPermissionGuard(router: { beforeEach: (arg0: (to: any) => Promise<true | { path: string; query: any } | { path: string; query?: undefined }>) => void }) {
  router.beforeEach(async (to) => {
    const token = getToken()

    /** In the case of no token */
    if (isNullOrWhitespace(token)) {
      if (WHITE_LIST.includes(to.path)) return true
      return { path: 'login', query: { ...to.query, redirect: to.path } }
    }

    /** If there is a token */
    if (to.path === '/login') return { path: '/' }

    refreshAccessToken()
    return true
  })
}
