import { RegisterOptions } from 'react-hook-form';

import { isExist } from '@utils/format';

import { TextFieldProps } from './interface';

export const getRegisterOptions = ({
  required,
  minLength,
  maxLength,
}: Pick<TextFieldProps, 'required' | 'minLength' | 'maxLength'>): RegisterOptions<any, string> => {
  return {
    required: isExist(required) ? { value: required, message: 'Это поле обязательное' } : undefined,
    minLength: isExist(minLength)
      ? { value: minLength, message: `Минимальная длина - ${minLength} символов` }
      : undefined,
    maxLength: isExist(maxLength)
      ? { value: maxLength, message: `Максимальная длина - ${maxLength} символов` }
      : undefined,
  };
};
