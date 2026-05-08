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

  syncFromSources = async () => {
    const userId = authStore.userId;

    const persist =
      (await userService.getUserDocument(userId))?.settings?.shouldUseThemeByDefault ?? false;

    runInAction(() => {
      this.persistToAccount = persist;
    });

    if (persist && userId) {
      const doc = await userService.getUserDocument(userId);
      const t = doc?.settings?.theme;

      if (isAppTheme(t)) {
        runInAction(() => {
          this.theme = t;
        });
      }
      return;
    }

    const local = getFromLocalStorage(localStorageKeys.AppTheme, AppThemeEnum.Light);

    runInAction(() => {
      this.theme = isAppTheme(local) ? local : AppThemeEnum.Light;
    });
  };

  setTheme = async (next: AppThemeEnum) => {
    runInAction(() => {
      this.theme = next;
    });

    if (this.persistToAccount && authStore.userId) {
      await userService.mergeUserSettings(authStore.userId, { theme: next });
      return;
    }

    saveInLocalStorage(localStorageKeys.AppTheme, next);
  };

  setPersistToAccount = async (value: boolean) => {
    runInAction(() => {
      this.persistToAccount = value;
    });

    if (authStore.userId) {
      await userService.mergeUserSettings(authStore.userId, {
        theme: this.theme,
        shouldUseThemeByDefault: value,
      });
      return;
    }

    saveInLocalStorage(localStorageKeys.AppTheme, this.theme);
  };
}

export const themeStore = new ThemeStore();
