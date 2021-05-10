
const routes = [
  {
    path: '/index',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/categorias', component: () => import('pages/Categorias.vue') },
      { path: '/niveles/:ruta/:tab', component: () => import('pages/Niveles.vue') },
      { path: '/tablero/:cat/:nivel', component: () => import('pages/TableroAll.vue') }
    ]
  },

  { path: '/inicio/:tab', component: () => import('pages/Index.vue') },
  {
    path: '/',
    redirect: '/inicio/true'
  },
  {
    path: '*',
    redirect: '/inicio/false'
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
