//import vue router
import { createRouter, createWebHistory } from 'vue-router'
 
//define a routes
const routes = [
    {
        path: '/index',
        name: 'post.index',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/post/Index.vue')
    },
    {
        path: '/create',
        name: 'post.create',
        component: () => import( /* webpackChunkName: "post.create" */ '@/views/post/Create.vue')
    },
    {
        path: '/edit/:id',
        name: 'post.edit',
        component: () => import( /* webpackChunkName: "post.edit" */ '@/views/post/Edit.vue')
    },
    {
        path: '/',
        name: 'post.dashboard',
        component: () => import( /* webpackChunkName: "post.dashboard" */ '@/views/post/Dashboard.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import( /* webpackChunkName: "login" */ '@/views/auth/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import( /* webpackChunkName: "register" */ '@/views/auth/Register.vue')
      }
]
 
//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})
 
export default router