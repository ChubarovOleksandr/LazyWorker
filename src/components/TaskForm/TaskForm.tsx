import { useFormContext } from 'react-hook-form';
import { Button, Dialog, Flex, Text } from '@radix-ui/themes';
import dayjs from 'dayjs';

import { TextAreaField } from '@components/TextAreaField/TextAreaField';
import { TextField } from '@components/TextField/TextField';
import { formConfig } from '@configs/formConfig';
import { TaskPriorityEnum } from '@enums/task-priority.enum';

import { TaskFormDate } from './components/TaskFormDate';
import { TaskFormPriority } from './components/TaskFormPriority';
import { TaskFieldsEnum } from './enum';
import { TaskFormInterface } from './interface';

import './style.scss';

interface Props {
  date: string;
  handleSave: (fields: TaskFormInterface) => Promise<void>;
  handleClose: () => void;
}

export const defaultTaskFormValues: TaskFormInterface = {
  [TaskFieldsEnum.Priority]: TaskPriorityEnum.Default,
  [TaskFieldsEnum.Title]: '',
  [TaskFieldsEnum.Details]: '',
  [TaskFieldsEnum.Date]: dayjs().format('DD-MM-YYYY'),
};

export const TaskFormModal = ({ date, handleSave, handleClose }: Props) => {
  const { handleSubmit } = useFormContext<TaskFormInterface>();

  return (
    <Dialog.Content className="task-modal">
      <Dialog.Title>
        <Text size="3" mb="4">
          Создать новую задачу
        </Text>
      </Dialog.Title>
      <TextField
        name={TaskFieldsEnum.Title}
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

      <Flex mt="3" mb="3" gap="2">
        <TaskFormDate date={date} />
        <TaskFormPriority />
      </Flex>

      <TextAreaField name={TaskFieldsEnum.Details} placeholder="Описание" />
      <Flex align="center" justify="end" gap="5" mt="5">
        <Button variant="ghost" size="3" color="gray" onClick={handleClose}>
          Закрыть
        </Button>
        <Button variant="solid" className="task-modal__save-btn" onClick={handleSubmit(handleSave)}>
          Сохранить
        </Button>
      </Flex>
    </Dialog.Content>
  );
};
