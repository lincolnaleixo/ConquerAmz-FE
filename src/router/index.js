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
    beforeRouteEnter: (to, from, next) => {
      const isLoggedIn = localStorage.getItem('ConquerAmazonUserId');
      return isLoggedIn ? next() : next('/login');
    },
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
    path: '/403',
    name: '403Error',
    component: () => import(/* webpackChunkName: "403" */ '../views/Error403.vue'),
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
    path: '/inventory',
    name: 'Inventory',
    component: () => import(/* webpackChunkName: "inventory" */ '../views/Inventory.vue'),
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: "orders" */ '../views/Orders.vue'),
  },
  {
    path: '/auth-settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL || 'http://localhost:3000',
  routes,
});

// add Authentication route guard:
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwtToken') == null) {
      next({
        path: '/403',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
