import { Text } from '@radix-ui/themes';
import dayjs from 'dayjs';

import { createClassName } from '@utils/create-class-name';
import { getSafetyString } from '@utils/get-safety-string';

import { CalendarDateInterface } from '../interfaces/interfaces';

export const CalendarTableCellDate = ({ date }: Pick<CalendarDateInterface, 'date'>) => {
  const isCurrentDay = String(dayjs().date()) === date;

  return (
    <Text
      className={createClassName('table__cell-date', {
        condition: isCurrentDay,
        value: 'current-day',
      })}
    >
      {getSafetyString(date)}
    </Text>
  );
};
