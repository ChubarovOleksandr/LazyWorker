import { Callout } from '@radix-ui/themes';

import { isExist } from '@utils/format';

interface FormErrorProps {
  error: string;
}

export const FormError = ({ error }: FormErrorProps) => {
  return (
    isExist(error) && (
      <Callout.Root color="tomato" mb={'5'}>
        <Callout.Text color="red" size={'2'}>
          {error}
        </Callout.Text>
      </Callout.Root>
    )
  );
};
