import { createWebHistory, createRouter } from "vue-router";

const base = "/testsite/";
const routes = [
  { path: "/", component: () => import("./pages/Home.vue") },
  { path: "/contact", component: () => import("./pages/Contact.vue") },
  { path: "/services", component: () => import("./pages/Services.vue") },
];

const router = createRouter({
  history: createWebHistory(base),
  routes,
});

export default router;
