import Vue from 'vue';
import Router from 'vue-router';
import Cockpit from '../components/cockpit/Cockpit.vue';
import DataExplorer from '../components/cockpit/DataExplorer.vue';
import Admin from '../components/device/device-panel.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cockpit',
      component: Cockpit,
    },
    {
      path: '/data-explorer',
      name: 'DataExplorer',
      component: DataExplorer,
    },
    {
      path: '/device/management',
      name: 'Admin',
      component: Admin,
    },

  ],
});
