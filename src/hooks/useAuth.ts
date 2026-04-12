import { useSyncExternalStore } from 'react';
import { User } from 'firebase/auth';
import { autorun } from 'mobx';

import { authStore } from '@store/authStore';

type AuthSnapshot = {
  user: User;
  loading: boolean;
};

const subscribe = (onChange: () => void) => {
  return autorun(() => {
    void authStore.user;
    void authStore.loading;
    onChange();
  });
};

let snapshot: AuthSnapshot = {
  user: authStore.user,
  loading: authStore.loading,
};

const getSnapshot = () => {
  if (
    snapshot.user !== authStore.user ||
    snapshot.loading !== authStore.loading
  ) {
    snapshot = {
      user: authStore.user,
      loading: authStore.loading,
    };
  }

  return snapshot;
};

export const useAuth = () => {
  return useSyncExternalStore(subscribe, getSnapshot);
};
