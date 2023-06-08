import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/views/IndexView.vue'
import ProductoView from '@/views/ProductoView.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView,
  },
  {
    path: '/producto',
    name: 'producto',
    component: ProductoView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
