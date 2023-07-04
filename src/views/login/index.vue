<template>
  <AppPage :show-footer="true" bg-cover :style="{ backgroundImage: `url(${bgImg})` }">
    <div
      style="transform: translateY(25px)"
      class="m-auto max-w-700 min-w-345 f-c-c rounded-10 bg-white bg-opacity-60 p-15 card-shadow"
      dark:bg-dark
    >
      <div hidden w-380 px-20 py-35 md:block>
        <img src="@/assets/images/login_banner.webp" w-full alt="login_banner" />
      </div>

      <div w-320 flex-col px-20 py-35>
        <h5 f-c-c text-24 font-normal color="#6a6a6a">
          <icon-custom-logo mr-10 text-50 color-primary />
          {{ title }}
        </h5>
        <div mt-30>
          <n-input
            v-model:value="loginInfo.name"
            autofocus
            class="h-50 items-center pl-10 text-16"
            placeholder="admin"
            :maxlength="20"
          />
        </div>
        <div mt-30>
          <n-input
            v-model:value="loginInfo.password"
            class="h-50 items-center pl-10 text-16"
            type="password"
            show-password-on="mousedown"
            placeholder="123456"
            :maxlength="20"
            @keydown.enter="handleLogin"
          />
        </div>

        <div mt-20>
          <n-checkbox
            :checked="isRemember"
            label="remember me"
            :on-update:checked="(val) => (isRemember = val)"
          />
        </div>

        <div mt-20>
          <n-button
            h-50
            w-full
            rounded-5
            text-16
            type="primary"
            :loading="loading"
            @click="handleLogin"
          >
            Login
          </n-button>
        </div>
      </div>
    </div>
  </AppPage>
</template>

<script setup lang="ts">
import { lStorage, setToken } from '@/utils'
import { RemovableRef, useStorage } from '@vueuse/core'
import bgImg from '@/assets/images/login_bg.webp'
import api from './api'
import { addDynamicRoutes } from '@/router'
import { useRoute, useRouter } from 'vue-router'
import { Ref, ref } from 'vue'

const title = import.meta.env.VITE_TITLE

const router = useRouter()
const { query } = useRoute()

interface UserInfo {
  name: string;
  password: string;
}

const loginInfo: Ref<UserInfo> = ref({
  name: '',
  password: '',
})

initLoginInfo()

function initLoginInfo() {
  const localLoginInfo = lStorage.get('loginInfo')
  if (localLoginInfo) {
    loginInfo.value.name = localLoginInfo.name || ''
    loginInfo.value.password = localLoginInfo.password || ''
  }
}

const isRemember: RemovableRef<boolean> = useStorage('isRemember', false)
const loading: Ref<boolean> = ref(false)
async function handleLogin(): Promise<void> {
  const { name, password } = loginInfo.value
  if (!name || !password) {
    (window as any).$message.warning('Please enter username and password')
    return
  }
  try {
    loading.value = true;
    (window as any).$message.loading('verifying...')
    const res = await api.login({ name, password: password.toString() });
    (window as any).$message.success('login successful')
    setToken(res.data.token)
    if (isRemember.value) {
      lStorage.set('loginInfo', { name, password }) 
    } else {
      lStorage.remove('loginInfo')
    }
    await addDynamicRoutes()
    if (query.redirect) {
      const path: any= query.redirect
      Reflect.deleteProperty(query, 'redirect')
      router.push({ path, query })
    } else {
      router.push('/')
    }
  } catch (error) {
    console.error(error);
    (window as any).$message.removeMessage()
  }
  loading.value = false
}
</script>
