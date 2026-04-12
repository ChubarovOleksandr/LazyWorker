import { Timestamp } from 'firebase/firestore';

import { TaskPriorityEnum } from '@enums/priority';
import { TaskStatusEnum } from '@enums/taskStatus';

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
