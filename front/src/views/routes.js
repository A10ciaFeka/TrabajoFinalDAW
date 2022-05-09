import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Catalogo from '@/views/catalogo.vue'
import Login from '@/views/login.vue'
import Register from '@/views/register.vue'
import AdminPanel from '@/views/adminPanel.vue'
import review from '@/views/review.vue'
import profile from '@/views/profile.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/catalogo',
        name: 'Catalogo',
        component: Catalogo
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
    },
    {
        path: '/producto',
        name: 'Review',
        component: review
    }
    ,
    {
        path: '/profile',
        name: 'Profile',
        component: profile
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router