<template>
  <QueryBar v-if="$slots.queryBar" mb-30 @search="handleSearch" @reset="handleReset">
    <slot name="queryBar" />
  </QueryBar>

  <n-data-table
    :remote="remote"
    :loading="loading"
    :scroll-x="scrollX"
    :columns="columns"
    :data="tableData"
    :row-key="(row) => row[rowKey]"
    :pagination="isPagination ? pagination : false"
    @update:checked-row-keys="onChecked"
    @update:page="onPageChange"
  />
</template>

<script lang="ts" setup>
import { utils, writeFile } from 'xlsx'
import { Ref, ref, reactive, nextTick  } from 'vue'

interface Column {
  type?: string;
  title?: string;
  hideInExcel?: boolean;
  key?: string;
}

const props = defineProps({
  /**
   * @remote true: backend pagination  false： front-end pagination
   */
  remote: {
    type: Boolean,
    default: true,
  },
  /**
   * @remote Whether to page
   */
  isPagination: {
    type: Boolean,
    default: true,
  },
  scrollX: {
    type: Number,
    default: 1200,
  },
  rowKey: {
    type: String,
    default: 'id',
  },
  columns: {
    type: Array as () => Column[],
    required: true,
  },
  /** Parameters in queryBar */
  queryItems: {
    type: Object,
    default() {
      return {}
    },
  },
  /** Additional parameters (optional) */
  extraParams: {
    type: Object,
    default() {
      return {}
    },
  },
  /**
   * ! Agreed interface input and output parameters
   * * The paging mode needs to agree on the input parameters of the paging interface
   *    @pageSize Pagination parameters: how many items to display on one page, default 10
   *    @pageNo   Pagination parameters: page number, default 1
   * * Interface output parameters need to be agreed
   *    @pageData Paging mode is required, if there is no pageData in non-paged mode, the previous layer of data will be taken
   *    @total    Paging mode is required, if there is no total in non-paging mode, take the previous layer of data.length
   */
  getData: {
    type: Function,
    required: true,
  },
})

interface initQuery {
  [x: string]: any;
}

const emit = defineEmits(['update:queryItems', 'onChecked', 'onDataChange'])
const loading: Ref<boolean> = ref(false)
const initQuery: initQuery = { ...props.queryItems }
const tableData: Ref<any[]> = ref([])

interface pagination {
  page?: number;
  pageSize?: number;
  itemCount?: number;
}

const pagination: pagination = reactive({ page: 1, pageSize: 10 })

async function handleQuery() {
  try {
    loading.value = true
    let paginationParams = {}
    // If you are in non-paging mode or using front-end paging, you do not need to pass paging parameters
    if (props.isPagination && props.remote) {
      paginationParams = { pageNo: pagination.page, pageSize: pagination.pageSize }
    }
    const { data } = await props.getData({
      ...props.queryItems,
      ...props.extraParams,
      ...paginationParams,
    })
    tableData.value = data?.pageData || data
    pagination.itemCount = data.total ?? data.length
  } catch (error) {
    tableData.value = []
    pagination.itemCount = 0
  } finally {
    emit('onDataChange', tableData.value)
    loading.value = false
  }
}
function handleSearch() {
  pagination.page = 1
  handleQuery()
}
async function handleReset() {
  const queryItems = { ...props.queryItems }
  for (const key in queryItems) {
    queryItems[key] = ''
  }
  emit('update:queryItems', { ...queryItems, ...initQuery })
  await nextTick()
  pagination.page = 1
  handleQuery()
}
function onPageChange(currentPage: any): void {
  pagination.page = currentPage
  if (props.remote) {
    handleQuery()
  }
}
function onChecked(rowKeys) {
  if (props.columns.some((item) => item.type === 'selection')) {
    emit('onChecked', rowKeys)
  }
}
function handleExport(columns = props.columns, data = tableData.value) {
  if (!data?.length) return (window as any).$message.warning('no data')
  const columnsData = columns.filter((item) => !!item.title && !item.hideInExcel)
  const thKeys = columnsData.map((item) => item.key)
  const thData = columnsData.map((item) => item.title)
  const trData = data.map((item) => thKeys.map((key) => item[key]))
  const sheet = utils.aoa_to_sheet([thData, ...trData])
  const workBook = utils.book_new()
  utils.book_append_sheet(workBook, sheet, 'data report')
  writeFile(workBook, 'data report.xlsx')
}

defineExpose({
  handleSearch,
  handleReset,
  handleExport,
})
</script>
