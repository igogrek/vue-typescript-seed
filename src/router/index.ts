import Vue from 'vue';
import Router from 'vue-router';
import Alarms from '../components/cockpit/alarms/Alarms.vue';
import Cockpit from '../components/cockpit/Cockpit.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cockpit',
      component: Cockpit,
    },
    {
      path: '/test/:id',
      name: 'Test',
      component: Cockpit,
    },
    {
      path: '/alarms',
      name: 'Alarms',
      component: Alarms
    }
  ],
});
