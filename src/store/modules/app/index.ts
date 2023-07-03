import { defineStore } from 'pinia'
import { useDark } from '@vueuse/core'
import { nextTick } from 'vue'
import { RouteRecordName } from 'vue-router'

const isDark = useDark()
export const useAppStore = defineStore('app', {
  state() {
    return {
      reloadFlag: true,
      collapsed: false,
      /** The key of the keepAlive route, reassignment can reset keepAlive */
      aliveKeys: {},
      isDark,
    }
  },
  actions: {
    async reloadPage() {
      (window as any).$loadingBar.start()
      this.reloadFlag = false
      await nextTick()
      this.reloadFlag = true

      setTimeout(() => {
        document.documentElement.scrollTo({ left: 0, top: 0 });
        (window as any).$loadingBar.finish()
      }, 100)
    },
    switchCollapsed() {
      this.collapsed = !this.collapsed
    },
    setCollapsed(collapsed: boolean) {
      this.collapsed = collapsed
    },
    setAliveKeys(key: number | RouteRecordName, val: number) {
      this.aliveKeys[key] = val
    },
    /** set dark mode */
    setDark(isDark: boolean) {
      this.isDark = isDark
    },
    /** Toggle/disable dark mode */
    toggleDark() {
      this.isDark = !this.isDark
    },
  },
})
