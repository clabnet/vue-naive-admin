const posts = [
  {
    title: 'Use pure css to elegantly configure mobile rem layout',
    author: 'big face',
    category: 'Css',
    description:
      'Usually, the rem layout will be processed with js, for example, the design draft of 750 will be like this...',
    content:
      'Usually, the rem layout will be processed with js, for example, the design draft of 750 will be like this',
    isRecommend: true,
    isPublish: true,
    createDate: '2021-11-04T04:03:36.000Z',
    updateDate: '2021-11-04T04:03:36.000Z',
  },
  {
    title: 'Vue2&Vue3 project style guide',
    author: 'Ronnie',
    category: 'Vue',
    description: 'Summary of Vue2 and Vue3 project styles',
    content:
      '### 1. Naming style\n\n> If a folder is composed of multiple words, it should always be connected by a horizontal line',
    isRecommend: true,
    isPublish: true,
    createDate: '2021-10-25T08:57:47.000Z',
    updateDate: '2022-02-28T04:02:39.000Z',
  },
  {
    title: 'How to elegantly add watermark to pictures',
    author: 'big face',
    category: 'JavaScript',
    description: 'Elegantly add watermark to pictures',
    content: 'I wrote an article before to record the optimization history of an uploaded image',
    isRecommend: true,
    isPublish: true,
    createDate: '2021-06-24T18:46:19.000Z',
    updateDate: '2021-09-23T07:51:22.000Z',
  },

  {
    title: 'Understanding of front-end caching',
    author: 'big face',
    category: 'Http',
    description: 'Talk about the understanding of front-end caching',
    content:
      "> Background\n\nThe company has a vue-cli3 mobile web project. After the release and update, it is found that some users' mobile phones have caches when they open DingTalk's built-in browser.",
    isRecommend: true,
    isPublish: true,
    createDate: '2021-06-10T18:51:19.000Z',
    updateDate: '2021-09-17T09:33:24.000Z',
  },
  {
    title: 'Five static methods of Promise',
    author: 'big face',
    category: 'JavaScript',
    description:
      'Briefly introduce the 5 static methods and their usage scenarios in the Promise class',
    content:
      '## 1. Promise.all\n\nExecute multiple promises in parallel and wait until all promises are ready. Then process them.',
    isRecommend: true,
    isPublish: true,
    createDate: '2021-02-22T22:37:06.000Z',
    updateDate: '2021-09-17T09:33:24.000Z',
  },
]

export default [
  {
    url: '/api/posts',
    method: 'get',
    response: (data = {}) => {
      const { title, pageNo, pageSize } = data.query
      let pageData = []
      let total = 60
      const filterData = posts.filter(
        (item) => item.title.includes(title) || (!title && title !== 0)
      )
      if (filterData.length) {
        if (pageSize) {
          while (pageData.length < pageSize) {
            pageData.push(filterData[Math.round(Math.random() * (filterData.length - 1))])
          }
        } else {
          pageData = filterData
        }
        pageData = pageData.map((item, index) => ({
          id: pageSize * (pageNo - 1) + index + 1,
          ...item,
        }))
      } else {
        total = 0
      }
      return {
        code: 0,
        message: 'ok',
        data: {
          pageData,
          total,
          pageNo,
          pageSize,
        },
      }
    },
  },
  {
    url: '/api/post',
    method: 'post',
    response: ({ body }) => {
      return {
        code: 0,
        message: 'ok',
        data: body,
      }
    },
  },
  {
    url: '/api/post/:id',
    method: 'put',
    response: ({ query, body }) => {
      return {
        code: 0,
        message: 'ok',
        data: {
          id: query.id,
          body,
        },
      }
    },
  },
  {
    url: '/api/post/:id',
    method: 'delete',
    response: ({ query }) => {
      return {
        code: 0,
        message: 'ok',
        data: {
          id: query.id,
        },
      }
    },
  },
]
