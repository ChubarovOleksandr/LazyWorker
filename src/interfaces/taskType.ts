import { TaskPriorityEnum } from '@enums/priority';
import { TaskStatusEnum } from '@enums/taskStatus';

export interface TaskInterface {
  title: string;
  details?: string;
  priority: TaskPriorityEnum;
  dateStart?: string;
  dateEnd?: string;
  id: string;
  status: TaskStatusEnum;
}
