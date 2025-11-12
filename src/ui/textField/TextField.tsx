import { useForm } from 'react-hook-form';

import { getSafetyString } from '../../utils/get-safety-string';

import './textField.scss';

interface TextFieldProps {
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  label?: string;
}

export const TextField = ({
  style,
  type = 'text',
  label,
  name,
  placeholder,
  required = false,
}: TextFieldProps) => {
  const { register } = useForm();

  return (
    <label className="textField-label" style={style}>
      <span className="textField-text">{label}</span>
      <input
        className="textField-input"
        name={name}
        type={type}
        placeholder={placeholder}
        {...(register(name), { required })}
      />
    </label>
  );
};
