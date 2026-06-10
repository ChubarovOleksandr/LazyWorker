import { makeAutoObservable, runInAction } from 'mobx';

import { userService } from '@service/userService/userService';
import { authStore } from '@store/authStore';
import { AppThemeEnum } from '@enums/appTheme';
import { localStorageKeys } from '@enums/locale-storage-key.enum.ts';
import { getFromLocalStorage, saveInLocalStorage } from '@utils/local-storage';

const isAppTheme = (v: unknown): v is AppThemeEnum =>
  v === AppThemeEnum.Light || v === AppThemeEnum.Dark;

class ThemeStore {
  theme: AppThemeEnum = AppThemeEnum.Light;
  persistToAccount = false;

  constructor() {
    makeAutoObservable(this);
  }

  get radixAppearance(): AppThemeEnum {
    return this.theme === AppThemeEnum.Dark ? AppThemeEnum.Dark : AppThemeEnum.Light;
  }

  private syncFromLocalStorage() {
    const local = getFromLocalStorage(localStorageKeys.AppTheme, AppThemeEnum.Light);

    runInAction(() => {
      this.persistToAccount = false;
      this.theme = isAppTheme(local) ? local : AppThemeEnum.Light;
    });
  }

  syncFromSources = async () => {
    if (!authStore.isAuthenticated) {
      this.syncFromLocalStorage();
      return;
    }

    const userDocument = await userService.getUserDocument(authStore.requiredUserId);
    const persist = userDocument?.settings?.shouldUseThemeByDefault ?? false;

    runInAction(() => {
      this.persistToAccount = persist;
    });

    if (persist) {
      const t = userDocument?.settings?.theme;

      if (isAppTheme(t)) {
        runInAction(() => {
          this.theme = t;
        });
      }
      return;
    }

    this.syncFromLocalStorage();
  };

  setTheme = async (next: AppThemeEnum) => {
    runInAction(() => {
      this.theme = next;
    });

    if (this.persistToAccount && authStore.isAuthenticated) {
      saveInLocalStorage(localStorageKeys.AppTheme, next);

      await userService.mergeUserSettings(authStore.requiredUserId, { theme: next });
      return;
    }

    saveInLocalStorage(localStorageKeys.AppTheme, next);
  };

  setPersistToAccount = async (value: boolean) => {
    runInAction(() => {
      this.persistToAccount = value;
    });

    if (authStore.isAuthenticated) {
      await userService.mergeUserSettings(authStore.requiredUserId, {
        theme: this.theme,
        shouldUseThemeByDefault: value,
      });
      return;
    }

    saveInLocalStorage(localStorageKeys.AppTheme, this.theme);
  };
}

export const themeStore = new ThemeStore();
