import { useFormContext } from 'react-hook-form';
import { Button, Dialog, Flex, Text } from '@radix-ui/themes';

import { TextAreaField } from '@components/TextAreaField/TextAreaField';
import { TextField } from '@components/TextField/TextField';
import { formConfig } from '@configs/formConfig';

import { TaskGroupTitleEnum, UpcomingTaskFieldsEnum } from '../enums/enum';
import { UpcomingTaskAddFormInterface } from '../interfaces/interface';

import { UpcomingTaskDate } from './UpcomingTaskDate';
import { UpcomingTaskPriority } from './UpcomingTaskPriority';

interface Props {
  period: TaskGroupTitleEnum;
  handleSave: (fields: UpcomingTaskAddFormInterface) => Promise<void>;
  handleClose: () => void;
}

export const UpcomingTaskForm = ({ period, handleSave, handleClose }: Props) => {
  const { register, setValue, handleSubmit } = useFormContext<UpcomingTaskAddFormInterface>();

  return (
    <Dialog.Content>
      <Dialog.Title>
        <Text size={'3'} mb={'4'}>
          Создать новую задачу
        </Text>
      </Dialog.Title>
      <TextField
        name={UpcomingTaskFieldsEnum.Title}
        type="text"
        placeholder="Заголовок задачи"
        inputStyle={{
          border: 'none',
          borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
          borderRadius: 0,
        }}
        style={{ marginBottom: '0' }}
        autoFocus
        minLength={3}
        maxLength={formConfig.defaultMaxLength}
        required
      />

      <Flex mt={'3'} mb={'3'} gap={'2'}>
        <UpcomingTaskDate period={period} />
        <UpcomingTaskPriority />
      </Flex>

      <TextAreaField name={UpcomingTaskFieldsEnum.Details} placeholder="Описание" />
      <Flex align={'center'} justify={'end'} gap={'5'} mt={'5'}>
        <Button variant="ghost" size={'3'} onClick={handleClose}>
          Закрыть
        </Button>
        <Button variant="solid" onClick={handleSubmit(handleSave)}>
          Сохранить
        </Button>
      </Flex>
    </Dialog.Content>
  );
};
