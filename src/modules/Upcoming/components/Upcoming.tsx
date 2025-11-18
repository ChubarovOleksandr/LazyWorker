import { Flex } from '@radix-ui/themes';

import { AccordionBlock } from '@components/AccordionBlock/AccordionBlock';

import { UpcomingSelectType } from './UpcomingSelectType';
import { UpcomingTaskGroups } from './UpcomingTaskGroups';

import '../styles/upcoming.scss';

export const Upcoming = () => {
  return (
    <Flex className="upcoming">
      <AccordionBlock itemValue="upcoming" triggerLabel="Список дел" openByDefault>
        <>
          <UpcomingSelectType />
          <UpcomingTaskGroups />
        </>
      </AccordionBlock>
    </Flex>
  );
};
