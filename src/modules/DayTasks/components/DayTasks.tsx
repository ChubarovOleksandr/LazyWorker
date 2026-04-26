import { Flex } from '@radix-ui/themes';
import { observer } from 'mobx-react-lite';

import { AccordionBlock } from '@components/AccordionBlock/AccordionBlock';
import { isNotEmptyArray } from '@utils/format';

import { useDayTask } from '../hooks/useDayTask';
import { getDayTaskLabel } from '../utils/utils';

import { DayTasksEmptyList } from './DayTasksEmptyList';
import { DayTasksList } from './DayTasksList';
import { DayTasksSelectType } from './DayTasksSelectType';

import '../styles/dayTask.scss';

export const DayTasks = observer(() => {
  const { selectedDate, onClose, tasks, isLoading } = useDayTask();

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
          {isLoading ? null : isNotEmptyArray(tasks) ? (
            <DayTasksList tasks={tasks} date={selectedDate} />
          ) : (
            <DayTasksEmptyList date={selectedDate} />
          )}
        </>
      </AccordionBlock>
    </Flex>
  );
});
