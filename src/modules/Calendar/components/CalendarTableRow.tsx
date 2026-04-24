import { Table } from '@radix-ui/themes';

import { CalendarDateInterface } from '../interfaces/interfaces';

import { CalendarTableCell } from './CalendarTableCell';

interface Props {
  week: CalendarDateInterface[];
  selectedPeriod: string;
}

export const CalendarTableRow = ({ week, selectedPeriod }: Props) => {
  return (
    <Table.Row>
      {week.map((day, index) => (
        <CalendarTableCell day={day} key={index} selectedPeriod={selectedPeriod} />
      ))}
    </Table.Row>
  );
};
