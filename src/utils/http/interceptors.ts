import { getToken } from '@/utils'
import { resolveResError } from './helpers'

export function reqResolve(config: { noNeedToken: any; headers: { Authorization: string } }) {
  // Gestisci le richieste che non richiedono un token
  if (config.noNeedToken) {
    return config
  }

  const token = getToken()
  if (!token) {
    return Promise.reject({ code: 401, message: 'Login has expired, please login again! ' })
  }

  /**
   * * plus token
   * ! Authentication Scheme: JWT Bearer
   */
  config.headers.Authorization = config.headers.Authorization || 'Bearer ' + token

  return config
}

export function reqReject(error) {
  return Promise.reject(error)
}

export function resResolve(response) {
  // TODO: Handle different response.headers
  const { data, status, config, statusText } = response
  if (data?.code !== 0) {
    const code = data?.code ?? status

    /** Process the corresponding operation according to the code and return the processed message */
    const message = resolveResError(code, data?.message ?? statusText)

    /** need error reminder */
    !config.noNeedTip && window.$message?.error(message)
    return Promise.reject({ code, message, error: data || response })
  }
  return Promise.resolve(data)
}

export function resReject(error) {
  if (!error || !error.response) {
    const code = error?.code
    /** Process the corresponding operation according to the code and return the processed message */
    const message = resolveResError(code, error.message)
    window.$message?.error(message)
    return Promise.reject({ code, message, error })
  }
  const { data, status, config } = error.response
  const code = data?.code ?? status
  const message = resolveResError(code, data?.message ?? error.message)
  /** need error reminder */
  !config?.noNeedTip && window.$message?.error(message)
  return Promise.reject({ code, message, error: error.response?.data || error.response })
}
