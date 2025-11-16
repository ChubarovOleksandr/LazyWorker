import { Table } from '@radix-ui/themes';

export const CalendarTableRow = () => {
  return (
    <Table.Row>
      <Table.RowHeaderCell className="table__cell">1</Table.RowHeaderCell>
      {Array.from({ length: 6 }).map((_, index) => {
        return <Table.Cell className="table__cell">{index + 2}</Table.Cell>;
      })}
    </Table.Row>
  );
};
