import { createWebHistory, createRouter } from 'vue-router'

import Contact from './pages/Contact.vue'
import Home from './pages/Home.vue'
import Services from './pages/Services.vue'

const base = '/testsite/'
const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/services', component: Services },
]

const router = createRouter({
  history: createWebHistory(base),
  routes,
})

export default router