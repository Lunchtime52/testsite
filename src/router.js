import { createWebHistory, createRouter } from 'vue-router'

import Contact from './pages/Contact.vue'
import Home from './pages/Home.vue'

const base = '/testsite/'
const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(base),
  routes,
})

export default router