import { Table } from '@radix-ui/themes';

import { CalendarDateInterface } from '../interfaces/interfaces';

import { CalendarTableCell } from './CalendarTableCell';

interface Props {
  week: CalendarDateInterface[];
}

export const CalendarTableRow = ({ week }: Props) => {
  return (
    <Table.Row>
      {week.map((day, index) => (
        <CalendarTableCell day={day} key={index} />
      ))}
    </Table.Row>
  );
};
