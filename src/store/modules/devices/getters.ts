import {GET_DEVICES} from "../../device-types";

export const getters = {
  [GET_DEVICES](state) {
    return state.devices;
  }
};
