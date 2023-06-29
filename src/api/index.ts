import { request } from '@/utils'
import { AxiosRequestConfig } from 'axios'

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  noNeedTip?: boolean
}

export default {
  getUser: () => request.get('/user'),
  refreshToken: () =>
    request.post('/auth/refreshToken', null, { noNeedTip: true } as CustomAxiosRequestConfig),
}


// export default {
//   getUser: () => request.get('/user'),
//   refreshToken: () => request.post('/auth/refreshToken', null, { noNeedTip: true }),
// }
