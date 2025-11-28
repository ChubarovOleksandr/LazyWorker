import { Table } from '@radix-ui/themes';

import { CalendarTableBody } from './CalendarTableBody';
import { CalendarTableHeader } from './CalendarTableHeader';

export const CalendarTable = () => {
  return (
    <Table.Root className="table">
      <CalendarTableHeader />
      <CalendarTableBody />
    </Table.Root>
  );
};
