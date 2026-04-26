import { TaskPriorityEnum } from '@enums/task-priority.enum';

import { TaskFieldsEnum, TaskFormDateVariantEnum } from './enum';

export interface TaskFormInterface {
  [TaskFieldsEnum.Title]: string;
  [TaskFieldsEnum.Details]?: string;
  [TaskFieldsEnum.Priority]: TaskPriorityEnum;
  [TaskFieldsEnum.Date]: string;
}

export interface TaskFormDateVariant {
  label: TaskFormDateVariantEnum;
  value: string;
}
