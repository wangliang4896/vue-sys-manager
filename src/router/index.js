import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/404error',
    component: () => import('@/views/error/error404'),
    hidden: true
  },

  {
    path: '/home',
    component: Layout,
    redirect: '/home/hello',
    children: [{
      path: 'hello',
      name: 'Home',
      component: () => import('@/views/home/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '表单', icon: 'form' }
      }
    ]
  },
  {
    path: '/table',
    name: 'table',
    component: Layout,
    redirect: '/table/search',
    meta: { title: '一级菜单', icon: 'example' },
    children: [
      {
        path: 'search',
        name: 'search',
        component: () => import('@/views/table/index'),
        meta: { title: '表格', icon: 'table' }
      },
      {
         path: 'upload',
         name: 'upload',
         component: () => import('@/views/upload/index'),
         meta: { title: '上传', icon: 'form' }
      }
    ]
  },
  {
      path: '/tree',
      name: 'tree',
      component: Layout,
      redirect: '/tree/treelist',
      meta: { title: '一级菜单', icon: 'example' },
      children: [
        {
          path: 'treelist',
          name: 'treelist',
          component: () => import('@/views/tree/index'),
          meta: { title: '树状管理', icon: 'tree' }
        },
        {
           path: '',
        }
      ]
    },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404error', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('token');
    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
