import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';

import { TaskFormDateVariantEnum } from './enum';
import { TaskFormDateVariant } from './interface';

export const getTranslateDateVariant = (variant: TaskFormDateVariantEnum) => {
  const variantMap: Record<TaskFormDateVariantEnum, string> = {
    [TaskFormDateVariantEnum.Today]: 'Сегодня',
    [TaskFormDateVariantEnum.Tomorrow]: 'Завтра',
    [TaskFormDateVariantEnum.Weekend]: 'На выходных',
    [TaskFormDateVariantEnum.NextWeek]: 'Cлед. неделя',
  };

  return variantMap[variant];
};

dayjs.extend(isoWeek);
dayjs.locale('ru');

export const defaultDateVariants: TaskFormDateVariant[] = [
  {
    label: TaskFormDateVariantEnum.Today,
    value: dayjs().format('dd'),
  },
  {
    label: TaskFormDateVariantEnum.Tomorrow,
    value: dayjs().add(1, 'day').format('dd'),
  },
  {
    label: TaskFormDateVariantEnum.Weekend,
    value: 'сб',
  },
  {
    label: TaskFormDateVariantEnum.NextWeek,
    value: dayjs().isoWeekday(8).format('dd, D MMM'),
  },
];
