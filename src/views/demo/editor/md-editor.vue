<template>
  <CommonPage>
    <div h-60 flex items-center bg-white pl-20 pr-20 dark:bg-dark>
      <input
        v-model="post.title"
        class="mr-20 flex-1 pb-15 pt-15 text-20 font-bold color-primary"
        dark:bg-dark
        type="text"
        placeholder="Enter article title..."
      />
      <n-button type="primary" style="width: 80px" :loading="btnLoading" @click="handleSavePost">
        <TheIcon v-if="!btnLoading" icon="line-md:confirm-circle" class="mr-5" :size="18" />
        save
      </n-button>
    </div>
    <MdEditor v-model="post.content" style="height: calc(100vh - 305px)" dark:bg-dark />
  </CommonPage>
</template>

<script setup>
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

defineOptions({ name: 'MDEditor' })

// refs
let post = ref({})
let btnLoading = ref(false)

function handleSavePost() {
  btnLoading.value = true
  $message.loading('Saving...')
  setTimeout(() => {
    $message.success('Saved successfully')
    btnLoading.value = false
  }, 2000)
}
</script>

<style lang="scss">
.md-preview {
  ul,
  ol {
    list-style: revert;
  }
}
</style>
