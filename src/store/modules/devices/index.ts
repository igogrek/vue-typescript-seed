import {mutations} from "../nav/mutations";
import {actions} from "./actions";
import {getters} from "./getters";

const initialState = {
  devices: [],
};

export default {
  state: {...initialState},
  mutations,
  actions,
  getters,
}
