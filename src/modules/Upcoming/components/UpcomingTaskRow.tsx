import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Badge, Box, Checkbox, Flex, HoverCard, Text } from '@radix-ui/themes';
import { Flame, Grip } from 'lucide-react';

import { scheduleStore } from '@store/scheduleStore';
import { TaskInterface } from '@interfaces/taskType';
import { TaskPriorityEnum } from '@enums/priority';
import { TaskStatusEnum } from '@enums/taskStatus';
import { isEmptyString } from '@utils/format';

interface Props {
  task: TaskInterface;
  isEnableDrag: boolean;
}

export const UpcomingTaskRow = ({ task, isEnableDrag }: Props) => {
  const { title, description, priority, id, status } = task;

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id });

  const isTaskDone = status === TaskStatusEnum.Done;

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
      <Flex justify="between" align="center" mt="1">
        <Flex gap="1" align="center">
          {isEnableDrag ? (
            <Grip
              height="14"
              width="14"
              color="gray"
              {...listeners}
              {...attributes}
              style={{ cursor: 'pointer' }}
            />
          ) : (
            <Box width="14px" />
          )}

          {!isEmptyString(description) ? (
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text
                  style={{
                    textDecoration: isTaskDone ? 'line-through' : 'none',
                  }}
                  size="2"
                >
                  {title}
                </Text>
              </HoverCard.Trigger>

              <HoverCard.Content style={{ backgroundColor: '#f2faff' }}>
                <Box overflowY="scroll" maxHeight="300px">
                  <Text size="2">{description}</Text>
                </Box>
              </HoverCard.Content>
            </HoverCard.Root>
          ) : (
            <Text style={{ textDecoration: isTaskDone ? 'line-through' : 'none' }} size="2">
              {title}
            </Text>
          )}
        </Flex>
        <Flex align="center" gap="2">
          {priority === TaskPriorityEnum.Important && (
            <Badge color="orange">
              <Flame height="14" width="14" color="orange" />
              Важно
            </Badge>
          )}
          <Checkbox checked={isTaskDone} onCheckedChange={changeTaskStatus} />
        </Flex>
      </Flex>
    </div>
  );
};
