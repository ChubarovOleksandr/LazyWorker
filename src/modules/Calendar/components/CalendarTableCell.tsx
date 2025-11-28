import { Table } from '@radix-ui/themes';

import { CalendarDateInterface } from '../interfaces/interfaces';

import { CalendarTableCellDate } from './CalendarTableCellDate';
import { CalendarTableCellTasks } from './CalendarTableCellTasks';

interface Props {
  day: CalendarDateInterface;
}

export const CalendarTableCell = ({ day }: Props) => {
  return (
    <Table.Cell className="table__cell">
      <CalendarTableCellDate date={day.date} />
      <CalendarTableCellTasks tasks={day.tasks} />
    </Table.Cell>
  );
};
