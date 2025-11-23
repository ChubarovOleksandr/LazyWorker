import { useEffect } from 'react';

import { scheduleStore } from 'src/store/scheduleStore';

export const useSchedule = (autoLoad: boolean = true) => {
  useEffect(() => {
    if (autoLoad) {
      scheduleStore.loadSchedule();
    }
  }, []);

  return scheduleStore;
};
