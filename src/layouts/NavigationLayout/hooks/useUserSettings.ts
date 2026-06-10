import { useEffect } from 'react';

import { settingsStore } from '@store/settingsStore.ts';

export const useUserSettings = () =>
  useEffect(() => {
    void settingsStore.loadSettings();
  }, []);
