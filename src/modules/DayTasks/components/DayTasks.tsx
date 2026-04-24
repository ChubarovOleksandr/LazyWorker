import { useSearchParams } from 'react-router-dom';
import { Flex } from '@radix-ui/themes';

import { AccordionBlock } from '@components/AccordionBlock/AccordionBlock';
import { SearchParamsEnum } from '@enums/search-params.enum';

import { getDayTaskLabel } from '../utils/utils';

import { DayTasksList } from './DayTasksList';
import { DayTasksSelectType } from './DayTasksSelectType';

import '../styles/dayTask.scss';

export const DayTasks = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedDate = searchParams.get(SearchParamsEnum.SelectedDate);

  const onClose = () => setSearchParams({});

  return (
    <Flex className="day-task">
      <AccordionBlock
        triggerLabel={getDayTaskLabel(selectedDate)}
        canClose
        onClose={onClose}
        openByDefault
      >
        <>
          <DayTasksSelectType />
          <DayTasksList />
        </>
      </AccordionBlock>
    </Flex>
  );
};
