<template>
  <AppPage :show-footer="true">
    <div flex-1>
      <n-card rounded-10>
        <div flex items-center>
          <img rounded-full width="60" :src="userStore.avatar" />
          <div ml-20>
            <p text-16>Hello, {{ userStore.name }}</p>
            <p mt-5 text-12 op-60>Today is another day full of energy</p>
          </div>
          <div ml-auto flex items-center>
            <n-statistic label="to do" :value="4">
              <template #suffix>/ 10</template>
            </n-statistic>
            <n-statistic label="Stars" ml-80 w-100>
              <a href="https://github.com/zclzone/vue-naive-admin">
                <img allt="stars" src="https://badgen.net/github/stars/zclzone/vue-naive-admin" />
              </a>
            </n-statistic>
            <n-statistic label="Forks" ml-80 w-100>
              <a href="https://github.com/zclzone/vue-naive-admin">
                <img allt="forks" src="https://badgen.net/github/forks/zclzone/vue-naive-admin" />
              </a>
            </n-statistic>
          </div>
        </div>
      </n-card>

      <n-card title="Project" size="small" :segmented="true" mt-15 rounded-10>
        <template #header-extra>
          <n-button text type="primary">More</n-button>
        </template>
        <div flex flex-wrap justify-between>
          <n-card
            v-for="i in 10"
            :key="i"
            class="mb-10 mt-10 w-300 flex-shrink-0 cursor-pointer"
            hover:card-shadow
            title="Vue Naive Admin"
            size="small"
          >
            <p op-60>
              A lightweight background management template based on Vue3.0, Vite, Naive UI
            </p>
          </n-card>
          <div h-0 w-300></div>
          <div h-0 w-300></div>
          <div h-0 w-300></div>
          <div h-0 w-300></div>
        </div>
      </n-card>
    </div>
  </AppPage>
</template>

<script setup>
import { useUserStore } from '@/store'

const userStore = useUserStore()
</script>
