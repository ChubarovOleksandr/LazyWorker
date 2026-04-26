import { useSearchParams } from 'react-router-dom';
import { Table } from '@radix-ui/themes';

import { SearchParamsEnum } from '@enums/search-params.enum';
import { createClassName } from '@utils/create-class-name';
import { isExist } from '@utils/format';

import { CalendarDateInterface } from '../interfaces/interfaces';

import { CalendarTableCellDate } from './CalendarTableCellDate';
import { CalendarTableCellTasks } from './CalendarTableCellTasks';

interface Props {
  day: CalendarDateInterface;
  selectedPeriod: string;
}

export const CalendarTableCell = ({ day: { date, tasks }, selectedPeriod }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onSelectDay = () => {
    const isDateAlreadySelected =
      searchParams.get(SearchParamsEnum.SelectedDate) === `${date}-${selectedPeriod}`;

    if (!isExist(date) || isDateAlreadySelected) {
      return;
    }

    setSearchParams({
      [SearchParamsEnum.SelectedDate]: `${date}-${selectedPeriod}`,
    });
  };

  const isSelected =
    searchParams.get(SearchParamsEnum.SelectedDate) === `${date}-${selectedPeriod}`;

  return (
    <Table.Cell
      className={createClassName(`table__cell`, {
        condition: isSelected,
        value: 'table__cell--selected',
      })}
      onClick={onSelectDay}
    >
      <CalendarTableCellDate date={date} />
      <CalendarTableCellTasks tasks={tasks} />
    </Table.Cell>
  );
};
