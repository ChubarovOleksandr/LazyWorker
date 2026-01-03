import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import weekday from 'dayjs/plugin/weekday';

import { CalendarDataType } from '@interfaces/dateDataType';
import { isNotEmptyArray } from '@utils/format';

import { CalendarDateInterface } from '../interfaces/interfaces';

dayjs.extend(weekday);
dayjs.extend(customParseFormat);

export const prepareCalendarRows = (schedule: CalendarDataType, selectedPeriod: string) => {
  const result: CalendarDateInterface[][] = [];
  const firstDayOfMonth = dayjs().date(1).weekday(); // 0 is Monday
  const daysInMonth = dayjs().daysInMonth();

  let week: CalendarDateInterface[] = [];

  if (firstDayOfMonth !== 0) {
    for (let j = 0; j < firstDayOfMonth; j++) {
      week.push({ date: null, events: [], tasks: [] });
    }
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dateKey = dayjs(selectedPeriod, 'MM-YYYY').date(i).format('DD-MM-YYYY');
    const dateData: CalendarDateInterface = schedule[dateKey] ?? { events: [], tasks: [] };

    dateData.date = String(i);

    week.push(dateData);

    if (week.length === 7) {
      result.push(week);
      week = [];
    }
  }

  if (isNotEmptyArray(week)) {
    result.push(week);
  }

  return result;
};

// format selected period (10-2025) to "October, 2025" in russian locale
export const formatSelectedPeriodDate = (value: string) => {
  const formattedValue = dayjs(value, 'MM-YYYY', 'ru', true).format('MMMM, YYYY');
  return formattedValue.charAt(0).toUpperCase() + formattedValue.slice(1);
};
