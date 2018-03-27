export interface IAlarm {
  id: string;
  severity: string;
  status: string;
  text: string;
  time:Date;
  type:string;
  source: IAlarmSource,
  isOpen: boolean
}

export interface  IAlarmSource {
  id: string,
  name: string
}
