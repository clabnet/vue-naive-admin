<template>
  <n-icon mr20 size="18" style="cursor: pointer" @click="toggle">
    <icon-ant-design:fullscreen-exit-outlined v-if="isFullscreen" />
    <icon-ant-design:fullscreen-outlined v-else />
  </n-icon>
</template>

<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, toggle } = useFullscreen()
</script>
