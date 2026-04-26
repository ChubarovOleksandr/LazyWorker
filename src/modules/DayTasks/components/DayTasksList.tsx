import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { closestCenter, DndContext, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Dialog, Flex } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { Plus } from 'lucide-react';

import { scheduleStore } from '@store/scheduleStore';
import { TaskFormInterface } from '@components/TaskForm/interface';
import { defaultTaskFormValues, TaskFormModal } from '@components/TaskForm/TaskForm';
import { TaskInterface } from '@interfaces/taskType';

import { isEmptyArray, isExist } from '../../../utils/format';

import { DayTaskItem } from './DayTaskItem';

interface DayTasksListProps {
  tasks: TaskInterface[];
  date: string;
}

export const DayTasksList = ({ tasks, date }: DayTasksListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const methods = useForm<TaskFormInterface>({
    defaultValues: defaultTaskFormValues,
  });

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

          <Dialog.Root open={isOpen}>
            <Dialog.Trigger className="group__create-btn" onClick={() => setIsOpen(true)}>
              <Flex className="item" align="center" justify="start" gap="2">
                <Plus size={18} color="gray" />
                Добавить задачу
              </Flex>
            </Dialog.Trigger>

            <FormProvider {...methods}>
              <TaskFormModal date={date} setIsOpen={setIsOpen} />
            </FormProvider>
          </Dialog.Root>
        </SortableContext>
      </DndContext>
    </Flex>
  );
};
