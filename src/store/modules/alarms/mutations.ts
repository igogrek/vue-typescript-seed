import Vue from 'vue';
import {SET_ALARMS, EDIT_ALARM_OPEN} from "../types/alarm-types";
import {AlarmState} from "./index";
import {IAlarm} from "../../../shared/interfaces/IAlarm";

export const mutations = {
  [SET_ALARMS](state: AlarmState, alarms: IAlarm[]) {
    state.alarms = alarms;
  },

  [EDIT_ALARM_OPEN](alarm, payload) {
    Vue.set(payload.alarm, payload.index, payload.item)
  }
};
