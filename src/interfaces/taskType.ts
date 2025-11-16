import { TaskPriorityEnum } from '@enums/priority';

export interface TaskInterface {
  title: string;
  details?: string;
  priority: TaskPriorityEnum;
}
