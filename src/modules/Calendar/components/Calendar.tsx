import 'dayjs/locale/ru';

import { AccordionBlock } from '@components/AccordionBlock/AccordionBlock';

import { CalendarControls } from './CalendarControls';
import { CalendarTable } from './CalendarTable';
import { CalendarTabs } from './CalendarTabs';

import '../styles/calendar.scss';

export const Calendar = () => {
  return (
    <div className="calendar">
      <AccordionBlock itemValue="calendar" triggerLabel="Календарь" openByDefault>
        <>
          <CalendarTabs />
          <CalendarControls />
          <CalendarTable />
        </>
      </AccordionBlock>
    </div>
  );
};
