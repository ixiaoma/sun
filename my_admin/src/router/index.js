import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Login from '@/modules/Login'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      name:'login',
      component:Login
    },
    {
      path: '/home',
      name: 'home',
      component: Layout,
      children:[
        {
        path: '', 
        component: resolve => require(["@/modules/Home"],resolve)
        },
        {
          path: '/product',
          component: resolve => require(["@/modules/Product"],resolve)
        },
        {
          path: '/order',
          component: resolve => require(["@/modules/Order"],resolve)
        },
        {
          path: '/control',
          component: resolve => require(["@/modules/Control"],resolve)
          }
    ]
    }
  ]
})
