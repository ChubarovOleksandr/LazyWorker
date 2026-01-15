type TextFieldTypes = 'text' | 'password' | 'email' | 'number';

export interface TextFieldProps {
  name: string;
  required?: boolean;
  autoFocus?: boolean;
  type?: TextFieldTypes;
  placeholder?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  label?: string;
  minLength?: number;
  maxLength?: number;
}
