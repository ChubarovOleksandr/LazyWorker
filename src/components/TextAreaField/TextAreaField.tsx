import React from 'react';
import { useFormContext } from 'react-hook-form';

import './textAreaField.scss';

interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({ name, className, ...rest }) => {
  const { register } = useFormContext();

  return (
    <textarea className={`textarea-field ${className}`} rows={4} {...register(name)} {...rest} />
  );
};
