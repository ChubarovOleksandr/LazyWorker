import { TaskPriorityEnum } from '@enums/task-priority.enum';

import { UpcomingTaskDateVariantEnum, UpcomingTaskFieldsEnum } from '../enums/enum';

export interface UpcomingTaskDateVariant {
  label: UpcomingTaskDateVariantEnum;
  value: string;
}

export interface UpcomingTaskAddFormInterface {
  [UpcomingTaskFieldsEnum.Title]: string;
  [UpcomingTaskFieldsEnum.Details]?: string;
  [UpcomingTaskFieldsEnum.Priority]: TaskPriorityEnum;
  [UpcomingTaskFieldsEnum.Date]: string;
}
