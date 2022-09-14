
  const routes = [
    {
      path: '/goods',
      name: "goods",
      component: () => import("../../../components/viewContainer.vue"),
      redirect: '/goods/index',
      children: [
        {
          path: '/goods/index',
          name: '/goods/index',
          component: () => import('../views/index.vue'),
          meta: {
            index: 1
          }
        }
      ]
    }
  ]


export default routes