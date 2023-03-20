import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/menugeneral',
      name: 'menugeneral',
      component: () => import('../components/MenuGeneral.vue'),
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('../components/Componentes_usuario/DashboardView.vue'),
          children: [{
            path: '/get',
            name: 'get',
            component: () => import('../components/Componentes_usuario/ListaUsuarios.vue')
          },
          {
            path: '/post',
            name: 'post',
            component: () => import('../components/Componentes_usuario/CrearUsuario.vue')
          },
          {
            path: '/putUsuario',
            name: 'putUsuario',
            component: () => import('../components/Componentes_usuario/ActualizarUsuario.vue')
          }
          ]
        },
        {
          path:'/dashboard_cliente',
          name:'dashboard_cliente',
          component: () => import('../components/Componentes_Cliente/Dashboard_Cliente.vue'),
          children:[{
            path:'/getcliente',
            name:'getcliente',
            component: () => import('../components/Componentes_Cliente/GetCliente.vue')
          },
          {
            path:'/postcliente',
            name:'postcliente',
            component: () => import('../components/Componentes_Cliente/PostCliente.vue')
          },
          {
            path:'/putcliente',
            name:'putcliente',
            component: () => import('../components/Componentes_Cliente/PutCliente.vue')
          },
        ]
        }
      ]
    }

  ]
})

export default router
