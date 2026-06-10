import { toast } from 'react-toastify';
import { makeAutoObservable, runInAction } from 'mobx';

import { userService } from '@service/userService/userService.ts';
import { authStore } from '@store/authStore.ts';
import { DEFAULT_USER_SETTINGS_DOCUMENT } from '@configs/firestoreConfig.ts';
import { UserSettingsInterface } from '@interfaces/userDocumentType.ts';
import { isExist } from '@utils/format.ts';

class SettingsStore {
  userSettings: UserSettingsInterface = null;
  isLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  setSettings(userSettings: UserSettingsInterface) {
    this.userSettings = userSettings;

    userService.setUserDocument(authStore.requiredUserId, { settings: userSettings });
  }

  async loadSettings() {
    const userId = authStore.requiredUserId;
    this.isLoading = true;

    try {
      let userDocument = await userService.getUserDocument(userId);

      if (!isExist(userDocument?.settings)) {
        await userService.setUserDocument(userId, DEFAULT_USER_SETTINGS_DOCUMENT);
        userDocument = DEFAULT_USER_SETTINGS_DOCUMENT;
      }

      runInAction(() => {
        this.userSettings = userDocument.settings;
      });
    } catch (error) {
      console.error(error);
      toast.error('Ошибка при загрузке настроек пользователя', {
        toastId: 'userSettingsLoadError',
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}

export const settingsStore = new SettingsStore();
