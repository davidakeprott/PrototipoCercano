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
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
     children: [{
      path:'/get',
      name:'get',
      component: () => import('../components/Componentes_usuario/ListaUsuarios.vue')
     },
     {
      path:'/post',
      name:'post',
      component: () => import('../components/Componentes_usuario/CrearUsuario.vue')
     },
     {
      path:'/put',
      name:'put',
      component: () => import('../components/Componentes_usuario/ActualizarUsuario.vue')
     },
     {
      path:'/delete',
      name:'delete',
      component: () => import('../components/Componentes_usuario/EliminarUsuario.vue')
     }
    ]
    }
  
  ]
})

export default router