import { localStorageKeys } from '@enums/localStorageKeys';

import { isExist } from './format';

export const saveInLocalStorage = (key: localStorageKeys, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = <T>(key: localStorageKeys, defaultValue: T): T => {
  const item = localStorage.getItem(key);
  return isExist(item) ? JSON.parse(item) : defaultValue;
};
