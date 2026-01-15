import { useFormContext } from 'react-hook-form';
import { Text } from '@radix-ui/themes';

import { FieldError } from '@ui/FieldError/FieldError';
import { createClassName } from '@utils/create-class-name';
import { isExist } from '@utils/format';

import { TextFieldProps } from './interface';
import { getRegisterOptions } from './utils';

import './textField.scss';

export const TextField = ({
  style,
  inputStyle,
  autoFocus = false,
  type = 'text',
  label,
  name,
  placeholder,
  required = false,
  minLength,
  maxLength,
}: TextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  return (
    <label className="textField-label" style={style}>
      {isExist(label) && <Text size="2">{label}</Text>}
      <input
        className={createClassName('textField-input', {
          condition: isExist(error),
          value: 'error',
        })}
        type={type}
        placeholder={placeholder}
        style={inputStyle}
        autoFocus={autoFocus}
        {...register(name, getRegisterOptions({ required, minLength, maxLength }))}
      />
      {isExist(error) && <FieldError error={error} />}
    </label>
  );
};
