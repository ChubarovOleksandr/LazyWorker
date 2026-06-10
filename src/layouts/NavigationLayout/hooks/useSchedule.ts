import { useEffect } from 'react';

import { scheduleStore } from '@store/scheduleStore';

export const useSchedule = () =>
  useEffect(() => {
    void scheduleStore.loadSchedule();
  }, []);
