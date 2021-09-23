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
    path: '/CadastroProduto',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'CadastroProduto', component: () => import('src/pages/CadastroProduto.vue') }
    ]
  },
  {
    path: '/CadastroCliente',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'CadastroCliente', component: () => import('src/pages/CadastroCliente.vue') }
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
