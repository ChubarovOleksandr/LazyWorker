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

export const mockData: CalendarDataType = {
  '01-11-2025': {
    tasks: [
      task('1', '01-11-2025', 0, {
        title: 'Уборка дома',
        description: 'Пропылесосить и помыть полы',
        priority: TaskPriorityEnum.Important,
        status: TaskStatusEnum.Done,
      }),
      task('52', '01-11-2025', 1, {
        title: 'Чистка компа',
        description: 'Пропылесосить и помыть полы',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.InProgress,
      }),
      task('61', '01-11-2025', 2, {
        title: 'Убрать посуду',
        description: 'Пропылесосить и помыть полы',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.Done,
      }),
    ],
  },

  '02-11-2025': { tasks: [] },

  '03-11-2025': {
    tasks: [
      task('3', '03-11-2025', 0, {
        title: 'Закончить дизайн компонента',
        description: 'Проверить адаптивность',
        priority: TaskPriorityEnum.Important,
        status: TaskStatusEnum.InProgress,
      }),
    ],
  },

  '04-11-2025': { tasks: [] },

  '05-11-2025': { tasks: [] },

  '06-11-2025': { tasks: [] },

  '07-11-2025': {
    tasks: [
      task('5', '07-11-2025', 0, {
        title: 'Сделать рефакторинг кода',
        description: 'Перенести хелперы в отдельную директорию',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.Done,
      }),
      task('6', '07-11-2025', 1, {
        title: 'Купить продукты',
        description: 'Молоко, хлеб, сыр',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.InProgress,
      }),
    ],
  },

  '08-11-2025': { tasks: [] },

  '09-11-2025': { tasks: [] },

  '10-11-2025': { tasks: [] },

  '11-11-2025': {
    tasks: [
      task('8', '11-11-2025', 0, {
        title: 'Оплатить коммуналку',
        description: '',
        priority: TaskPriorityEnum.Important,
        status: TaskStatusEnum.InProgress,
      }),
    ],
  },

  '12-11-2025': { tasks: [] },

  '13-11-2025': { tasks: [] },

  '14-11-2025': { tasks: [] },

  '15-11-2025': {
    tasks: [
      task('10', '15-11-2025', 0, {
        title: 'Начать работу над новой страницей',
        description: 'Создать структуру',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.Done,
      }),
    ],
  },

  '16-11-2025': {
    tasks: [
      task('11', '16-11-2025', 0, {
        title: 'Если видишь - значит лажа',
        description: '',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.Done,
      }),
    ],
  },

  '17-11-2025': {
    tasks: [
      task('12', '17-11-2025', 0, {
        title: 'Нужно видеть отсюда',
        description: '',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.Done,
      }),
      task('13', '17-11-2025', 1, {
        title: 'Пройтись в парк',
        description: '30 минут прогулки',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.InProgress,
      }),
    ],
  },

  '18-11-2025': { tasks: [] },

  '19-11-2025': {
    tasks: [
      task('15', '19-11-2025', 0, {
        title: 'Разобрать почту',
        description: '',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.InProgress,
      }),
      task('16', '19-11-2025', 1, {
        title: 'Пройтись в парк',
        description: '30 минут прогулки',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.Done,
      }),
    ],
  },

  '20-11-2025': { tasks: [] },

  '21-11-2025': { tasks: [] },

  '22-11-2025': { tasks: [] },

  '23-11-2025': {
    tasks: [
      task('18', '23-11-2025', 0, {
        title: 'И по сюда',
        description: 'Убедиться что всё сохранилось',
        priority: TaskPriorityEnum.Important,
        status: TaskStatusEnum.Done,
      }),
    ],
  },

  '24-11-2025': {
    tasks: [
      task('19', '24-11-2025', 0, {
        title: 'Проверить бэкап',
        description: 'Убедиться что всё сохранилось',
        priority: TaskPriorityEnum.Important,
        status: TaskStatusEnum.InProgress,
      }),
    ],
  },

  '25-11-2025': { tasks: [] },

  '26-11-2025': { tasks: [] },

  '27-11-2025': { tasks: [] },

  '28-11-2025': {
    tasks: [
      task('21', '28-11-2025', 0, {
        title: 'Сделать ревью кода',
        description: 'Проверить утилиты и хуки',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.Done,
      }),
    ],
  },

  '29-11-2025': { tasks: [] },

  '30-11-2025': { tasks: [] },
};
