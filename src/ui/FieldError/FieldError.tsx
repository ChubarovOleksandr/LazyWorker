import { FieldError as FormFieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { Flex, Text } from '@radix-ui/themes';
import { InfoIcon } from 'lucide-react';

import { getSafetyString } from '../../utils/get-safety-string';

interface FieldErrorProps {
  error: FormFieldError | Merge<FormFieldError, FieldErrorsImpl<any>>;
}

export const FieldError = ({ error }: FieldErrorProps) => (
  <Flex align="center" gap="1">
    <InfoIcon width={14} height={14} color="#d43d42d3" />
    <Text size="1" color="red">
      {getSafetyString(error?.message)}
    </Text>
  </Flex>
);
