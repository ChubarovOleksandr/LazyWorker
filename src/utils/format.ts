export const isExist = (value: unknown) => value !== null && value !== undefined;

export const isString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim().length > 0;

export const isEmptyString = (value: unknown) => isString(value) && value.length === 0;

export const isArray = (value: unknown): value is unknown[] => Array.isArray(value);

export const isNotEmptyArray = (value: unknown[]): boolean => isArray(value) && value.length > 0;

export const isEmptyArray = (value: unknown[]): boolean => isArray(value) && value.length === 0;

export const isEmptyObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && Object.keys(value).length === 0;
