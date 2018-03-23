import Vue from "vue";
import {FETCH_DEVICES} from "./modules/devices/device-types";
import {DELETE_ITEM, EDIT_ITEM, NAV_TOGGLED, SET_ITEMS} from "./nav-types";


export const mutations = {
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



  [FETCH_DEVICES](state, devices) {
    state.devices = devices;
  }
};
