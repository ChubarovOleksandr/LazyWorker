import dayjs from 'dayjs';

import { CalendarDataType } from '@interfaces/dateDataType';
import { TaskInterface } from '@interfaces/taskType';

import { isExist } from './format';

/**
 * Groups tasks by their date key
 * @param tasks Tasks which to group
 * @param requiredDate Not required params, if provided in return result always include this date
 * @returns Object with date keys as properties and arrays of tasks as values
 */

export const groupTasksByDateKey = (
  tasks: TaskInterface[],
  requiredDate?: Date,
): CalendarDataType => {
  const schedule: CalendarDataType = {};

  if (isExist(requiredDate)) {
    const key = dayjs(requiredDate).format('DD-MM-YYYY');
    schedule[key] = { tasks: [] };
  }

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
