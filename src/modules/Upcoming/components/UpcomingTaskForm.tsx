import React from 'react';
import { useForm } from 'react-hook-form';
import { Dialog, Flex, Heading, TextArea } from '@radix-ui/themes';

import { TextField } from 'src/ui/TextField/TextField';

import { TaskGroupTitleEnum, UpcomingTaskFieldsEnum } from '../enums/enum';
import { UpcomingTaskAddFormInterface } from '../interfaces/interface';

import { UpcomingTaskDate } from './UpcomingTaskDate';
import { UpcomingTaskPriority } from './UpcomingTaskPriority';

interface Props {
  period: TaskGroupTitleEnum;
}

export const UpcomingTaskForm = ({ period }: Props) => {
  const { register, setValue, watch, getValues } = useForm<UpcomingTaskAddFormInterface>();

  const allValues = watch();

  React.useEffect(() => {
    console.log(getValues());
  }, [allValues]);

  return (
    <Dialog.Content>
      <Heading size="3" mb="4">
        Создать новую задачу
      </Heading>
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

      <Flex mt={'3'} mb={'3'}>
        <UpcomingTaskDate period={period} setValue={setValue} />
        <UpcomingTaskPriority setValue={setValue} />
      </Flex>

      <TextArea {...register(UpcomingTaskFieldsEnum.Description)} placeholder="Описание" />
    </Dialog.Content>
  );
};
