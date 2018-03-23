import {actions} from "./modules/devices/actions";
import {mutations} from "./mutation-types";

const initialState = {
  devices: [],
  items: [],
  navToggled: true,
  loading: true
};

export default {
  state: {...initialState},
  mutations,
  actions,
}




