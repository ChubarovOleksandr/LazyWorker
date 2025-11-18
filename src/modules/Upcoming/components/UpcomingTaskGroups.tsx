import { useState } from 'react';
import { Accordion } from 'radix-ui';

import { TaskGroupTitleEnum } from '../enums/enum';
import { getTaskForGroup } from '../utils/utils';

import { mockData } from './mock';
import { UpcomingTaskBlock } from './UpcomingTaskBlock';

const defaultTaskBlockPeriod = Object.values(TaskGroupTitleEnum);

export const UpcomingTaskGroups = () => {
  const [openedItems, setOpenedItems] = useState<string[]>(defaultTaskBlockPeriod);

  return (
    <Accordion.Root
      type="multiple"
      className="upcoming__group-selector"
      onValueChange={changedValues => setOpenedItems(changedValues)}
      defaultValue={defaultTaskBlockPeriod}
    >
      {defaultTaskBlockPeriod.map(groupTitle => (
        <UpcomingTaskBlock
          key={groupTitle}
          title={groupTitle}
          tasks={getTaskForGroup(groupTitle, mockData)}
          isOpened={openedItems.includes(groupTitle)}
        />
      ))}
    </Accordion.Root>
  );
};
