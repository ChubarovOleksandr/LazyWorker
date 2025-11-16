import { Table } from '@radix-ui/themes';

const daysArray = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

export const CalendarTableHeader = () => (
  <Table.Header>
    <Table.Row>
      {daysArray.map(item => (
        <Table.ColumnHeaderCell className="table__column-header" key={item}>
          {item}
        </Table.ColumnHeaderCell>
      ))}
    </Table.Row>
  </Table.Header>
);
