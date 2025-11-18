import dayjs from 'dayjs';

import { CalendarDataType } from 'src/interfaces/dateDataType';
import { TaskInterface } from 'src/interfaces/taskType';

import { TaskGroupTitleEnum } from '../enums/enum';

const DAYS_IN_WEEK = 7;

const getTodayTasks = (allTasks: CalendarDataType) => {
  const today = dayjs().format('DD-MM-YYYY');

  return allTasks[today].tasks;
};

const getTomorrowTasks = (allTasks: CalendarDataType) => {
  const today = dayjs().add(1, 'day').format('DD-MM-YYYY');

  return allTasks[today].tasks;
};

const getNextWeekTasks = (allTasks: CalendarDataType) => {
  const result = [];

  for (let i = 1; i <= DAYS_IN_WEEK; i++) {
    const requiredDate = dayjs().add(i, 'day').format('DD-MM-YYYY');

    result.push(...allTasks[requiredDate].tasks);
  }

  return result;
};

export const getTaskForGroup = (period: TaskGroupTitleEnum, allTasks: CalendarDataType) => {
  const periodMap: Record<TaskGroupTitleEnum, TaskInterface[]> = {
    [TaskGroupTitleEnum.Today]: getTodayTasks(allTasks),
    [TaskGroupTitleEnum.Tomorrow]: getTomorrowTasks(allTasks),
    [TaskGroupTitleEnum.NextWeek]: getNextWeekTasks(allTasks),
  };

  return periodMap[period];
};
