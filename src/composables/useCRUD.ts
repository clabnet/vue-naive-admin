import { isNullOrWhitespace } from '@/utils'
import { computed, ref } from 'vue'

const ACTIONS = {
  view: 'Check',
  edit: 'edit',
  add: 'Add',
}

export default function ({ name, initForm = {}, doCreate, doDelete, doUpdate, refresh }) {
  const modalVisible = ref(false)
  const modalAction = ref('')
  const modalTitle = computed(() => ACTIONS[modalAction.value] + name)
  const modalLoading = ref(false)
  const modalFormRef = ref(null)
  const modalForm:any = ref({ ...initForm })

  /** Add */
  function handleAdd() {
    modalAction.value = 'add'
    modalVisible.value = true
    modalForm.value = { ...initForm }
  }

  /** Edit */
  function handleEdit(row: {}): void {
    modalAction.value = 'edit'
    modalVisible.value = true
    modalForm.value = { ...row }
  }

  /** Check */
  function handleView(row: {}) : void {
    modalAction.value = 'view'
    modalVisible.value = true
    modalForm.value = { ...row }
  }

  /** 保存 */
  function handleSave() {
    if (!['edit', 'add'].includes(modalAction.value)) {
      modalVisible.value = false
      return
    }
    modalFormRef.value?.validate(async (err) => {
      if (err) return
      const actions = {
        add: {
          api: () => doCreate(modalForm.value),
          cb: () => (window as any).$message.success('added successfully'),
        },
        edit: {
          api: () => doUpdate(modalForm.value),
          cb: () => (window as any).$message.success('edited successfully'),
        },
      }
      const action = actions[modalAction.value]

      try {
        modalLoading.value = true
        const data = await action.api()
        action.cb()
        modalLoading.value = modalVisible.value = false
        data && refresh(data)
      } catch (error) {
        modalLoading.value = false
      }
    })
  }

  /** 删除 */
  function handleDelete(id: null, confirmOptions?: any) {
    if (isNullOrWhitespace(id)) return
    ;(window as any).$dialog.confirm({
      content: 'confirm delete?',
      async confirm() {
        try {
          modalLoading.value = true
          const data = await doDelete(id);
          (window as any).$message.success('successfully deleted')
          modalLoading.value = false
          refresh(data)
        } catch (error) {
          modalLoading.value = false
        }
      },
      ...confirmOptions,
    })
  }

  return {
    modalVisible,
    modalAction,
    modalTitle,
    modalLoading,
    handleAdd,
    handleDelete,
    handleEdit,
    handleView,
    handleSave,
    modalForm,
    modalFormRef,
  }
}
