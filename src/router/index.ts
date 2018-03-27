import Vue from 'vue';
import Router from 'vue-router';
import Alarms from '../components/cockpit/alarms/Alarms.vue';
import Cockpit from '../components/cockpit/Cockpit.vue';
import DataExplorer from '../components/cockpit/DataExplorer.vue';

import DeviceHome from '../components/device/home/device-panel.vue';
import DeviceList from '../components/device/list/device-list.vue';

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
      path: '/device/home',
      name: 'DeviceHome',
      component: DeviceHome,
    },
    {
      path: '/device/list',
      name: 'DeviceList',
      component: DeviceList,
    }

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
