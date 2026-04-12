import { useEffect } from 'react';

import { authStore } from '@store/authStore';
import { scheduleStore } from '@store/scheduleStore';
import { isExist } from '@utils/format.ts';

export const useSchedule = (autoLoad: boolean = true) => {
  const uid = authStore.user?.uid;

  useEffect(() => {
    if (!isExist(uid)) {
      return;
    }

    if (autoLoad) {
      void scheduleStore.loadSchedule();
    }
  }, [autoLoad, uid]);
};
