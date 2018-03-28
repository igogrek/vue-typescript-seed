import {GET_DEVICES} from "../types/device-types";
import {DeviceState} from "./index";

export const getters = {
  [GET_DEVICES](state: DeviceState) {
    return state.devices;
  }
};
