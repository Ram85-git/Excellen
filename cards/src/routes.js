import {createWebHistory,createRouter} from 'vue-router'
import Home1 from './components/Home1.vue';
import Login from './components/Login.vue';
import Profile from './components/Profile.vue';
import PageNotFound from './components/PageNotFound.vue';
const routes = [
    {
        name:'Home1',
        path:'/home1',
        component:Home1
    },
    {
        name:'Login',
        path:'/login',
        component:Login
     },
    {
        name:'Profile',
        path:'/profile/:name',
        component: Profile
    },
    {
        name:'NotFound',
        path:'/:pathMatch(.*)*',
        component: PageNotFound
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;