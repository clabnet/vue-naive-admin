<template>
  <AppPage>
    <n-result m-auto status="404" description="Sorry, the page you are visiting does not exist.">
      <template #icon>
        <img src="@/assets/images/404.webp" width="500" />
      </template>
      <template #footer>
        <n-button @click="replace('/')">return home</n-button>
      </template>
    </n-result>
  </AppPage>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router'

const { replace } = useRouter()
</script>
