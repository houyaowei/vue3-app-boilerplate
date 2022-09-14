
  const routes = [
    {
      path: '/ps',
      name: "ps",
      component: () => import("../../../components/viewContainer.vue"),
      redirect: '/ps/index',
      children: [
        {
          path: '/ps/index',
          name: '/ps/index',
          component: () => import('@/views/peoples/views/index.vue'),
          meta: {
            index: 1
          }
        }
      ]
    }
  ]


export default routes