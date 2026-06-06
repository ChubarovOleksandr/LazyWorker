import { Flex } from '@radix-ui/themes';

import { UpcomingSelectType } from './UpcomingSelectType';
import { UpcomingTaskGroups } from './UpcomingTaskGroups';

import '../styles/upcoming.scss';

export const Upcoming = () => (
  <Flex className="upcoming">
    <span>Список дел</span>
    <UpcomingSelectType />
    <UpcomingTaskGroups />
  </Flex>
);
