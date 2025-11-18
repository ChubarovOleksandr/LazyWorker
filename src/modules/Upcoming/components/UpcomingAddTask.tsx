import { Box, Dialog, Flex, Text } from '@radix-ui/themes';
import { Plus } from 'lucide-react';

export const UpcomingAddTask = () => {
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

        <Dialog.Content></Dialog.Content>
      </Dialog.Root>
    </Box>
  );
};
