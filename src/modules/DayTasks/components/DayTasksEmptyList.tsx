import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Dialog } from '@radix-ui/themes';

import { TaskFormInterface } from '@components/TaskForm/interface';
import { defaultTaskFormValues, TaskFormModal } from '@components/TaskForm/TaskForm';

interface DayTasksEmptyListProps {
  date: string;
}

export const DayTasksEmptyList = ({ date }: DayTasksEmptyListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const methods = useForm<TaskFormInterface>({
    defaultValues: defaultTaskFormValues,
  });

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Trigger className="group__create-btn" onClick={() => setIsOpen(true)}>
        <p className="day-task__list-text">
          Нет задач. <button className="day-task__list-create-btn">Создайте</button> первую задачу
        </p>
      </Dialog.Trigger>

      <FormProvider {...methods}>
        <TaskFormModal date={date} setIsOpen={setIsOpen} />
      </FormProvider>
    </Dialog.Root>
  );
};
