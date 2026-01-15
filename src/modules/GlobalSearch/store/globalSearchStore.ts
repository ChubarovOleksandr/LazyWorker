import { makeAutoObservable } from 'mobx';

import { localStorageKeys } from '@enums/localStorageKeys';
import { saveInLocalStorage } from '@utils/localStorage';

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
