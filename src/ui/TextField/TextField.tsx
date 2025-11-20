import { Text } from '@radix-ui/themes';

import { isExist } from '@utils/format';

import './textField.scss';

type TextTypesEnum = 'text' | 'password' | 'email' | 'number';

interface TextFieldProps {
  name: string;
  required?: boolean;
  autoFocus?: boolean;
  type?: TextTypesEnum;
  placeholder?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  label?: string;
  minLength?: number;
  maxLength?: number;
  register: any;
}

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
        {...register(name, { required, minLength, maxLength })}
      />
    </label>
  );
};
