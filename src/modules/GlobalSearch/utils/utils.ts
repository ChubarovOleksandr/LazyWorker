import { localStorageKeys } from '@enums/localStorageKeys';
import { isEmptyString } from '@utils/format';
import { getFromLocalStorage, saveInLocalStorage } from '@utils/local-storage';

export const updateRequestHistory = (text: string) => {
  const history = getFromLocalStorage<string[]>(localStorageKeys.GlobalSearchHistory, []);

  if (history.includes(text)) {
    return;
  }

  const updatedHistory = [text, ...history];
  saveInLocalStorage(localStorageKeys.GlobalSearchHistory, updatedHistory);
};

export const getRequestHistory = (): string[] => {
  return getFromLocalStorage(localStorageKeys.GlobalSearchHistory, []);
};

export const findSuggestionsByText = (searchHistory: string[], searchText: string): string[] =>
  !isEmptyString(searchText)
    ? searchHistory.filter(item => item.toLowerCase().includes(searchText.toLowerCase()))
    : searchHistory;
