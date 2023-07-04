import { request } from '@/utils'

export default {
  getPosts: (params = {}) => request.get('posts', { params }),
  getPostById: (id: any) => request.get(`/post/${id}`),
  addPost: (data: any) => request.post('/post', data),
  updatePost: (data: { id: any }) => request.put(`/post/${data.id}`, data),
  deletePost: (id: any) => request.delete(`/post/${id}`),
}
