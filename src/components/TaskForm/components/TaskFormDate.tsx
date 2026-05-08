import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useFormContext } from 'react-hook-form';
import { Button, Flex, Popover, Text } from '@radix-ui/themes';
import { ru } from 'date-fns/locale';
import { Calendar, Calendar1, CalendarClock, Sofa, Sun } from 'lucide-react';

import 'dayjs/locale/ru';

import { TaskFormDateVariantEnum } from '../enum';
import { useSelectDate } from '../hooks';
import { TaskFormInterface } from '../interface';
import { defaultDateVariants, getTranslateDateVariant } from '../utils';

import 'react-day-picker/dist/style.css';

interface Props {
  date: string;
}

const defaultIconSize = 20;

const iconsDateMap: Record<TaskFormDateVariantEnum, React.ReactElement> = {
  [TaskFormDateVariantEnum.Today]: (
    <Calendar1 color="green" width={defaultIconSize} height={defaultIconSize} />
  ),
  [TaskFormDateVariantEnum.Tomorrow]: (
    <Sun color="orange" width={defaultIconSize} height={defaultIconSize} />
  ),
  [TaskFormDateVariantEnum.Weekend]: (
    <Sofa color="#00a3c7" width={defaultIconSize} height={defaultIconSize} />
  ),
  [TaskFormDateVariantEnum.NextWeek]: (
    <CalendarClock color="purple" width={defaultIconSize} height={defaultIconSize} />
  ),
};

export const TaskFormDate = ({ date }: Props) => {
  const [isOpenDatePopover, setIsOpenDatePopover] = useState(false);
  const { setValue } = useFormContext<TaskFormInterface>();

  const closeDatePopover = () => {
    setIsOpenDatePopover(false);
  };

  const {
    selectedDate,
    dateToShow,
    setSelectedDate: onDateSelect,
    handleSelectVariant,
  } = useSelectDate(date, setValue, closeDatePopover);

  return (
    <Popover.Root
      open={isOpenDatePopover}
      onOpenChange={() => setIsOpenDatePopover(prevState => !prevState)}
    >
      <Popover.Trigger>
        <Button
          size="2"
          variant="outline"
          aria-label="Выбрать дату"
          className="task-modal__date-trigger"
          color="gray"
        >
          <Calendar width="18" height="18" />
          <Text size="1">{dateToShow}</Text>
        </Button>
      </Popover.Trigger>

      <Popover.Content
        className="select-date"
        width="275px"
        side="bottom"
        align="start"
        sideOffset={5}
        style={{
          maxHeight: '45vh',
          overflowY: 'auto',
        }}
      >
        <Flex direction="column" className="select-date__section">
          {defaultDateVariants.map(variant => (
            <Flex
              justify="between"
              key={variant.label}
              align="center"
              onClick={() => handleSelectVariant(variant)}
              className="select-date__section-item"
            >
              <Flex gap="3" align="center">
                {iconsDateMap[variant.label]}
                <Text size="2" weight="medium">
                  {getTranslateDateVariant(variant.label)}
                </Text>
              </Flex>
              <Text size="2" color="gray" weight="light">
                {variant.value}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Flex direction="column" className="select-date__section">
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
