import axios from 'axios'
import {Config} from '../../config';
import {FETCH_DEVICES, SET_DEVICES} from '../types/device-types';

const API_KEY: string = Config.API_KEY;
const API_PATH: string = Config.API_PATH;

const DEVICE_PATH: string = `${API_PATH}inventory/managedObjects`;
const AUTH_HEADER = {'Authorization': API_KEY};

export const actions = {
  [FETCH_DEVICES]({commit}) {
    return axios.get(DEVICE_PATH, {headers: AUTH_HEADER})
      .then((response) =>
        commit(SET_DEVICES, response.data.managedObjects))
  }
};
