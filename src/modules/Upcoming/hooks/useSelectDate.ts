import { useEffect, useMemo, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';

import { isExist } from '@utils/format';

import {
  TaskGroupTitleEnum,
  UpcomingTaskDateVariantEnum,
  UpcomingTaskFieldsEnum,
} from '../enums/enum';
import { UpcomingTaskAddFormInterface, UpcomingTaskDateVariant } from '../interfaces/interface';
import { getDateByGroupTitle } from '../utils/utils';

dayjs.extend(weekday);

const getDateByLabel = (label: UpcomingTaskDateVariantEnum): Date => {
  const today = dayjs();

  const dateMap = {
    [UpcomingTaskDateVariantEnum.Today]: dayjs().toDate(),
    [UpcomingTaskDateVariantEnum.Tomorrow]: dayjs().add(1, 'day').toDate(),
    [UpcomingTaskDateVariantEnum.Weekend]: (() => {
      const diff = (6 - today.day() + 7) % 7;
      return today.add(diff, 'day').toDate();
    })(),
    [UpcomingTaskDateVariantEnum.NextWeek]: dayjs().isoWeekday(8).toDate(),
  };

  return dateMap[label];
};

export const useSelectDate = (
  defaultDate: TaskGroupTitleEnum,
  setValue: UseFormSetValue<UpcomingTaskAddFormInterface>,
) => {
  const [selectedDate, setSelectedDate] = useState<Date>(
    isExist(defaultDate) ? getDateByGroupTitle(defaultDate) : null,
  );

  const handleSetSelectedDate = (date: Date) => {
    setSelectedDate(date);
    const formattedDate = isExist(date) ? dayjs(date).format('DD-MM-YYYY') : null;
    setValue(UpcomingTaskFieldsEnum.Date, formattedDate);
  };

  const dateToShow = useMemo(() => {
    return isExist(selectedDate) ? dayjs(selectedDate).format('dd, D MMM') : 'Срок';
  }, [selectedDate]);

  const handleSelectVariant = (variant: UpcomingTaskDateVariant) => {
    const dateFromVariant = getDateByLabel(variant.label);

    setSelectedDate(dateFromVariant);
    setValue(UpcomingTaskFieldsEnum.Date, dayjs(dateFromVariant).format('DD-MM-YYYY'));
  };

  useEffect(() => {
    if (isExist(defaultDate)) {
      setValue(
        UpcomingTaskFieldsEnum.Date,
        dayjs(getDateByGroupTitle(defaultDate)).format('DD-MM-YYYY'),
      );
    }
  }, []);

  return {
    selectedDate,
    setSelectedDate: handleSetSelectedDate,
    handleSelectVariant,
    dateToShow,
  };
};
