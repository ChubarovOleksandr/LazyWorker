import { Table } from '@radix-ui/themes';

import { mockData } from '@modules/Upcoming/components/mock';

import { prepareCalendarRows } from '../utils/utils';

import { CalendarTableRow } from './CalendarTableRow';

export const CalendarTableBody = () => {
  const preparedRows = prepareCalendarRows(mockData);

  return (
    <Table.Body>
      {preparedRows.map((week, index) => (
        <CalendarTableRow week={week} key={index} />
      ))}
    </Table.Body>
  );
};
