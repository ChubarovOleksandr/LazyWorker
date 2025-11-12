export const isExist = (value: unknown) => value !== null && value !== undefined;

export const isString = (value: unknown): value is string => typeof value === 'string';
