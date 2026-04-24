import dayjs from 'dayjs';
import { Timestamp } from 'firebase/firestore';

import { CalendarDataType } from '@interfaces/dateDataType';
import { TaskInterface } from '@interfaces/taskType';
import { TaskPriorityEnum } from '@enums/task-priority.enum';
import { TaskStatusEnum } from '@enums/task-status.enum';

const MOCK_USER_ID = 'mock-user-id';

const taskDate = (dateKey: string) => Timestamp.fromDate(dayjs(dateKey, 'DD-MM-YYYY').toDate());

const task = (
  id: string,
  dateKey: string,
  order: number,
  fields: Pick<TaskInterface, 'title' | 'description' | 'priority' | 'status'>,
): TaskInterface => ({
  id,
  userId: MOCK_USER_ID,
  date: taskDate(dateKey),
  category: '',
  order,
  ...fields,
});

export const mockCalendarData: CalendarDataType = {
  '10-11-2025': {
    tasks: [
      task('123', '10-11-2025', 0, {
        title: 'Вынести мусор',
        description: 'Убраться дома и вынести все коробки',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.Done,
      }),
    ],
  },
  '31-12-2025': {
    tasks: [
      task('125', '31-12-2025', 0, {
        title: 'Купить продукты',
        description: 'Купить продукты к новому году',
        priority: TaskPriorityEnum.Important,
        status: TaskStatusEnum.Done,
      }),
    ],
  },
  '01-01-2026': {
    tasks: [
      task('126', '01-01-2026', 0, {
        title: 'Вынести мусор',
        description: 'Убраться дома и вынести все коробки',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.Done,
      }),
    ],
  },
};
