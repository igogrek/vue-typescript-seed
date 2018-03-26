import Vue from 'vue'
import Vuex from 'vuex'

import {SET_ALARMS, NAV_TOGGLED, EDIT_ALARM_OPEN} from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alarms: [],
    navToggled: true,
    loading: true
  },
  mutations: {
    [NAV_TOGGLED](state, toggled: boolean) {
      state.navToggled = toggled;
    },
    [SET_ALARMS](state, payload) {
      state.alarms = payload;
      state.loading = false;
    },
    [EDIT_ALARM_OPEN](alarm, payload) {
      Vue.set(payload.alarm, payload.index, payload.item)
    }
  },
})
