import Vue from 'vue';
import Router from 'vue-router';
import Cockpit from '../components/cockpit/Cockpit.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cockpit',
      component: Cockpit,
    }
  ],
});
