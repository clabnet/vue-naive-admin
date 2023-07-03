import { defineStore } from 'pinia'
import { activeTag, WITHOUT_TAG_PATHS } from './helpers'
import { router } from '@/router'
import { sStorage } from '@/utils'

export const useTagsStore = defineStore('tag', {
  state() {
    return {
      tags: [] as any[],
      activeTag: activeTag || '',
      activeId: -1,
    }
  },
  getters: {
    activeIndex(state) {
      return state.tags.findIndex((item) => item.path === this.activeTag)
    },
  },
  actions: {
    setActiveTag(path: string) {
      this.activeTag = path
      sStorage.set('activeTag', path)
    },
    setTags(tags: any[]) {
      this.tags = tags
      sStorage.set('tags', tags)
    },
    addTag(tag: { path: string } = {
      path: ''
    }) {
      this.setActiveTag(tag.path)
      if (WITHOUT_TAG_PATHS.includes(tag.path) || this.tags.some((item) => item.path === tag.path))
        return
      this.setTags([...this.tags, tag])
    },
    removeTag(path: string) {
      if (path === this.activeTag) {
        if (this.activeId > 0) {
          router.push(this.tags[this.activeId - 1].path)
        } else {
          router.push(this.tags[this.activeId + 1].path)
        }
      }
      this.setTags(this.tags.filter((tag) => tag.path !== path))
    },
    removeOther(this: any, curPath = this.activeTag) {
      this.setTags(this.tags.filter((tag: { path: any }) => tag.path === curPath))
      if (curPath !== this.activeTag) {
        router.push(this.tags[this.tags.length - 1].path)
      }
    },
    removeLeft(curPath: string) {
      const curIndex = this.tags.findIndex((item) => item.path === curPath)
      const filterTags = this.tags.filter((_item, index) => index >= curIndex)
      this.setTags(filterTags)
      if (!filterTags.find((item) => item.path === this.activeTag)) {
        router.push(filterTags[filterTags.length - 1].path)
      }
    },
    removeRight(curPath: string) {
      const curIndex = this.tags.findIndex((item) => item.path === curPath)
      const filterTags = this.tags.filter((_item, index) => index <= curIndex)
      this.setTags(filterTags)
      if (!filterTags.find((item) => item.path === this.activeTag)) {
        router.push(filterTags[filterTags.length - 1].path)
      }
    },
    resetTags() {
      this.setTags([])
      this.setActiveTag('')
    },
  },
})
