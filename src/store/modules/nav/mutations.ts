
import {NAV_TOGGLED} from "../types/nav-types";


export const mutations = {
  [NAV_TOGGLED](state, toggled: boolean) {
    state.navToggled = toggled;
  }
};
