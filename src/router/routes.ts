//对外暴露配置路由(常量路由)
export const constantRoute = [
  {
    //登录路由
    path: '/login',
    component:  () =>import('@/views/login/index.vue'),
    name: 'login', //命名路由
  },
  {
    //首页
    path: '/',
    component:  () =>import('@/views/home/index.vue'),
    name: 'layout', //命名路由
  },
  {
    //首页
    path: '/404',
    component:  () =>import('@/views/404/index.vue'),
    name: '404', //命名路由
  },
  {
    //首页
    path: '/:pathMatch(.*)*',
    redirect:'/404',
    name: 'Any', //命名路由
  },
]