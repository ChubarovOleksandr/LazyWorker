import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { UseFormSetValue } from 'react-hook-form';
import { Button, Flex, Popover, Text } from '@radix-ui/themes';
import { ru } from 'date-fns/locale';
import { Calendar, Calendar1, CalendarClock, Sofa, Sun } from 'lucide-react';

import 'dayjs/locale/ru';

import { TaskGroupTitleEnum, UpcomingTaskDateVariantEnum } from '../enums/enum';
import { useSelectDate } from '../hooks/useSelectDate';
import { UpcomingTaskAddFormInterface } from '../interfaces/interface';
import { defaultDateVariants, getTranslateDateVariant } from '../utils/utils';

import 'react-day-picker/dist/style.css';

interface Props {
  period: TaskGroupTitleEnum;
  setValue: UseFormSetValue<UpcomingTaskAddFormInterface>;
}

const defaultIconSize = 20;

const iconsDateMap = {
  [UpcomingTaskDateVariantEnum.Today]: (
    <Calendar1 color={'green'} width={defaultIconSize} height={defaultIconSize} />
  ),
  [UpcomingTaskDateVariantEnum.Tomorrow]: (
    <Sun color={'orange'} width={defaultIconSize} height={defaultIconSize} />
  ),
  [UpcomingTaskDateVariantEnum.Weekend]: (
    <Sofa color={'#00a3c7'} width={defaultIconSize} height={defaultIconSize} />
  ),
  [UpcomingTaskDateVariantEnum.NextWeek]: (
    <CalendarClock color={'purple'} width={defaultIconSize} height={defaultIconSize} />
  ),
};

export const UpcomingTaskDate = ({ period, setValue }: Props) => {
  const [isOpenDatePopover, setIsOpenDatePopover] = useState(false);

  const closeDatePopover = () => {
    setIsOpenDatePopover(false);
  };

  const {
    selectedDate,
    dateToShow,
    setSelectedDate: onDateSelect,
    handleSelectVariant,
  } = useSelectDate(period, setValue, closeDatePopover);

  return (
    <Popover.Root
      open={isOpenDatePopover}
      onOpenChange={() => setIsOpenDatePopover(prevState => !prevState)}
    >
      <Popover.Trigger>
        <Button size={'2'} variant="outline" aria-label="Выбрать дату" color="gray">
          <Calendar width="18" height="18" />
          <Text size="1">{dateToShow}</Text>
        </Button>
      </Popover.Trigger>

      <Popover.Content
        className="select-date__content"
        width={'275px'}
        side="bottom"
        align="start"
        sideOffset={5}
        style={{
          maxHeight: '40vh',
          overflowY: 'auto',
        }}
      >
        <Flex direction={'column'} className="select-date__section">
          {defaultDateVariants.map(variant => (
            <Flex
              justify={'between'}
              key={variant.label}
              align={'center'}
              onClick={() => handleSelectVariant(variant)}
              className="select-date__section-item"
            >
              <Flex gap="3" align={'center'}>
                {iconsDateMap[variant.label]}
                <Text size="2" weight={'medium'}>
                  {getTranslateDateVariant(variant.label)}
                </Text>
              </Flex>
              <Text size={'2'} color="gray" weight={'light'}>
                {variant.value}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Flex direction={'column'} className="select-date__section">
          <DayPicker
            animate
            locale={ru}
            mode="single"
            selected={selectedDate}
            onSelect={onDateSelect}
          />
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
};
