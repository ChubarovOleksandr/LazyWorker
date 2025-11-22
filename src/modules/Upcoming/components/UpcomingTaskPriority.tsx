import { useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { Select, Text } from '@radix-ui/themes';

import { TaskPriorityEnum } from '@enums/priority';

import { UpcomingTaskFieldsEnum } from '../enums/enum';
import { UpcomingTaskAddFormInterface } from '../interfaces/interface';

interface Props {
  setValue: UseFormSetValue<UpcomingTaskAddFormInterface>;
}

export const UpcomingTaskPriority = ({ setValue }: Props) => {
  const [selectedPriority, setSelectedPriority] = useState<TaskPriorityEnum>(
    TaskPriorityEnum.Default,
  );

  const onChangePriority = (priority: TaskPriorityEnum) => {
    setSelectedPriority(priority);
    setValue(UpcomingTaskFieldsEnum.Priority, priority);
  };

  return (
    <Select.Root defaultValue={TaskPriorityEnum.Default} onValueChange={onChangePriority}>
      <Select.Trigger>
        <Text size={'1'} color="gray" weight={'medium'}>
          Приоритет: {selectedPriority === TaskPriorityEnum.Default ? 'Обычный' : 'Высокий'}
        </Text>
      </Select.Trigger>
      <Select.Content position="popper">
        <Select.Group>
          <Select.Item value={TaskPriorityEnum.Default}>
            <Text size={'2'} weight={'medium'}>
              Обычный
            </Text>
          </Select.Item>
          <Select.Item value={TaskPriorityEnum.Important}>
            <Text size={'2'} weight={'medium'}>
              Высокий
            </Text>
          </Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};
