import { Text } from '@radix-ui/themes';

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
  register,
}: TextFieldProps) => {
  return (
    <label className="textField-label" style={style}>
      {isExist(label) && <Text size="2">{label}</Text>}
      <input
        className="textField-input"
        type={type}
        placeholder={placeholder}
        style={inputStyle}
        autoFocus={autoFocus}
        {...register(name, getRegisterOptions({ required, minLength, maxLength }))}
      />
    </label>
  );
};
