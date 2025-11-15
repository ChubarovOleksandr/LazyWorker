import { isString } from './format';

interface ConditionObj {
  condition: boolean;
  value: string;
}

export const createClassName = (...values: Array<string | ConditionObj>) => {
  return values
    .reduce((acc, classItem) => {
      if (isString(classItem) || classItem.condition) {
        acc.push(isString(classItem) ? classItem : classItem.value);
      }

      return acc;
    }, [])
    .join(' ');
};
