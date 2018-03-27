import {mutations} from "./mutations";
import {actions} from "./actions";
import {getters} from "./getters";
import {IDeviceListNode} from "../../../shared/interfaces/IDeviceListNode";

export interface DeviceState {
  devices: Array<IDeviceListNode>;
}

const initialState: DeviceState = {
  devices: []
};

export default {
  state: {...initialState},
  mutations,
  actions,
  getters,
}
