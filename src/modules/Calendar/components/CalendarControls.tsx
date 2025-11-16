import { useState } from 'react';
import { Flex, Text } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const defaultSelectedPeriod = 'Сегодня';
const todayValue = dayjs().locale('ru').format('MMMM, YYYY');
const todayFormattedValue = todayValue.charAt(0).toUpperCase() + todayValue.slice(1);

export const CalendarControls = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(defaultSelectedPeriod);

  return (
    <Flex justify={'between'} align={'center'} mt={'2'} ml={'1'}>
      <Text size={'2'} weight={'bold'}>
        {todayFormattedValue}
      </Text>
      <Flex justify={'between'} align={'center'}>
        <ChevronLeft width={'16'} height={'16'} />
        <Text size={'2'}>{defaultSelectedPeriod}</Text>
        <ChevronRight width={'16'} height={'16'} />
      </Flex>
    </Flex>
  );
};
