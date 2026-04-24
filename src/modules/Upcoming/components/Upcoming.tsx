import { Flex } from '@radix-ui/themes';

import { AccordionBlock } from '@components/AccordionBlock/AccordionBlock';

import { UpcomingSelectType } from './UpcomingSelectType';
import { UpcomingTaskGroups } from './UpcomingTaskGroups';

import '../styles/upcoming.scss';

export const Upcoming = () => (
  <Flex className="upcoming">
    <AccordionBlock triggerLabel="Список дел" openByDefault>
      <>
        <UpcomingSelectType />
        <UpcomingTaskGroups />
      </>
    </AccordionBlock>
  </Flex>
);
