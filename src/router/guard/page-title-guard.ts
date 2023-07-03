const baseTitle = import.meta.env.VITE_TITLE

export function createPageTitleGuard(router: { afterEach: (arg0: (to: { meta: { title: any } }) => void) => void }) {
  router.afterEach((to: { meta: { title: any } }) => {
    const pageTitle = to.meta?.title
    if (pageTitle) {
      document.title = `${pageTitle} | ${baseTitle}`
    } else {
      document.title = baseTitle
    }
  })
}
