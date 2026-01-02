import { Table } from '@radix-ui/themes';
import { observer } from 'mobx-react-lite';

import { mockCalendarData } from '../__test__/mockData';
import { calendarStore } from '../store/calendarStore';
import { prepareCalendarRows } from '../utils/utils';

import { CalendarTableRow } from './CalendarTableRow';

export const CalendarTableBody = observer(() => {
  const { selectedPeriod } = calendarStore;

  const preparedRows = prepareCalendarRows(
    // toJS(scheduleStore.schedule),
    mockCalendarData,
    selectedPeriod,
  );

  return (
    <Table.Body>
      {preparedRows.map((week, index) => (
        <CalendarTableRow week={week} key={index} />
      ))}
    </Table.Body>
  );
});
