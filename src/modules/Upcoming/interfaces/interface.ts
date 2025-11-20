import { UpcomingTaskDateVariantEnum, UpcomingTaskFieldsEnum } from '../enums/enum';

export interface UpcomingTaskDateVariant {
  label: UpcomingTaskDateVariantEnum;
  value: string;
}

export interface UpcomingTaskAddFormInterface {
  [UpcomingTaskFieldsEnum.Title]: string;
  [UpcomingTaskFieldsEnum.Description]?: string;
  [UpcomingTaskFieldsEnum.Date]: string;
}
