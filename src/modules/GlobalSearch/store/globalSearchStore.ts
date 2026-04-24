import { makeAutoObservable } from 'mobx';

import { localStorageKeys } from '@enums/locale-storage-key.enum';
import { saveInLocalStorage } from '@utils/local-storage';

class GlobalSearchStore {
  searchHistory: string[] = [];
  searchText: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setSearchHistory = (history: string[]) => {
    saveInLocalStorage(localStorageKeys.GlobalSearchHistory, history);
    this.searchHistory = history;
  };

  setSearchText = (text: string) => {
    this.searchText = text;
  };
}

export const globalSearchStore = new GlobalSearchStore();
