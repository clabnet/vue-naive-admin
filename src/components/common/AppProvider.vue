<template>
  <n-config-provider
    wh-full
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme="appStore.isDark ? darkTheme : undefined"
    :theme-overrides="naiveThemeOverrides"
  >
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <slot></slot>
            <NaiveProviderContent />
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { defineComponent, h } from 'vue'
import {
  zhCN,
  dateZhCN,
  darkTheme,
  useLoadingBar,
  useDialog,
  useMessage,
  useNotification,
  LoadingBarApi,
  NotificationApi
} from 'naive-ui'
import { useCssVar } from '@vueuse/core'
import { kebabCase } from 'lodash-es'
import { setupMessage, setupDialog } from '@/utils'
import { naiveThemeOverrides } from '~/settings/theme.json' 
import { useAppStore } from '@/store'

const appStore = useAppStore()

function setupCssVar(): void {
  const common = naiveThemeOverrides.common
  for (const key in common) {
    useCssVar(`--${kebabCase(key)}`, document.documentElement).value = common[key] || ''
    if (key === 'primaryColor') window.localStorage.setItem('__THEME_COLOR__', common[key] || '')
  }
}

// Il metodo di montaggio di componenti ingenui su window per uso globale
function setupNaiveTools(): void {
  (window as any).$loadingBar = useLoadingBar() as LoadingBarApi
  (window as any).$notification = useNotification() as NotificationApi

  (window as any).$message = setupMessage(useMessage());
  (window as any).$dialog = setupDialog(useDialog());
}

const NaiveProviderContent = defineComponent({
  setup() {
    setupCssVar()
    setupNaiveTools()
  },
  render() {
    return h('div')
  },
})
</script>
