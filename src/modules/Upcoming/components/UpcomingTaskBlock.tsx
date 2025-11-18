import { useState } from 'react';
import { closestCenter, DndContext, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Box, Flex, Text } from '@radix-ui/themes';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Accordion } from 'radix-ui';

import { TaskInterface } from 'src/interfaces/taskType';

import { UpcomingAddTask } from './UpcomingAddTask';
import { UpcomingTaskRow } from './UpcomingTaskRow';

interface Props {
  title: string;
  tasks: TaskInterface[];
  isOpened: boolean;
}

export const UpcomingTaskBlock = ({ tasks, title, isOpened }: Props) => {
  const [items, setItems] = useState(tasks);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex(item => item.id === active.id);
    const newIndex = items.findIndex(item => item.id === over.id);

    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <Accordion.Item value={title} className="upcoming__group-item">
      <Accordion.Trigger className="upcoming__group-trigger">
        <Flex justify={'center'} align={'center'} gap={'1'} mb={'2'} mt={'2'}>
          {isOpened ? (
            <ChevronUp height={'14'} width={'14'} />
          ) : (
            <ChevronDown height={'14'} width={'14'} />
          )}

          <Text size={'1'}>{title}</Text>

          <Box className="upcoming__group-counter">
            <Text size={'1'} color="gray">
              {tasks.length}
            </Text>
          </Box>
        </Flex>
      </Accordion.Trigger>

      <Accordion.Content>
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={items.map(t => t.id)} strategy={verticalListSortingStrategy}>
            {items.map(task => (
              <UpcomingTaskRow key={task.id} task={task} />
            ))}
          </SortableContext>
        </DndContext>

        <UpcomingAddTask />
      </Accordion.Content>
    </Accordion.Item>
  );
};
