import { closestCenter, DndContext, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Box, Flex, Text } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Accordion } from 'radix-ui';

import { scheduleStore } from '@store/scheduleStore';
import { TaskInterface } from '@interfaces/taskType';
import { isNotEmptyArray } from '@utils/format.ts';

import { TaskGroupTitleEnum } from '../enums/enum';

import { UpcomingAddTask } from './UpcomingAddTask';
import { UpcomingTaskRow } from './UpcomingTaskRow';

interface Props {
  title: TaskGroupTitleEnum;
  tasks: TaskInterface[];
  isOpened: boolean;
}

export const UpcomingTaskBlock = ({ tasks, title, isOpened }: Props) => {
  const isEnableDrag = isNotEmptyArray(tasks) && title !== TaskGroupTitleEnum.NextWeek;

  const updateTasksOrder = (newTasks: TaskInterface[]) => {
    const isToday = title === TaskGroupTitleEnum.Today;
    const dateKey = isToday
      ? dayjs().format('DD-MM-YYYY')
      : dayjs().add(1, 'day').format('DD-MM-YYYY');

    void scheduleStore.setDateTasks(dateKey, newTasks);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = tasks.findIndex(item => item.id === active.id);
    const newIndex = tasks.findIndex(item => item.id === over.id);

    updateTasksOrder(arrayMove(tasks, oldIndex, newIndex));
  };

  return (
    <Accordion.Item value={title} className="upcoming__group-item">
      <Accordion.Trigger className="upcoming__group-trigger">
        <Flex justify="center" align="center" gap="1" mb="2" mt="2">
          {isOpened ? (
            <ChevronUp height="14" width="14" />
          ) : (
            <ChevronDown height="14" width="14" />
          )}

          <Text size="1">{title}</Text>

          <Box className="upcoming__group-counter">
            <Text size="1" color="gray">
              {tasks.length}
            </Text>
          </Box>
        </Flex>
      </Accordion.Trigger>

      <Accordion.Content>
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
            {tasks.map(task => (
              <UpcomingTaskRow key={task.id} task={task} isEnableDrag={isEnableDrag} />
            ))}
          </SortableContext>
        </DndContext>

        <UpcomingAddTask period={title} />
      </Accordion.Content>
    </Accordion.Item>
  );
};
