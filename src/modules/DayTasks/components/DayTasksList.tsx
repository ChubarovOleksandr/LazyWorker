import { closestCenter, DndContext, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Flex } from '@radix-ui/themes';
import dayjs from 'dayjs';

import { scheduleStore } from '@store/scheduleStore';
import { TaskInterface } from '@interfaces/taskType';

import { isEmptyArray, isExist } from '../../../utils/format';

import { DayTaskItem } from './DayTaskItem';

interface DayTasksListProps {
  tasks: TaskInterface[];
}

export const DayTasksList = ({ tasks }: DayTasksListProps) => {
  const updateTasksOrder = (newTasks: TaskInterface[]) => {
    if (!isExist(newTasks) || isEmptyArray(newTasks)) return;

    const dateKey = dayjs(newTasks[0].date.toDate()).format('DD-MM-YYYY');
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
    <Flex direction="column" className="day-task__list" gap="2">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
          {tasks.map(task => (
            <DayTaskItem key={task.id} task={task} />
          ))}
          {/* <Flex className="item" align="center" justify="start" gap="2">
            <Plus size={18} color="gray" />
            Добавить задачу
          </Flex> */}
        </SortableContext>
      </DndContext>
    </Flex>
  );
};
