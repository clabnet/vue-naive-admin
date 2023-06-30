<template>
  <CommonPage show-footer>
    <div w-350>
      <n-input v-model:value="inputVal" />
      <n-input-number v-model:value="number" mt-30 />
      <p mt-20 text-center text-14 color-gray>
        Note: right click on the label to reload to reset keep-alive
      </p>
    </div>
  </CommonPage>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'

defineOptions({ name: 'KeepAlive' })

const inputVal = ref('')
const number = ref(0)

onMounted(() => {
  (window as any).$message.success('onMounted')
})

onUnmounted(() => {
  (window as any).$message.error('onUnmounted')
})

onActivated(() => {
  (window as any).$message.info('onActivated')
})
onDeactivated(() => {
  (window as any).$message.warning('onDeactivated')
})
</script>
