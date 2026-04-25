import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import { makeAutoObservable, runInAction, toJS } from 'mobx';

import { scheduleService } from '@service/scheduleService/scheduleService';
import { authStore } from '@store/authStore';
import { CalendarDataType } from '@interfaces/dateDataType';
import { TaskInterface } from '@interfaces/taskType';
import { isExist } from '@utils/format.ts';
import { groupTasksByDateKey } from '@utils/group-tasks-by-date-key';

class ScheduleStore {
  schedule: CalendarDataType = {};
  daySchedule: CalendarDataType = {};
  loading = false;
  dayLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  private getUserId(): string | undefined {
    return authStore.userId;
  }

  async setDateTasks(dateKey: string, tasks: TaskInterface[]) {
    const userId = this.getUserId();

    if (!isExist(userId)) {
      toast.error('Войдите в аккаунт', { toastId: 'authRequiredOrder' });
      return;
    }

    const withOrder = tasks.map((t, i) => ({ ...t, order: i, userId }));

    runInAction(() => {
      if (!this.schedule[dateKey]) {
        this.schedule[dateKey] = { tasks: [] };
      }
      this.schedule[dateKey].tasks = withOrder;

      if (this.daySchedule && this.daySchedule[dateKey]) {
        this.daySchedule[dateKey].tasks = withOrder;
      }
    });

    try {
      await Promise.all(withOrder.map(t => scheduleService.updateTask(t)));
    } catch (error) {
      console.error(error);
      toast.error('Не удалось сохранить порядок задач', { toastId: 'taskOrderError' });
    }
  }

  async addTask(task: Omit<TaskInterface, 'userId'>) {
    const userId = this.getUserId();

    if (!isExist(userId)) {
      toast.error('Войдите в аккаунт', { toastId: 'authRequiredAddTask' });
      return;
    }

    const originalSchedule = structuredClone(toJS(this.schedule));
    const dateKey = dayjs(task.date.toDate()).format('DD-MM-YYYY');
    const taskWithUser: TaskInterface = { ...task, userId };
    const oldTasks = this.schedule[dateKey]?.tasks ?? [];
    const newList = [taskWithUser, ...oldTasks].map((t, i) => ({ ...t, order: i }));

    runInAction(() => {
      this.schedule[dateKey] = { tasks: newList };
    });

    this.loading = true;
    try {
      await scheduleService.createTask(newList[0]);
      await Promise.all(newList.slice(1).map(t => scheduleService.updateTask(t)));
    } catch (error) {
      runInAction(() => {
        this.schedule = originalSchedule;
      });
      console.error(error);
      toast.error('Ошибка при сохранении данных', { toastId: 'taskAddError' });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async updateTask(task: TaskInterface) {
    const userId = this.getUserId();

    if (!isExist(userId)) {
      toast.error('Войдите в аккаунт', { toastId: 'authRequiredUpdateTask' });
      return;
    }

    const taskWithUserId: TaskInterface = { ...task, userId };

    try {
      for (const date in this.schedule) {
        const dateData = this.schedule[date];
        const taskIndex = dateData.tasks.findIndex(t => t.id === task.id);

        if (taskIndex !== -1) {
          dateData.tasks[taskIndex] = taskWithUserId;
          break;
        }
      }

      const dateKey = dayjs(task.date.toDate()).format('DD-MM-YYYY');
      const dayData = this.daySchedule[dateKey];
      if (dayData) {
        const idx = dayData.tasks.findIndex(t => t.id === task.id);
        if (idx !== -1) {
          dayData.tasks[idx] = taskWithUserId;
        }
      }

      await scheduleService.updateTask(taskWithUserId);
    } catch (error) {
      console.error(error);
      toast.error('Ошибка при обновлении задачи. Попробуйте еще раз', {
        toastId: 'taskUpdateError',
      });
    }
  }

  async loadSchedule() {
    const userId = this.getUserId();

    if (!isExist(userId)) {
      runInAction(() => {
        this.schedule = {};
      });
      return;
    }

    this.loading = true;

    try {
      const tasks = await scheduleService.getTasksByUserId(userId);

      runInAction(() => {
        this.schedule = groupTasksByDateKey(tasks);
      });
    } catch (error) {
      console.error(error);
      toast.error('Ошибка при загрузке расписания. Попробуйте еще раз', {
        toastId: 'scheduleLoadError',
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async loadScheduleForDay(day: Date) {
    const userId = this.getUserId();

    if (!isExist(userId)) {
      runInAction(() => {
        this.daySchedule = {};
      });
      return;
    }

    this.dayLoading = true;

    try {
      const tasks = await scheduleService.getTasksForDay(userId, day);
      runInAction(() => {
        this.daySchedule = groupTasksByDateKey(tasks);
      });
    } catch (error) {
      console.error(error);
      toast.error('Ошибка при загрузке задач за день. Попробуйте еще раз', {
        toastId: 'scheduleDayLoadError',
      });
    } finally {
      runInAction(() => {
        this.dayLoading = false;
      });
    }
  }
}

export const scheduleStore = new ScheduleStore();
