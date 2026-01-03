import { CalendarDataType } from '@interfaces/dateDataType';
import { NotifyMethodsEnum } from '@enums/notifyMethods';
import { EventPriorityEnum, TaskPriorityEnum } from '@enums/priority';
import { TaskStatusEnum } from '@enums/taskStatus';

export const mockData: CalendarDataType = {
  '01-11-2025': {
    tasks: [
      {
        id: '1',
        title: 'Уборка дома',
        details: 'Пропылесосить и помыть полы',
        priority: TaskPriorityEnum.Important,
        status: TaskStatusEnum.Done,
      },
      {
        id: '52',
        title: 'Чистка компа',
        details: 'Пропылесосить и помыть полы',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.InProgress,
      },
      {
        id: '61',
        title: 'Убрать посуду',
        details: 'Пропылесосить и помыть полы',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.Done,
      },
    ],
    events: [
      {
        id: '2',
        title: 'Звонок с другом',
        details: 'Обсудить планы на выходные',
        priority: EventPriorityEnum.Default,
        notifyBy: [NotifyMethodsEnum.Sounds],
        time: '18:00',
        howLongNotify: '10m',
        notifyAfterMissing: false,
      },
    ],
  },

  '02-11-2025': { tasks: [], events: [] },

  '03-11-2025': {
    tasks: [
      {
        id: '3',
        title: 'Закончить дизайн компонента',
        details: 'Проверить адаптивность',
        priority: TaskPriorityEnum.Important,
        status: TaskStatusEnum.InProgress,
      },
    ],
    events: [],
  },

  '04-11-2025': { tasks: [], events: [] },

  '05-11-2025': {
    tasks: [],
    events: [
      {
        id: '4',
        title: 'Тренировка',
        details: 'Кардио + пресс',
        priority: EventPriorityEnum.Default,
        notifyBy: [NotifyMethodsEnum.TabTitle],
        time: '07:30',
        howLongNotify: '15m',
        notifyAfterMissing: false,
      },
    ],
  },

  '06-11-2025': { tasks: [], events: [] },

  '07-11-2025': {
    tasks: [
      {
        id: '5',
        title: 'Сделать рефакторинг кода',
        details: 'Перенести хелперы в отдельную директорию',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.Done,
      },
      {
        id: '6',
        title: 'Купить продукты',
        details: 'Молоко, хлеб, сыр',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.InProgress,
      },
    ],
    events: [],
  },

  '08-11-2025': { tasks: [], events: [] },

  '09-11-2025': {
    tasks: [],
    events: [
      {
        id: '7',
        title: 'Поход в кино',
        details: 'Новый фильм от DC',
        priority: EventPriorityEnum.Important,
        notifyBy: [NotifyMethodsEnum.PushUp, NotifyMethodsEnum.Sounds],
        time: '20:00',
        howLongNotify: '30m',
        notifyAfterMissing: false,
      },
    ],
  },

  '10-11-2025': { tasks: [], events: [] },

  '11-11-2025': {
    tasks: [
      {
        id: '8',
        title: 'Оплатить коммуналку',
        details: '',
        priority: TaskPriorityEnum.Important,
        status: TaskStatusEnum.InProgress,
      },
    ],
    events: [],
  },

  '12-11-2025': { tasks: [], events: [] },

  '13-11-2025': {
    tasks: [],
    events: [
      {
        id: '9',
        title: 'Онлайн-встреча',
        details: 'Обсуждение проекта',
        priority: EventPriorityEnum.Default,
        notifyBy: [NotifyMethodsEnum.TabTitle],
        time: '15:00',
        howLongNotify: '5m',
        notifyAfterMissing: false,
      },
    ],
  },

  '14-11-2025': { tasks: [], events: [] },

  '15-11-2025': {
    tasks: [
      {
        id: '10',
        title: 'Начать работу над новой страницей',
        details: 'Создать структуру',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.Done,
      },
    ],
    events: [],
  },

  '16-11-2025': {
    tasks: [
      {
        id: '11',
        title: 'Если видишь - значит лажа',
        details: '',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.Done,
      },
    ],
    events: [],
  },

  '17-11-2025': {
    tasks: [
      {
        id: '12',
        title: 'Нужно видеть отсюда',
        details: '',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.Done,
      },
      {
        id: '13',
        title: 'Пройтись в парк',
        details: '30 минут прогулки',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.InProgress,
      },
    ],
    events: [
      {
        id: '14',
        title: 'День рождения друга',
        details: 'Позвонить и поздравить',
        priority: EventPriorityEnum.Important,
        notifyBy: [NotifyMethodsEnum.Sounds],
        time: '10:00',
        howLongNotify: '30m',
        notifyAfterMissing: false,
      },
    ],
  },

  '18-11-2025': { tasks: [], events: [] },

  '19-11-2025': {
    tasks: [
      {
        id: '15',
        title: 'Разобрать почту',
        details: '',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.InProgress,
      },
      {
        id: '16',
        title: 'Пройтись в парк',
        details: '30 минут прогулки',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.Done,
      },
    ],
    events: [],
  },

  '20-11-2025': { tasks: [], events: [] },

  '21-11-2025': {
    tasks: [],
    events: [
      {
        id: '17',
        title: 'Звонок по работе',
        details: 'Сверка дедлайнов',
        priority: EventPriorityEnum.Default,
        notifyBy: [NotifyMethodsEnum.PushUp],
        time: '12:00',
        howLongNotify: '10m',
        notifyAfterMissing: false,
      },
    ],
  },

  '22-11-2025': { tasks: [], events: [] },

  '23-11-2025': {
    tasks: [
      {
        id: '18',
        title: 'И по сюда',
        details: 'Убедиться что всё сохранилось',
        priority: TaskPriorityEnum.Important,
        status: TaskStatusEnum.Done,
      },
    ],
    events: [],
  },

  '24-11-2025': {
    tasks: [
      {
        id: '19',
        title: 'Проверить бэкап',
        details: 'Убедиться что всё сохранилось',
        priority: TaskPriorityEnum.Important,
        status: TaskStatusEnum.InProgress,
      },
    ],
    events: [],
  },

  '25-11-2025': { tasks: [], events: [] },

  '26-11-2025': {
    tasks: [],
    events: [
      {
        id: '20',
        title: 'Тренировка',
        details: '',
        priority: EventPriorityEnum.Default,
        notifyBy: [NotifyMethodsEnum.Sounds],
        time: '08:00',
        howLongNotify: '10m',
        notifyAfterMissing: false,
      },
    ],
  },

  '27-11-2025': { tasks: [], events: [] },

  '28-11-2025': {
    tasks: [
      {
        id: '21',
        title: 'Сделать ревью кода',
        details: 'Проверить утилиты и хуки',
        priority: TaskPriorityEnum.Default,
        status: TaskStatusEnum.Done,
      },
    ],
    events: [],
  },

  '29-11-2025': { tasks: [], events: [] },

  '30-11-2025': {
    tasks: [],
    events: [
      {
        id: '22',
        title: 'Подготовка к декабрю',
        details: 'Продумать задачи на месяц',
        priority: EventPriorityEnum.Default,
        notifyBy: [NotifyMethodsEnum.TabTitle],
        time: '19:00',
        howLongNotify: '5m',
        notifyAfterMissing: false,
      },
    ],
  },
};
