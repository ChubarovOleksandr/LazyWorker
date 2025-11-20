import { Box, Dialog, Flex, Text } from '@radix-ui/themes';
import { Plus } from 'lucide-react';

import { TaskGroupTitleEnum } from '../enums/enum';

import { UpcomingTaskForm } from './UpcomingTaskForm';

interface Props {
  period: TaskGroupTitleEnum;
}

export const UpcomingAddTask = ({ period }: Props) => {
  return (
    <Box mt={'2'} mb={'1'} pb={'2'}>
      <Dialog.Root>
        <Dialog.Trigger className="upcoming__create-task-btn">
          <Flex justify={'start'} align={'center'} gap={'1'} pb={'1'}>
            <Plus color={'gray'} height={'14'} width={'14'} />
            <Text color={'gray'} size={'1'}>
              Создать
            </Text>
          </Flex>
        </Dialog.Trigger>

        <UpcomingTaskForm period={period} />
      </Dialog.Root>
    </Box>
  );
};
