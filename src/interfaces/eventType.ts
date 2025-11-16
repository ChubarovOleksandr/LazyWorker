import { NotifyMethodsEnum } from '@enums/notifyMethods';
import { EventPriorityEnum } from '@enums/priority';

export interface EventInterface {
  title: string;
  details?: string;
  priority: EventPriorityEnum;
  notifyBy: NotifyMethodsEnum[];
  time: string;
  howLongNotify: string;
  notifyAfterMissing: boolean;
}
