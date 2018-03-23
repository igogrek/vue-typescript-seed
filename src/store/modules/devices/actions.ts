import axios from 'axios'
import {FETCH_DEVICES} from "./device-types";

const API_PATH: string = 'https://evgeniiray.cumulocity.com/';
const DEVICE_PATH: string = `${API_PATH}inventory/managedObjects`;

export const actions = {
  [FETCH_DEVICES]({commit}) {
    return axios.get(DEVICE_PATH)
      .then((response) =>
        commit(FETCH_DEVICES, response.data))
  }
};
