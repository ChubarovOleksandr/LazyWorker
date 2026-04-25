import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Dialog } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { Timestamp } from 'firebase/firestore';

import { scheduleStore } from '@store/scheduleStore';
import { TaskFieldsEnum } from '@components/TaskForm/enum';
import { TaskFormInterface } from '@components/TaskForm/interface';
import { defaultTaskFormValues, TaskFormModal } from '@components/TaskForm/TaskForm';
import { TaskInterface } from '@interfaces/taskType';
import { TaskStatusEnum } from '@enums/task-status.enum';
import { today } from '@utils/date';
import { getSafetyString } from '@utils/get-safety-string';
import { uuidv4 } from '@utils/uuidv4';

export const DayTasksEmptyList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const methods = useForm<TaskFormInterface>({
    defaultValues: defaultTaskFormValues,
  });

  const { reset } = methods;

  const handleSave = async (fields: TaskFormInterface) => {
    const dateKey = fields[TaskFieldsEnum.Date];

    const newTask: Omit<TaskInterface, 'userId'> = {
      id: uuidv4(),
      title: fields[TaskFieldsEnum.Title],
      description: getSafetyString(fields[TaskFieldsEnum.Details]),
      priority: fields[TaskFieldsEnum.Priority],
      status: TaskStatusEnum.InProgress,
      category: '',
      order: 0,
      date: Timestamp.fromDate(dayjs(dateKey, 'DD-MM-YYYY').toDate()),
    };

    await scheduleStore.addTask(newTask);

    reset();
    setIsOpen(false);
  };

  const handleClose = () => {
    reset();
    setIsOpen(false);
  };

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Trigger className="group__create-btn" onClick={() => setIsOpen(true)}>
        <p className="day-task__list-text">
          Нет задач. <button className="day-task__list-create-btn">Создайте</button> первую задачу
        </p>
      </Dialog.Trigger>

      <FormProvider {...methods}>
        <TaskFormModal date={today} handleClose={handleClose} handleSave={handleSave} />
      </FormProvider>
    </Dialog.Root>
  );
};
