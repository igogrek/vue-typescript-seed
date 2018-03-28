import {GET_ALARMS} from "../types/alarm-types";
import {AlarmState} from "./index";

export const getters = {
  [GET_ALARMS](state: AlarmState) {
    return state.alarms;
  }
};
