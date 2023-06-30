import { h } from 'vue'
import { Icon } from '@iconify/vue'
import { NIcon } from 'naive-ui'
import SvgIcon from '@/components/icon/SvgIcon.vue'

export function renderIcon(icon: string, props = { size: 12 as number | string }) {
  return () => h(NIcon, props, { default: () => h(Icon, { icon }) })
}

export function renderCustomIcon(icon: any, props = { size: 12 as number | string }) {
  return () => h(NIcon, props, { default: () => h(SvgIcon, { icon }) })
}
