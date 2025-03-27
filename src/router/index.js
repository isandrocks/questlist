import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  // @ts-expect-error env is defined in vite
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/list',
      name: 'list',
      component:  () => import('../views/ListView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('../views/GameView.vue')
    }
  ]
})

export default router
