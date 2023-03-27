import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
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
          path: '/dashboard_cliente',
          name: 'dashboard_cliente',
          component: () => import('../components/Componentes_Cliente/Dashboard_Cliente.vue'),
          children: [{
            path: '/getcliente',
            name: 'getcliente',
            component: () => import('../components/Componentes_Cliente/GetCliente.vue')
          },
          {
            path: '/postcliente',
            name: 'postcliente',
            component: () => import('../components/Componentes_Cliente/PostCliente.vue')
          },
          {
            path: '/putcliente',
            name: 'putcliente',
            component: () => import('../components/Componentes_Cliente/PutCliente.vue')
          },
          ]
        },
        {
          path: '/deshboard_depa',
          name: 'dashboard_depa',
          component: () => import('../components/Componentes_Depa.vue/Dashboard_Depa.vue'),
          children: [
            {
              path: '/getdepa',
              name: 'getdepa',
              component: () => import('../components/Componentes_Depa.vue/GetDepa.vue'),
            },
            {
              path: '/putdepa',
              name: 'putdepa',
              component: () => import('../components/Componentes_Depa.vue/PutDepa.vue'),
            },
            {
              path: '/postdepa',
              name: 'postdepa',
              component: () => import('../components/Componentes_Depa.vue/PostDepa.vue'),
            }
          ]
        },
        {
          path:'/dashboard_empleado',
          name:'dashboard_empleado',
          component: () => import('../components/Componente_Empleado/DashboardEmpleado.vue'),
          children:[
            {
              path:'/getempleado',
              name:'getempleado',
              component: () => import('../components/Componente_Empleado/GetEmpleado.vue'),
            },
            {
              path:'/postempleado',
              name:'postempleado',
              component: () => import('../components/Componente_Empleado/PostEmpleado.vue'),
            },
            {
              path:'/putempleado',
              name:'putempleado',
              component: () => import('../components/Componente_Empleado/PutEmpleado.vue'),
            },
          ]
        },
        {
          path:'/dashboard_facturas',
          name:'dashboard_facturas',
          component: () => import('../components/Componente_Facturas/Dashboard_Facturas.vue'),
          children:[
            {
              path:'/getfactura',
              name:'getfactura',
              component: () => import('../components/Componente_Facturas/GetFacturas.vue'),
            },
            {
              path:'/postfactura',
              name:'postfactura',
              component: () => import('../components/Componente_Facturas/PostFacturas.vue'),
            },
            {
              path:'/putfactura',
              name:'putfactura',
              component: () => import('../components/Componente_Facturas/PutFacturas.vue'),
            },
          ]
        },
        {
          path:"/dashboard_puesto",
          name:'dashboard_puesto',
          component: () => import('../components/Componentes_Puesto/Dashboard_Puesto.vue'),
          children:[
            {
              path:'/getpuesto',
              name:'getpuesto',
              component: () => import('../components/Componentes_Puesto/GetPuesto.vue'),
            },
            {
              path:'/postpuesto',
              name:'postpuesto',
              component: () => import('../components/Componentes_Puesto/PostPuesto.vue'),
            },
            {
              path:'/putpuesto',
              name:'putpuesto',
              component: () => import('../components/Componentes_Puesto/PutPuesto.vue'),
            },
          ]
        },
        {
          path:'/dashboard_rol',
          name:'dashboard_rol',
          component: () => import('../components/Componente_Rol/Dashboard_Rol.vue'),
          children:[
            {
              path:'/getrol',
              name:'getrol',
              component: () => import('../components/Componente_Rol/GetRol.vue'),
            },
            {
              path:'/postrol',
              name:'postrol',
              component: () => import('../components/Componente_Rol/PostRol.vue'),
            },
            {
              path:'/putrol',
              name:'putrol',
              component: () => import('../components/Componente_Rol/PutRol.vue'),
            },
          ]
        }
      ]
    }

  ]
})

export default router
