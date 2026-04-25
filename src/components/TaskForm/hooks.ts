import { useEffect, useMemo, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';

import { isExist } from '@utils/format';

import { TaskFieldsEnum, TaskFormDateVariantEnum } from './enum';
import { TaskFormDateVariant, TaskFormInterface } from './interface';

dayjs.extend(weekday);

const getDateByLabel = (label: TaskFormDateVariantEnum): Date => {
  const today = dayjs();

  const dateMap = {
    [TaskFormDateVariantEnum.Today]: dayjs().toDate(),
    [TaskFormDateVariantEnum.Tomorrow]: dayjs().add(1, 'day').toDate(),
    [TaskFormDateVariantEnum.Weekend]: (() => {
      const diff = (6 - today.day() + 7) % 7;
      return today.add(diff, 'day').toDate();
    })(),
    [TaskFormDateVariantEnum.NextWeek]: dayjs().isoWeekday(8).toDate(),
  };

  return dateMap[label];
};

export const useSelectDate = (
  defaultDate: string,
  setValue: UseFormSetValue<TaskFormInterface>,
  closeDatePopover: () => void,
) => {
  const [selectedDate, setSelectedDate] = useState<Date>(dayjs(defaultDate, 'DD-MM-YYYY').toDate());

  const handleSetSelectedDate = (date: Date) => {
    setSelectedDate(date);
    const formattedDate = isExist(date) ? dayjs(date).format('DD-MM-YYYY') : null;
    setValue(TaskFieldsEnum.Date, formattedDate);
    closeDatePopover();
  };

  const dateToShow = useMemo(() => {
    return isExist(selectedDate) ? dayjs(selectedDate).format('dd, D MMM') : 'Срок';
  }, [selectedDate]);

  const handleSelectVariant = (variant: TaskFormDateVariant) => {
    const dateFromVariant = getDateByLabel(variant.label);

    setSelectedDate(dateFromVariant);
    setValue(TaskFieldsEnum.Date, dayjs(dateFromVariant).format('DD-MM-YYYY'));
    closeDatePopover();
  };

  useEffect(() => {
    if (isExist(defaultDate)) {
      setValue(TaskFieldsEnum.Date, defaultDate);
    }
  }, []);

  return {
    selectedDate,
    setSelectedDate: handleSetSelectedDate,
    handleSelectVariant,
    dateToShow,
  };
};
