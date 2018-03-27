import axios from 'axios';
import {SET_ALARMS, FETCH_ALARMS} from '../types/alarm-types';
import {Config} from '../../config';


const API_KEY: string = Config.API_KEY;
const API_PATH: string = Config.API_PATH;

const ALARM_PATH: string = `${API_PATH}alarm/alarms`;
const AUTH_HEADER = {Authorization: API_KEY};


export const actions = {

  [FETCH_ALARMS]({commit}) {
    return axios.get(ALARM_PATH, {headers: AUTH_HEADER})
      .then((response) =>
        commit(SET_ALARMS, response.data.alarms))
  }
}
