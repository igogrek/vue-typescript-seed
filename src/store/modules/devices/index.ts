import {mutations} from "./mutations";
import {actions} from "./actions";
import {getters} from "./getters";
import {DeviceListNode} from "../../../components/dto/DeviceListNode";

export interface DeviceState {
  devices: Array<DeviceListNode>;
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
