import { useFormContext } from 'react-hook-form';
import { Button, Dialog, Flex, Text } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { Timestamp } from 'firebase/firestore';

import { scheduleStore } from '@store/scheduleStore';
import { TextAreaField } from '@components/TextAreaField/TextAreaField';
import { TextField } from '@components/TextField/TextField';
import { formConfig } from '@configs/formConfig';
import { TaskInterface } from '@interfaces/taskType';
import { SetStateType } from '@interfaces/utils/setStateType';
import { TaskPriorityEnum } from '@enums/task-priority.enum';
import { TaskStatusEnum } from '@enums/task-status.enum';
import { getSafetyString } from '@utils/get-safety-string';
import { uuidv4 } from '@utils/uuidv4';

import { TaskFormDate } from './components/TaskFormDate';
import { TaskFormPriority } from './components/TaskFormPriority';
import { TaskFieldsEnum } from './enum';
import { TaskFormInterface } from './interface';

import './style.scss';

interface Props {
  date: string;
  setIsOpen: SetStateType<boolean>;
}

export const defaultTaskFormValues: TaskFormInterface = {
  [TaskFieldsEnum.Priority]: TaskPriorityEnum.Default,
  [TaskFieldsEnum.Title]: '',
  [TaskFieldsEnum.Details]: '',
  [TaskFieldsEnum.Date]: dayjs().format('DD-MM-YYYY'),
};

export const TaskFormModal = ({ date, setIsOpen }: Props) => {
  const { handleSubmit, reset } = useFormContext<TaskFormInterface>();

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
