const Layout = () => import('@/layout/index.vue')

export default {
  name: 'Demo',
  path: '/demo',
  component: Layout,
  redirect: '/demo/crud',
  meta: {
    title: 'sample page',
    customIcon: 'logo',
    role: ['admin'],
    requireAuth: true,
    order: 3,
  },
  children: [
    {
      name: 'Crud',
      path: 'crud',
      component: () => import('./table/index.vue'),
      meta: {
        title: 'CRUD form',
        icon: 'ic:baseline-table-view',
        role: ['admin'],
        requireAuth: true,
        keepAlive: true,
      },
    },
    {
      name: 'MDEditor',
      path: 'md-editor',
      component: () => import('./editor/md-editor.vue'),
      meta: {
        title: 'MD editor',
        icon: 'ri:markdown-line',
        role: ['admin'],
        requireAuth: true,
        keepAlive: true,
      },
    },
    {
      name: 'RichTextEditor',
      path: 'rich-text',
      component: () => import('./editor/rich-text.vue'),
      meta: {
        title: 'rich text editor',
        icon: 'ic:sharp-text-rotation-none',
        role: ['admin'],
        requireAuth: true,
        keepAlive: true,
      },
    },
    {
      name: 'Upload',
      path: 'upload',
      component: () => import('./upload/index.vue'),
      meta: {
        title: 'upload picture',
        icon: 'mdi:upload',
        role: ['admin'],
        requireAuth: true,
        keepAlive: true,
      },
    },
  ],
}
