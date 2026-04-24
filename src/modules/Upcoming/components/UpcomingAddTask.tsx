import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box, Dialog, Flex, Text } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { Timestamp } from 'firebase/firestore';
import { Plus } from 'lucide-react';
import { observer } from 'mobx-react-lite';
import { v4 as uuidv4 } from 'uuid';

import { scheduleStore } from '@store/scheduleStore';
import { TaskInterface } from '@interfaces/taskType';
import { TaskPriorityEnum } from '@enums/task-priority.enum';
import { TaskStatusEnum } from '@enums/task-status.enum';
import { getSafetyString } from '@utils/get-safety-string.ts';

import { TaskGroupTitleEnum, UpcomingTaskFieldsEnum } from '../enums/enum';
import { UpcomingTaskAddFormInterface } from '../interfaces/interface';

import { UpcomingTaskForm } from './UpcomingTaskForm';

interface Props {
  period: TaskGroupTitleEnum;
}

const defaultFormValues: UpcomingTaskAddFormInterface = {
  [UpcomingTaskFieldsEnum.Priority]: TaskPriorityEnum.Default,
  [UpcomingTaskFieldsEnum.Title]: '',
  [UpcomingTaskFieldsEnum.Details]: '',
  [UpcomingTaskFieldsEnum.Date]: dayjs().format('DD-MM-YYYY'),
};

export const UpcomingAddTask = observer(({ period }: Props) => {
  const methods = useForm<UpcomingTaskAddFormInterface>({
    defaultValues: defaultFormValues,
  });

  const { reset } = methods;

  const [isOpen, setIsOpen] = useState(false);

  const handleSave = async (fields: UpcomingTaskAddFormInterface) => {
    const dateKey = fields[UpcomingTaskFieldsEnum.Date];

    const newTask: Omit<TaskInterface, 'userId'> = {
      id: uuidv4(),
      title: fields[UpcomingTaskFieldsEnum.Title],
      description: getSafetyString(fields[UpcomingTaskFieldsEnum.Details]),
      priority: fields[UpcomingTaskFieldsEnum.Priority],
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
    <Box mt="2" mb="1" pb="2">
      <Dialog.Root open={isOpen}>
        <Dialog.Trigger className="upcoming__create-task-btn" onClick={() => setIsOpen(true)}>
          <Flex justify="start" align="center" gap="1" pb="1">
            <Plus color="gray" height="14" width="14" />
            <Text color="gray" size="1">
              Создать
            </Text>
          </Flex>
        </Dialog.Trigger>

        <FormProvider {...methods}>
          <UpcomingTaskForm period={period} handleClose={handleClose} handleSave={handleSave} />
        </FormProvider>
      </Dialog.Root>
    </Box>
  );
});
