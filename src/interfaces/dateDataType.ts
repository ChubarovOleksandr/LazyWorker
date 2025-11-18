import { EventInterface } from './eventType';
import { TaskInterface } from './taskType';

export type CalendarDataType = Record<string, DateDataInterface>;

export interface DateDataInterface {
  tasks: TaskInterface[];
  events: EventInterface[];
}
