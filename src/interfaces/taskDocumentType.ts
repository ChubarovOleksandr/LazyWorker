import { Timestamp } from 'firebase/firestore';

import { TaskPriorityEnum } from '@enums/task-priority.enum';
import { TaskStatusEnum } from '@enums/task-status.enum';

export interface TaskDocumentInterface {
  userId: string;
  date: Timestamp;
  title: string;
  description: string;
  priority: TaskPriorityEnum;
  category: string;
  order: number;
  status: TaskStatusEnum;
}
