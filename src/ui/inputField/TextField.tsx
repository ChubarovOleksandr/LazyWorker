import { Text } from '@radix-ui/themes';

import './textField.scss';

type TextTypesEnum = 'text' | 'password' | 'email' | 'number';

interface TextFieldProps {
  name: string;
  required?: boolean;
  type?: TextTypesEnum;
  placeholder?: string;
  style?: React.CSSProperties;
  label?: string;
  minLength?: number;
  maxLength?: number;
  register: any;
}

export const TextField = ({
  style,
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
      <Text size="2">{label}</Text>
      <input
        className="textField-input"
        type={type}
        placeholder={placeholder}
        {...register(name, { required, minLength, maxLength })}
      />
    </label>
  );
};
