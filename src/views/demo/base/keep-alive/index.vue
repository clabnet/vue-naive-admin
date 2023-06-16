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

<script setup>
defineOptions({ name: 'KeepAlive' })

const inputVal = ref('')
const number = ref(0)

onMounted(() => {
  $message.success('onMounted')
})

onUnmounted(() => {
  $message.error('onUnmounted')
})

onActivated(() => {
  $message.info('onActivated')
})
onDeactivated(() => {
  $message.warning('onDeactivated')
})
</script>
