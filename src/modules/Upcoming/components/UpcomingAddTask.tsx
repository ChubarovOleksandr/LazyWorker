import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Dialog, Flex, Text } from '@radix-ui/themes';
import { Plus } from 'lucide-react';

import { TaskPriorityEnum } from '@enums/priority';

import { TaskGroupTitleEnum, UpcomingTaskFieldsEnum } from '../enums/enum';
import { UpcomingTaskAddFormInterface } from '../interfaces/interface';

import { UpcomingTaskForm } from './UpcomingTaskForm';

interface Props {
  period: TaskGroupTitleEnum;
}

const defaultFormValues: UpcomingTaskAddFormInterface = {
  [UpcomingTaskFieldsEnum.Priority]: TaskPriorityEnum.Default,
  [UpcomingTaskFieldsEnum.Title]: '',
  [UpcomingTaskFieldsEnum.Description]: '',
  [UpcomingTaskFieldsEnum.Date]: null,
};

export const UpcomingAddTask = ({ period }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, setValue, handleSubmit, reset } = useForm<UpcomingTaskAddFormInterface>({
    defaultValues: defaultFormValues,
  });

  const handleSave = (fields: UpcomingTaskAddFormInterface) => {
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
};
