<template>
  <CommonPage show-footer>
    <n-space size="large">
      <n-card title="Button">
        <n-space>
          <n-button>Default</n-button>
          <n-button type="tertiary">Tertiary</n-button>
          <n-button type="primary">Primary</n-button>
          <n-button type="info">Info</n-button>
          <n-button type="success">Success</n-button>
          <n-button type="warning">Warning</n-button>
          <n-button type="error">Error</n-button>
        </n-space>
      </n-card>

      <n-card title="Buttons with Icons">
        <n-space>
          <n-button type="info">
            <TheIcon icon="material-symbols:add" :size="18" class="mr-5" />
            Add
          </n-button>
          <n-button type="error">
            <TheIcon icon="material-symbols:delete-outline" :size="18" class="mr-5" />
            delete
          </n-button>
          <n-button type="warning">
            <TheIcon icon="material-symbols:edit-outline" :size="18" class="mr-5" />
            edit
          </n-button>
          <n-button type="primary">
            <TheIcon icon="majesticons:eye-line" :size="18" class="mr-5" />
            Check
          </n-button>
        </n-space>
      </n-card>
    </n-space>

    <n-space size="large" mt-30>
      <n-card min-w-340 title="Notification">
        <n-space>
          <n-button @click="notify('info')">information</n-button>
          <n-button @click="notify('success')">success</n-button>
          <n-button @click="notify('warning')">warning</n-button>
          <n-button @click="notify('error')">error</n-button>
        </n-space>
      </n-card>

      <n-card min-w-340 title="confirmation popup Dialog">
        <n-button type="error" @click="handleDelete">
          <icon-mi:delete mr-5 />
          delete
        </n-button>
      </n-card>

      <n-card min-w-340 title="Message notification">
        <n-button :loading="loading" type="primary" @click="handleLogin">
          <icon-mdi:login v-show="!loading" mr-5 />
          login
        </n-button>
      </n-card>
    </n-space>
  </CommonPage>
</template>

<script setup>
const handleDelete = function () {
  $dialog.confirm({
    content: 'confirm deletion?',
    confirm() {
      $message.success('successfully deleted')
    },
    cancel() {
      $message.warning('Cancelled')
    },
  })
}

const loading = ref(false)
function handleLogin() {
  loading.value = true
  $message.loading('loading...')
  setTimeout(() => {
    $message.error('Login failed')
    $message.loading('trying to log in again...')
    setTimeout(() => {
      $message.success('Login successfully')
      loading.value = false
    }, 2000)
  }, 2000)
}

function notify(type) {
  $notification[type]({
    content: 'say something',
    meta: 'Have no idea',
    duration: 2500,
    keepAliveOnHover: true,
  })
}
</script>
