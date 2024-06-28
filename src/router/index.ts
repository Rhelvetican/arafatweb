import { createRouter, createWebHistory } from 'vue-router'
import Catalogue from '@/views/Catalogue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Catalogue
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/Catalogue.vue')
    }
  ]
})

export default router
