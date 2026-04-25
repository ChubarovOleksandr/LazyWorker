import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Checkbox, Flex, Text } from '@radix-ui/themes';
import { Grip } from 'lucide-react';

import { scheduleStore } from '@store/scheduleStore';
import { ImportantBadge } from '@ui/ImportantBadge/ImportantBadge';
import { TaskInterface } from '@interfaces/taskType';
import { TaskPriorityEnum } from '@enums/task-priority.enum';
import { TaskStatusEnum } from '@enums/task-status.enum';
import { createClassName } from '@utils/create-class-name';
import { detectLanguage } from '@utils/detect-language';

interface DayTaskItemProps {
  task: TaskInterface;
}

const iconSize = 14;

const getIsTaskImportant = (priority: TaskPriorityEnum) => priority === TaskPriorityEnum.Important;
const getIsTaskDone = (status: TaskStatusEnum) => status === TaskStatusEnum.Done;

export const DayTaskItem = ({ task }: DayTaskItemProps) => {
  const { id, title, description, priority, status } = task;

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const isDone = getIsTaskDone(status);

  const changeTaskStatus = () => {
    const updatedTask: TaskInterface = {
      ...task,
      status: isDone ? TaskStatusEnum.InProgress : TaskStatusEnum.Done,
    };
    void scheduleStore.updateTask(updatedTask);
  };

  return (
    <Flex
      ref={setNodeRef}
      justify="start"
      align="center"
      className="item"
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      <Grip
        height={iconSize}
        width={iconSize}
        color="gray"
        {...listeners}
        {...attributes}
        style={{ cursor: 'pointer' }}
      />

      <Flex direction="column" className="item__content" gap="1">
        <Text
          className={createClassName('item__title', {
            condition: isDone,
            value: 'done',
          })}
        >
          {title}
        </Text>
        <Text className="item__description" lang={detectLanguage(description)}>
          {description}
        </Text>
      </Flex>

      <Checkbox
        className="item__checkbox"
        size="3"
        color={getIsTaskImportant(priority) ? 'orange' : 'blue'}
        checked={isDone}
        onCheckedChange={changeTaskStatus}
      />

      {getIsTaskImportant(priority) && (
        <Flex className="item__categories" gap="2">
          <ImportantBadge />
        </Flex>
      )}
    </Flex>
  );
};
