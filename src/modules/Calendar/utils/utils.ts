import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';

import { CalendarDataType } from 'src/interfaces/dateDataType';

import { CalendarDateInterface } from '../interfaces/interfaces';

dayjs.extend(weekday);

export const prepareCalendarRows = (data: CalendarDataType) => {
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
    const dateKey = dayjs().date(i).format('DD-MM-YYYY');
    const dateData: CalendarDateInterface = data[dateKey] ?? { events: [], tasks: [] };
    dateData.date = String(i);

    week.push(dateData);

    if (week.length === 7) {
      result.push(week);
      week = [];
    }
  }

  if (week.length > 0) {
    result.push(week);
  }

  return result;
};
