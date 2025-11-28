import { toast } from 'react-toastify';
import { makeAutoObservable, runInAction } from 'mobx';

import { CalendarDataType } from 'src/interfaces/dateDataType';
import { scheduleService } from 'src/service/scheduleService/scheduleService';

class ScheduleStore {
  schedule: CalendarDataType = {};
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async loadSchedule() {
    this.loading = true;

    try {
      const scheduleData = await scheduleService.getSchedule();

      runInAction(() => {
        this.schedule = scheduleData;
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        toast.error('Ошибка при загрузке расписания. Попробуйте еще раз', {
          toastId: 'scheduleLoadError',
        });
        this.loading = false;
      });
    }
  }
}

export const scheduleStore = new ScheduleStore();
