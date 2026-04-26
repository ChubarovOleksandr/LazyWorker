import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { toJS } from 'mobx';

import { scheduleStore } from '@store/scheduleStore';
import { SearchParamsEnum } from '@enums/search-params.enum';

export const useDayTask = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedDate = searchParams.get(SearchParamsEnum.SelectedDate);

  const formattedSelectedDate = dayjs(selectedDate, 'D-MM-YYYY').format('DD-MM-YYYY');

  const onClose = () => setSearchParams({});

  const { daySchedule, dayLoading: isLoading } = scheduleStore;

  useEffect(() => {
    scheduleStore.loadScheduleForDay(dayjs(selectedDate, 'D-MM-YYYY').toDate());
  }, [selectedDate]);

  return {
    onClose,
    isLoading,
    selectedDate: formattedSelectedDate,
    tasks: toJS(daySchedule[formattedSelectedDate]?.tasks),
  };
};
