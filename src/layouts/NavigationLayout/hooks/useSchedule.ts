import { useEffect } from 'react';

import { scheduleStore } from '@store/scheduleStore';
import { isExist } from '@utils/format';

export const useSchedule = (autoLoad: boolean = true, userId: string) => {
  useEffect(() => {
    if (autoLoad && isExist(userId)) {
      scheduleStore.loadSchedule(userId);
    }
  }, [userId]);
};
