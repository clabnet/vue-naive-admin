import { request } from '@/utils'
import { AxiosRequestConfig } from 'axios'

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  noNeedToken?: boolean
}

export default {
  login: (data: any) => request.post('/auth/login', data, { noNeedToken: true } as CustomAxiosRequestConfig),
}

// export default {
//   login: (data: any) => request.post('/auth/login', data, { noNeedToken: true } as any)
// }
