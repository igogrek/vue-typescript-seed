import {SET_DEVICES} from "../../device-types";

export const mutations = {
  [SET_DEVICES](state, devices) {
    state.devices = devices;
  }
};


