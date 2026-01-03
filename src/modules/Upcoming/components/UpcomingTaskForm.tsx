import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { Button, Dialog, Flex, Text, TextArea } from '@radix-ui/themes';

import { TextField } from '@ui/TextField/TextField';

import { TaskGroupTitleEnum, UpcomingTaskFieldsEnum } from '../enums/enum';
import { UpcomingTaskAddFormInterface } from '../interfaces/interface';

import { UpcomingTaskDate } from './UpcomingTaskDate';
import { UpcomingTaskPriority } from './UpcomingTaskPriority';

interface Props {
  period: TaskGroupTitleEnum;
  register: UseFormRegister<UpcomingTaskAddFormInterface>;
  setValue: UseFormSetValue<UpcomingTaskAddFormInterface>;
  handleSave: () => void;
  handleClose: () => void;
}

export const UpcomingTaskForm = ({
  period,
  register,
  setValue,
  handleSave,
  handleClose,
}: Props) => {
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
        maxLength={255}
        register={register}
        required
      />

      <Flex mt={'3'} mb={'3'} gap={'2'}>
        <UpcomingTaskDate period={period} setValue={setValue} />
        <UpcomingTaskPriority setValue={setValue} />
      </Flex>

      <TextArea {...register(UpcomingTaskFieldsEnum.Details)} placeholder="Описание" />
      <Flex align={'center'} justify={'end'} gap={'5'} mt={'5'}>
        <Button variant="ghost" size={'3'} onClick={handleClose}>
          Закрыть
        </Button>
        <Button variant="solid" onClick={handleSave}>
          Сохранить
        </Button>
      </Flex>
    </Dialog.Content>
  );
};
