import {SET_DEVICES} from "../types/device-types";
import {DeviceState} from "./index";
import {ConnectionStatus, DeviceListNode} from "../../../components/dto/DeviceListNode";

export const mutations = {
  [SET_DEVICES](state: DeviceState, devices: Object) {
    debugger;
    state.devices = mapObjToDevices(devices);
  }
};

function mapObjToDevices(devices: any): Array<DeviceListNode> {
  return devices.filter(obj => obj.name !== undefined)
    .map(obj => {
      return {
        id: obj.id,
        name: obj.name,
        connection: ConnectionStatus.DISCONNECTED,
        model: obj.c8y_Hardware.model,
        serialNumber: obj.c8y_Hardware.serialNumber,
        regTime: obj.creationTime,
        imei: obj.c8y_Mobile.imei
      };
    })
}




