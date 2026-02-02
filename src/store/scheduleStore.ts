import { toast } from 'react-toastify';
import { makeAutoObservable, runInAction } from 'mobx';

import { scheduleService } from '@service/scheduleService/scheduleService';
import { CalendarDataType } from '@interfaces/dateDataType';
import { TaskInterface } from '@interfaces/taskType';

import { isExist } from '../utils/format';

class ScheduleStore {
  schedule: CalendarDataType = {};
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  // SYNC

  setSchedule(schedule: CalendarDataType) {
    this.schedule = schedule;
  }

  setDateTasks(date: string, tasks: TaskInterface[]) {
    this.schedule[date].tasks = tasks;
  }

  // ASYNC

  async addTask(task: TaskInterface, date: string, userId: string) {
    const requiredDateData = this.schedule[date];
    const isDateExist = isExist(requiredDateData);

    if (isDateExist) {
      requiredDateData.tasks = [task, ...requiredDateData.tasks];
    } else {
      this.schedule[date] = { tasks: [task], events: [] };
    }

    this.loading = true;
    try {
      await scheduleService.updateSchedule(this.schedule, userId);
    } finally {
      runInAction(() => (this.loading = false));
    }
  }

  async updateTask(task: TaskInterface, userId: string) {
    const { id } = task;

    try {
      for (const date in this.schedule) {
        const dateData = this.schedule[date];
        const taskIndex = dateData.tasks.findIndex(t => t.id === id);

        if (taskIndex !== -1) {
          dateData.tasks[taskIndex] = task;
          break;
        }
      }

      await scheduleService.updateSchedule(this.schedule, userId);
    } catch (error) {
      toast.error('Ошибка при обновлении задачи. Попробуйте еще раз', {
        toastId: 'taskUpdateError',
      });
    }
  }

  async loadSchedule(userId: string) {
    this.loading = true;

    try {
      const scheduleData = await scheduleService.getSchedule(userId);

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
