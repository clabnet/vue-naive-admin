import { defineStore } from 'pinia'
import { resetRouter } from '@/router'
import { useTagsStore, usePermissionStore } from '@/store'
import { removeToken, toLogin } from '@/utils'
import api from '@/api'


  interface UserInfo {
    id?: string
    name?: string
    avatar?: string
    role?: string[]
  }

export const useUserStore = defineStore('user', {


  state() {
    return {
      userInfo: {} as UserInfo,
    }
  },
  getters: {
    userId(state) {
      return state.userInfo?.id
    },
    name(state) {
      return state.userInfo?.name
    },
    avatar(state) {
      return state.userInfo?.avatar
    },
    role(state) {
      return state.userInfo?.role || []
    },
  },
  actions: {
    async getUserInfo() {
      try {
        const res = await api.getUser()
        const { id, name, avatar, role } = res.data
        this.userInfo = { id, name, avatar, role }
        return Promise.resolve(res.data)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async logout() {
      const { resetTags } = useTagsStore()
      const { resetPermission } = usePermissionStore()
      removeToken()
      resetTags()
      resetPermission()
      resetRouter()
      this.$reset()
      toLogin()
    },
    setUserInfo(userInfo = {}) {
      this.userInfo = { ...this.userInfo, ...userInfo }
    },
  },
})
