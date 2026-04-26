import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box, Dialog, Flex, Text } from '@radix-ui/themes';
import { Plus } from 'lucide-react';
import { observer } from 'mobx-react-lite';

import { TaskFormInterface } from '@components/TaskForm/interface';

import { defaultTaskFormValues, TaskFormModal } from '../../../components/TaskForm/TaskForm';
import { TaskGroupTitleEnum } from '../enums/enum';
import { parseGroupTitleToDate } from '../utils/utils';

interface Props {
  period: TaskGroupTitleEnum;
}

const iconSize = 14;

export const UpcomingAddTask = observer(({ period }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const methods = useForm<TaskFormInterface>({
    defaultValues: defaultTaskFormValues,
  });

  return (
    <Box mt="2" mb="1" pb="2">
      <Dialog.Root open={isOpen}>
        <Dialog.Trigger className="group__create-btn" onClick={() => setIsOpen(true)}>
          <Flex justify="start" align="center" gap="1" pb="1">
            <Plus color="gray" size={iconSize} />
            <Text color="gray" size="1">
              Создать
            </Text>
          </Flex>
        </Dialog.Trigger>

        <FormProvider {...methods}>
          <TaskFormModal date={parseGroupTitleToDate(period)} setIsOpen={setIsOpen} />
        </FormProvider>
      </Dialog.Root>
    </Box>
  );
});
