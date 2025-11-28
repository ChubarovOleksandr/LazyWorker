import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';

import { isExist } from '@utils/format';

import { CalendarDataType } from 'src/interfaces/dateDataType';
import { TaskInterface } from 'src/interfaces/taskType';

import { TaskGroupTitleEnum, UpcomingTaskDateVariantEnum } from '../enums/enum';
import { UpcomingTaskDateVariant } from '../interfaces/interface';

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

dayjs.extend(isoWeek);
dayjs.locale('ru');

export const defaultDateVariants: UpcomingTaskDateVariant[] = [
  {
    label: UpcomingTaskDateVariantEnum.Today,
    value: dayjs().format('dd'),
  },
  {
    label: UpcomingTaskDateVariantEnum.Tomorrow,
    value: dayjs().add(1, 'day').format('dd'),
  },
  {
    label: UpcomingTaskDateVariantEnum.Weekend,
    value: 'сб',
  },
  {
    label: UpcomingTaskDateVariantEnum.NextWeek,
    value: dayjs().isoWeekday(8).format('dd, D MMM'),
  },
];

export const getTranslateDateVariant = (variant: UpcomingTaskDateVariantEnum) => {
  const variantMap: Record<UpcomingTaskDateVariantEnum, string> = {
    [UpcomingTaskDateVariantEnum.Today]: 'Сегодня',
    [UpcomingTaskDateVariantEnum.Tomorrow]: 'Завтра',
    [UpcomingTaskDateVariantEnum.Weekend]: 'На выходных',
    [UpcomingTaskDateVariantEnum.NextWeek]: 'Cлед. неделе',
  };

  return variantMap[variant];
};

export const getDateByGroupTitle = (groupTitle: TaskGroupTitleEnum): Date => {
  const dateMap = {
    [TaskGroupTitleEnum.Today]: dayjs().toDate(),
    [TaskGroupTitleEnum.Tomorrow]: dayjs().add(1, 'day').toDate(),
    [TaskGroupTitleEnum.NextWeek]: dayjs().isoWeekday(8).toDate(),
  };

  return dateMap[groupTitle];
};
