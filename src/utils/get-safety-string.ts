import { isExist } from './format';

export const getSafetyString = (value: unknown): string => (!isExist(value) ? '' : String(value));
