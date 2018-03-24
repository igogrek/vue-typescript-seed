declare let process: any;

import Vue from 'vue'
import Vuex from 'vuex'

import devices from './modules/devices'
import nav from './modules/nav'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    devices,
    nav,
  }
})



