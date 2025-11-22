import { makeAutoObservable } from 'mobx';

import { CalendarDataType } from 'src/interfaces/dateDataType';

class ScheduleStore {
  schedule: CalendarDataType = {};

  constructor() {
    makeAutoObservable(this);
  }

  setSchedule(data: CalendarDataType) {
    this.schedule = data;
  }
}

export const scheduleStore = new ScheduleStore();
