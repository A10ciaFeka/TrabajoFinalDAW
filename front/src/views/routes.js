import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Catalog from '@/views/catalog.vue'
import Login from '@/views/login.vue'
import Register from '@/views/register.vue'
import AdminPanel from '@/views/adminPanel.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: Catalog
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/adminPanel',
        name: 'AdminPanel',
        component: AdminPanel
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router