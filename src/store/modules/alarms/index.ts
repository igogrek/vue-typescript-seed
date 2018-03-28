import {mutations} from "./mutations";
import {actions} from "./actions";
import {getters} from "./getters";
import  {IAlarm} from "../../../shared/interfaces/IAlarm";

export interface AlarmState {
  alarms: IAlarm[];
  loading: boolean;
}

const initialState: AlarmState = {
  alarms: [],
  loading: true
};

export default {
  state: {...initialState},
  mutations,
  actions,
  getters,
}
