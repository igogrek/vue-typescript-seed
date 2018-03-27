import axios from 'axios'
import {FETCH_DEVICES, SET_DEVICES} from "../types/device-types";

const API_KEY: string = "Basic ZXZnZW5paXJheS90aXRrb3YuZXZnZW5AZ21haWwuY29tOmRhcmtpODkyNzI3OA==";
const API_PATH: string = 'https://evgeniiray.cumulocity.com/';

const DEVICE_PATH: string = `${API_PATH}inventory/managedObjects`;
const AUTH_HEADER = {'Authorization': API_KEY};

export const actions = {
  [FETCH_DEVICES]({commit}) {
    return axios.get(DEVICE_PATH, {headers: AUTH_HEADER})
      .then((response) =>
        commit(SET_DEVICES, response.data.managedObjects))
  }
};
