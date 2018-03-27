import {mutations} from "./mutations";
import {actions} from "./actions";
import {getters} from "./getters";


const initialState = {
  items: [],
  navToggled: true,
  loading: true
};

export default {
  state: {...initialState},
  mutations,
  actions,
  getters,
}
