import { createRouter, createWebHistory } from "vue-router";
import login from "../views/login.vue";
import dashboard from "../views/dashboard.vue";


const routes = [
    {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
    },
    {
    path: '/login',
    name: 'login',
    component: login
    },
];

const router = createRouter( {
    history: createWebHistory(),
    routes
})

export default router