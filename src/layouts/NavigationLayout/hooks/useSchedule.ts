import { useEffect } from 'react';

import { isExist } from '@utils/format';

import { scheduleStore } from 'src/store/scheduleStore';

export const useSchedule = (autoLoad: boolean = true, userId: string) => {
  useEffect(() => {
    if (autoLoad && isExist(userId)) {
      scheduleStore.loadSchedule(userId);
    }
  }, [userId]);
};
