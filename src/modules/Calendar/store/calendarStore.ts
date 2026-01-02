import dayjs from 'dayjs';
import { makeAutoObservable } from 'mobx';

const now = dayjs().format('MM-YYYY');

class CalendarStore {
  selectedPeriod = now;

  constructor() {
    makeAutoObservable(this);
  }

  updateSelectedPeriod = (newValue: string) => {
    this.selectedPeriod = newValue;
  };
}

export const calendarStore = new CalendarStore();
