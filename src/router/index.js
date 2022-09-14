import { createRouter, createWebHistory } from 'vue-router'

const modules = import.meta.globEager('./../views/**/router/*.js')

let customerRouter = []
for (const k in modules) {
  if (Object.hasOwnProperty.call(modules, k)) {
    console.log('to find router')
    customerRouter = customerRouter.concat(modules[k].default);
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dyimport'
    },
    {
      path: '/dyimport',
      component: () => import('@/views/dynamicImport/index.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('@/views/Home/index.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/homes',
      name: 'homes',
      component: () => import(/* webpackChunkName: "login" */ '@/views/Home.vue'),
      meta: {
        index: 1
      }
    },
  ].concat(customerRouter)
});

export default router
