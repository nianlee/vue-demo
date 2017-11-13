import Vue from 'vue';
import Router from 'vue-router';
import vueTabContent from '@/components/vue-tab-content';
import login from '@/components/login/login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: vueTabContent,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
  ],
});
