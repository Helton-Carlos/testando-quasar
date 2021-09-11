const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'Index', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name:'Login',component: () => import('pages/Login.vue') },
      { path: '', name:'RecuperarLogin',component: () => import('pages/RecuperarLogin.vue') }
    ]
  },
  {
    path: '/grafico',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'grafico', component: () => import('pages/Grafico.vue') }
    ]
  },
  {
    path: '/projeto',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'projeto', component: () => import('pages/Projeto.vue') }
    ]
  },
  {
    path: '/cliente',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'cliente', component: () => import('pages/Cliente.vue') }
    ]
  },
  {
    path: '/estoque',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'estoque', component: () => import('pages/Estoque.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
