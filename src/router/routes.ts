import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: App,
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
        },
        {
          path:'display',
          name: 'display',
          component: ()=> import('@/views/display/Display.vue')
        }
      ]
    }
  ],
})

export default router
