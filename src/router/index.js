import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Auth from '../views/Auth.vue';
import Error404Page from '../views/Error404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: Error404Page,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: '/auth/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../components/Auth/Login.vue'),
      },
      {
        path: '/auth/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "login" */ '../components/Auth/Register.vue'),
      },
      {
        path: '/auth/forgot-password',
        name: 'ForgotPassword',
        component: () => import(/* webpackChunkName: "forgotPassword" */ '../components/Auth/ForgotPassword.vue'),
      },
      {
        path: '/samples',
        name: 'ComponentsSamples',
        component: () => import(/* webpackChunkName: "componentsSamples" */ '../views/ComponentsSamples.vue'),
      },
    ],
  },
  {
    path: '/auth-settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
