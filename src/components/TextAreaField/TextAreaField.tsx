import { RefAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { TextArea, TextAreaProps } from '@radix-ui/themes';

interface TextAreaFieldProps extends TextAreaProps, RefAttributes<HTMLTextAreaElement> {
  name: string;
}

export const TextAreaField = ({ name, ...rest }: TextAreaFieldProps) => {
  const { register } = useFormContext();

  return <TextArea {...register(name)} {...rest} />;
};
