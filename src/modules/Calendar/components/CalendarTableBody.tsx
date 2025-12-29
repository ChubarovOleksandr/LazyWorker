import { Table } from '@radix-ui/themes';
import { toJS } from 'mobx';

import { scheduleStore } from 'src/store/scheduleStore';

import { prepareCalendarRows } from '../utils/utils';

import { CalendarTableRow } from './CalendarTableRow';

export const CalendarTableBody = () => {
  const preparedRows = prepareCalendarRows(toJS(scheduleStore.schedule));

  return (
    <Table.Body>
      {preparedRows.map((week, index) => (
        <CalendarTableRow week={week} key={index} />
      ))}
    </Table.Body>
  );
};
