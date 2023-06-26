import { request } from '@/utils'

export default {
  login: (data: any) => request.post('/auth/login', data, { noNeedToken: true }),
}
