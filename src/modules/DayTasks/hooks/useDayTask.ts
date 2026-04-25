import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { toJS } from 'mobx';

import { scheduleStore } from '@store/scheduleStore';
import { SearchParamsEnum } from '@enums/search-params.enum';

export const useDayTask = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedDate = searchParams.get(SearchParamsEnum.SelectedDate);

  const onClose = () => setSearchParams({});

  const { daySchedule, dayLoading: isLoading } = scheduleStore;

  useEffect(() => {
    scheduleStore.loadScheduleForDay(dayjs(selectedDate, 'D-MM-YYYY').toDate());
  }, [selectedDate]);

  return {
    selectedDate,
    onClose,
    tasks: toJS(daySchedule[selectedDate]?.tasks),
    isLoading,
  };
};
