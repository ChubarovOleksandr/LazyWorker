import dayjs from 'dayjs';

import { CalendarDataType } from '@interfaces/dateDataType';
import { TaskInterface } from '@interfaces/taskType';
import { isExist } from '@utils/format';

import { TaskGroupTitleEnum } from '../enums/enum';

const DAYS_IN_WEEK = 7;

const getTodayTasks = (allTasks: CalendarDataType) => {
  const today = dayjs().format('DD-MM-YYYY');

  return allTasks[today]?.tasks ?? [];
};

const getTomorrowTasks = (allTasks: CalendarDataType) => {
  const today = dayjs().add(1, 'day').format('DD-MM-YYYY');

  return allTasks[today]?.tasks ?? [];
};

const getNextWeekTasks = (allTasks: CalendarDataType) => {
  const result = [];

  for (let i = 2; i <= DAYS_IN_WEEK; i++) {
    const requiredDate = dayjs().add(i, 'day').format('DD-MM-YYYY');

    if (isExist(allTasks[requiredDate])) {
      result.push(...allTasks[requiredDate].tasks);
    }
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

export const parseGroupTitleToDate = (groupTitle: TaskGroupTitleEnum) => {
  const dateMap = {
    [TaskGroupTitleEnum.Today]: dayjs().format('DD-MM-YYYY'),
    [TaskGroupTitleEnum.Tomorrow]: dayjs().add(1, 'day').format('DD-MM-YYYY'),
    [TaskGroupTitleEnum.NextWeek]: dayjs().isoWeekday(8).format('DD-MM-YYYY'),
  };

  return dateMap[groupTitle];
};
