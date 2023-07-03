export function createPageLoadingGuard(router) {
  router.beforeEach(() => {
    (window as any).$loadingBar?.start()
  })

  router.afterEach(() => {
    setTimeout(() => {
      (window as any).$loadingBar?.finish()
    }, 200)
  })

  router.onError(() => {
    (window as any).$loadingBar?.error()
  })
}
