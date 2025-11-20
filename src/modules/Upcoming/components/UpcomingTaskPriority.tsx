import { UseFormSetValue } from 'react-hook-form';
import { Select } from '@radix-ui/themes';

import { UpcomingTaskAddFormInterface } from '../interfaces/interface';

interface Props {
  setValue: UseFormSetValue<UpcomingTaskAddFormInterface>;
}

export const UpcomingTaskPriority = ({ setValue }: Props) => {
  return <Select.Root></Select.Root>;
};
