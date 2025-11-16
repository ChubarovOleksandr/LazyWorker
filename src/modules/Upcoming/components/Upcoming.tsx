import { Accordion } from 'radix-ui';

import { AccordionBlock } from '@components/AccordionBlock/AccordionBlock';

import { UpcomingSelectType } from './UpcomingSelectType';
import { UpcomingTaskBlock } from './UpcomingTaskBlock';

import '../styles/upcoming.scss';

const upcomingPeriodsTitle = {
  '12-05-2025': {
    tasks: [
      {
        title: 'Закончить авторизацию',
        details:
          'Закончить авторизацию, не забыть сделать скрытия пароля. Потом скинуть задачу на ревью',
        priority: 'default',
      },
      {
        title: 'Купить билеты',
        details: 'Купить билет з 10 по 15 на утро',
        priority: 'important',
      },
    ],
    events: [
      {
        title: 'Стендап',
        details: '',
        priority: 'default',
        notifyBy: ['tabTitle', 'pushUp', 'sounds'],
        time: '11:15',
        howLongNotify: '5m',
        notifyAfterMissing: false,
      },
    ],
  },
};

export const Upcoming = () => {
  return (
    <div className="upcoming">
      <AccordionBlock itemValue="upcoming" triggerLabel="Список дел" openByDefault>
        <>
          <UpcomingSelectType />

          <Accordion.Root type="single" collapsible>
            {Object.keys(upcomingPeriodsTitle).map(date => (
              // <UpcomingTaskBlock taskSectionData={upcomingPeriodsTitle[date]} />
            ))}
          </Accordion.Root>
        </>
      </AccordionBlock>
    </div>
  );
};
