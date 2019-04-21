import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/bios',
    name: 'bios',
    component: () => import('./views/Bios.vue'),
  },
  {
    path: '/allPodcasts',
    name: 'allPodcasts',
    component: () => import('./views/AllPodcasts.vue'),
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: () => import('./views/ContactUs.vue'),
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('./views/Shop.vue'),
  },
  ],
});
