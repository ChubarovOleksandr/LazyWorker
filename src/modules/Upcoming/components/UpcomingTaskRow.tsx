import { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Badge, Box, Checkbox, Flex, HoverCard, Text } from '@radix-ui/themes';
import { Flame, Grip } from 'lucide-react';

import { TaskPriorityEnum } from '@enums/priority';
import { TaskStatusEnum } from '@enums/taskStatus';
import { isEmptyString } from '@utils/format';

import { TaskInterface } from 'src/interfaces/taskType';

interface Props {
  task: TaskInterface;
}

export const UpcomingTaskRow = ({ task }: Props) => {
  const { title, details, priority, id, status } = task;

  const [isTaskDone, setIsTaskDone] = useState(status === TaskStatusEnum.Done);
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      <Flex justify={'between'} align={'center'} mt={'1'}>
        <Flex gap={'1'} align={'center'}>
          <Grip
            height={'14'}
            width={'14'}
            color={'gray'}
            {...listeners}
            {...attributes}
            style={{ cursor: 'pointer' }}
          />

          {!isEmptyString(details) ? (
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text style={{ textDecoration: isTaskDone ? 'line-through' : 'none' }} size={'2'}>
                  {title}
                </Text>
              </HoverCard.Trigger>

              <HoverCard.Content style={{ backgroundColor: '#f2faff' }}>
                <Box overflowY={'scroll'} maxHeight={'300px'}>
                  <Text size={'2'}>{details}</Text>
                </Box>
              </HoverCard.Content>
            </HoverCard.Root>
          ) : (
            <Text style={{ textDecoration: isTaskDone ? 'line-through' : 'none' }} size={'2'}>
              {title}
            </Text>
          )}
        </Flex>
        <Flex align={'center'} gap={'2'}>
          {priority === TaskPriorityEnum.Important && (
            <Badge color="orange">
              <Flame height={'14'} width={'14'} color="orange" />
              Важно
            </Badge>
          )}
          <Checkbox checked={isTaskDone} onCheckedChange={isDone => setIsTaskDone(!!isDone)} />
        </Flex>
      </Flex>
    </div>
  );
};
