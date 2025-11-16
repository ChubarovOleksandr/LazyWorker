import { Table } from '@radix-ui/themes';

import { CalendarTableHeader } from './CalendarTableHeader';
import { CalendarTableRow } from './CalendarTableRow';

export const CalendarTable = () => {
  return (
    <Table.Root className="table">
      <CalendarTableHeader />

      <Table.Body>
        <CalendarTableRow />
        <CalendarTableRow />
        <CalendarTableRow />
        <CalendarTableRow />
      </Table.Body>
    </Table.Root>
  );
};
