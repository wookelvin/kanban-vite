import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./views/Kanban.vue')
    },
    {
        path: '/:slug',
        name: 'Board',
        component: () => import('./views/Kanban.vue')
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router