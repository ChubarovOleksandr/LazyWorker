import { TaskPriorityEnum } from '@enums/priority';
import { TaskStatusEnum } from '@enums/taskStatus';

import { CalendarDataType } from 'src/interfaces/dateDataType';

export const mockCalendarData: CalendarDataType = {
  '10-11-2025': {
    tasks: [
      {
        title: 'Вынести мусор',
        details: 'Убраться дома и вынести все коробки',
        priority: TaskPriorityEnum.Default,
        id: '123',
        status: TaskStatusEnum.Done,
        group: [],
      },
    ],
    events: [],
  },
  '31-12-2025': {
    tasks: [
      {
        title: 'Купить продукты',
        details: 'Купить продукты к новому году',
        priority: TaskPriorityEnum.Important,
        id: '125',
        status: TaskStatusEnum.Done,
        group: [],
      },
    ],
    events: [],
  },
  '01-01-2026': {
    tasks: [
      {
        title: 'Вынести мусор',
        details: 'Убраться дома и вынести все коробки',
        priority: TaskPriorityEnum.Default,
        id: '126',
        status: TaskStatusEnum.Done,
        group: [],
      },
    ],
    events: [],
  },
};
