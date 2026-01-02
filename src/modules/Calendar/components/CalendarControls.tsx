import { Flex, Text } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { observer } from 'mobx-react-lite';

import { calendarStore } from '../store/calendarStore';
import { formatSelectedPeriodDate } from '../utils/utils';

const ONE_MONTH = 1;

export const CalendarControls = observer(() => {
  const { selectedPeriod, updateSelectedPeriod } = calendarStore;

  const addMonth = () => {
    updateSelectedPeriod(
      dayjs(selectedPeriod, 'MM-YYYY').add(ONE_MONTH, 'month').format('MM-YYYY'),
    );
  };

  const minusMonth = () => {
    updateSelectedPeriod(
      dayjs(selectedPeriod, 'MM-YYYY').subtract(ONE_MONTH, 'month').format('MM-YYYY'),
    );
  };

  return (
    <Flex justify={'between'} align={'center'} mt={'2'} ml={'1'} gap={'1'}>
      <ChevronLeft width={'20'} height={'20'} className="chevron" onClick={minusMonth} />
      <Text size={'2'} weight={'bold'}>
        {formatSelectedPeriodDate(selectedPeriod)}
      </Text>
      <ChevronRight width={'20'} height={'20'} className="chevron" onClick={addMonth} />
    </Flex>
  );
});
