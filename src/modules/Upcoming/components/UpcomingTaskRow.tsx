import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Box, Checkbox, Flex, HoverCard, Text } from '@radix-ui/themes';
import { Grip } from 'lucide-react';

import { scheduleStore } from '@store/scheduleStore';
import { ImportantBadge } from '@ui/ImportantBadge/ImportantBadge';
import { TaskInterface } from '@interfaces/taskType';
import { TaskPriorityEnum } from '@enums/task-priority.enum';
import { TaskStatusEnum } from '@enums/task-status.enum';
import { createClassName } from '@utils/create-class-name';
import { isString } from '@utils/format';

interface Props {
  task: TaskInterface;
  isEnableDrag: boolean;
}

const iconSize = 14;

export const UpcomingTaskRow = ({ task, isEnableDrag }: Props) => {
  const { title, description, priority, id, status } = task;

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id });

  const isTaskDone = status === TaskStatusEnum.Done;
  const isTaskImportant = priority === TaskPriorityEnum.Important;

  const changeTaskStatus = () => {
    const updatedTask = {
      ...task,
      status: isTaskDone ? TaskStatusEnum.InProgress : TaskStatusEnum.Done,
    };

    void scheduleStore.updateTask(updatedTask);
  };

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      <Flex justify="between" align="center" className="task" mt="1" gap="1">
        {isEnableDrag ? (
          <Box width="14px">
            <Grip
              size={iconSize}
              color="gray"
              {...listeners}
              {...attributes}
              style={{ cursor: 'pointer' }}
            />
          </Box>
        ) : (
          <Box width="14px" />
        )}

        <HoverCard.Root>
          <HoverCard.Trigger>
            <Text
              className={createClassName('task__title', {
                condition: isTaskDone,
                value: 'task__title--done',
              })}
              size="2"
            >
              {title}
            </Text>
          </HoverCard.Trigger>

          {isString(description) && (
            <HoverCard.Content className="hover-card__description">
              <Box overflowY="auto" maxHeight="300px">
                <Text size="2">{description}</Text>
              </Box>
            </HoverCard.Content>
          )}
        </HoverCard.Root>

        <Flex align="center" gap="2">
          {isTaskImportant && <ImportantBadge />}
          <Checkbox
            checked={isTaskDone}
            onCheckedChange={changeTaskStatus}
            color={isTaskImportant ? 'orange' : 'blue'}
          />
        </Flex>
      </Flex>
    </div>
  );
};
