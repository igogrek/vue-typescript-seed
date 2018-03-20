import Vue from 'vue'
import Vuex from 'vuex'

import {DELETE_ITEM, EDIT_ITEM, SET_ITEMS, NAV_TOGGLED} from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    navToggled: true,
    loading: true
  },
  mutations: {
    [NAV_TOGGLED](state, toggled: boolean) {
      state.navToggled = toggled;
    },
    [SET_ITEMS](state, payload) {
      state.items = payload;
      state.loading = false;
    },
    [DELETE_ITEM](state, index: number) {
      state.items.splice(index, 1)
    },
    [EDIT_ITEM](state, payload) {
      Vue.set(state.items, payload.index, payload.item)
    },
  },
})
