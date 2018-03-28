export interface IDeviceListNode {
  id: number
  name: string
  connection: ConnectionStatus
  model: string
  serialNumber: string
  regTime:string
  imei:string


}

export enum ConnectionStatus {
  CONNECTED,
  DISCONNECTED
}
