import { onAuthStateChanged, type User } from 'firebase/auth';
import { makeAutoObservable, runInAction } from 'mobx';

import { auth } from '@configs/firebaseConfig';

class AuthStore {
  user: User = null;
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  get userId(): string | undefined {
    return this.user?.uid;
  }
}

export const authStore = new AuthStore();

let didInit = false;

export const initAuthListener = () => {
  if (didInit) {
    return;
  }
  didInit = true;

  onAuthStateChanged(auth, user => {
    runInAction(() => {
      authStore.user = user;
      authStore.loading = false;
    });
  });
};
