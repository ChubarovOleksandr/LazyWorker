import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Select, Text } from '@radix-ui/themes';

import { TaskPriorityEnum } from '@enums/task-priority.enum';

import { TaskFieldsEnum } from '../enum';
import { TaskFormInterface } from '../interface';

const getIsDefaultPriority = (priority: TaskPriorityEnum) => priority === TaskPriorityEnum.Default;

export const TaskFormPriority = () => {
  const { setValue } = useFormContext<TaskFormInterface>();
  const [selectedPriority, setSelectedPriority] = useState<TaskPriorityEnum>(
    TaskPriorityEnum.Default,
  );

  const onChangePriority = (priority: TaskPriorityEnum) => {
    setSelectedPriority(priority);
    setValue(TaskFieldsEnum.Priority, priority);
  };

  return (
    <Select.Root defaultValue={TaskPriorityEnum.Default} onValueChange={onChangePriority}>
      <Select.Trigger>
        <Text size="1" color="gray" weight="medium">
          Приоритет: {getIsDefaultPriority(selectedPriority) ? 'Обычный' : 'Высокий'}
        </Text>
      </Select.Trigger>
      <Select.Content position="popper" color="gray">
        <Select.Group>
          <Select.Item value={TaskPriorityEnum.Default}>
            <Text size="1" weight="medium">
              Обычный
            </Text>
          </Select.Item>
          <Select.Item value={TaskPriorityEnum.Important}>
            <Text size="1" weight="medium">
              Высокий
            </Text>
          </Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};
