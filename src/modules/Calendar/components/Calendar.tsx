import 'dayjs/locale/ru';

import { CalendarControls } from './CalendarControls';
import { CalendarTable } from './CalendarTable';
import { CalendarTabs } from './CalendarTabs';

import '../styles/calendar.scss';

export const Calendar = () => {
  return (
    <div className="calendar">
      <span>Календарь</span>
      <CalendarTabs />
      <CalendarControls />
      <CalendarTable />
    </div>
  );
};
