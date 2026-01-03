import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Box, Dialog, Flex, Text } from '@radix-ui/themes';
import { Plus } from 'lucide-react';
import { observer } from 'mobx-react-lite';
import { v4 as uuidv4 } from 'uuid';

import { scheduleStore } from '@store/scheduleStore';
import { useAuth } from '@hooks/useAuth';
import { TaskInterface } from '@interfaces/taskType';
import { TaskPriorityEnum } from '@enums/priority';
import { TaskStatusEnum } from '@enums/taskStatus';

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
  [UpcomingTaskFieldsEnum.Date]: null,
};

export const UpcomingAddTask = observer(({ period }: Props) => {
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpcomingTaskAddFormInterface>({
    defaultValues: defaultFormValues,
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  // TODO ADD SHOWING VALIDATING ERROR UNDER THE FIELD
  const handleSave = async (fields: UpcomingTaskAddFormInterface) => {
    const newTask: TaskInterface = {
      title: fields[UpcomingTaskFieldsEnum.Title],
      details: fields[UpcomingTaskFieldsEnum.Details],
      priority: fields[UpcomingTaskFieldsEnum.Priority],
      id: uuidv4(),
      status: TaskStatusEnum.InProgress,
    };

    try {
      await scheduleStore.addTask(newTask, fields[UpcomingTaskFieldsEnum.Date], user.uid);
    } catch (error) {
      toast.error('Ошибка при сохранении данных');
    }

    reset();
    setIsOpen(false);
  };

  const handleClose = () => {
    reset();
    setIsOpen(false);
  };

  return (
    <Box mt={'2'} mb={'1'} pb={'2'}>
      <Dialog.Root open={isOpen}>
        <Dialog.Trigger className="upcoming__create-task-btn" onClick={() => setIsOpen(true)}>
          <Flex justify={'start'} align={'center'} gap={'1'} pb={'1'}>
            <Plus color={'gray'} height={'14'} width={'14'} />
            <Text color={'gray'} size={'1'}>
              Создать
            </Text>
          </Flex>
        </Dialog.Trigger>

        <UpcomingTaskForm
          period={period}
          register={register}
          setValue={setValue}
          handleClose={handleClose}
          handleSave={handleSubmit(handleSave)}
        />
      </Dialog.Root>
    </Box>
  );
});
