import dayjs from 'dayjs';

import { CalendarDataType } from '@interfaces/dateDataType';
import { TaskInterface } from '@interfaces/taskType';

export const groupTasksByDateKey = (tasks: TaskInterface[]): CalendarDataType => {
  const schedule: CalendarDataType = {};

  for (const task of tasks) {
    const key = dayjs(task.date.toDate()).format('DD-MM-YYYY');
    if (!schedule[key]) {
      schedule[key] = { tasks: [] };
    }
    schedule[key].tasks.push(task);
  }

  for (const key of Object.keys(schedule)) {
    schedule[key].tasks.sort((a, b) => a.order - b.order);
  }

  return schedule;
};
