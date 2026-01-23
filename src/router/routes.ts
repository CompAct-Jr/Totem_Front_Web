import Home from '@/views/home/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path:'',
          name: 'home',
          component: ()=> import('@/views/home/Home.vue')
        },
        {
          path:'dash',
          name: 'dash',
          component: ()=> import('@/views/dashboard/DashBoard.vue')
        }
      ]
    }
  ],
})

export default router
