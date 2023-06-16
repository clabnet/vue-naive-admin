import { useUserStore } from '@/store'

export function addBaseParams(params) {
  if (!params.userId) {
    params.userId = useUserStore().userId
  }
}

export function resolveResError(code, message) {
  switch (code) {
    case 400:
      message = message ?? 'Request parameter error'
      break
    case 401:
      message = message ?? 'login expired'
      useUserStore().logout()
      break
    case 403:
      message = message ?? 'permission denied'
      break
    case 404:
      message = message ?? 'resource or interface does not exist'
      break
    case 500:
      message = message ?? 'server exception'
      break
    default:
      message = message ?? `【${code}】: unknown exception!`
      break
  }
  return message
}
