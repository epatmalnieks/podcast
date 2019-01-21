import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
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
      path: '/archive',
      name: 'archive',
      component: () => import('./views/Archive.vue'),
    },
  ],
});
