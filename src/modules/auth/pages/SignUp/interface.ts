import { SignUpFieldsEnum } from './enum';

export interface SignUpFormInterface {
  [SignUpFieldsEnum.Email]: string;
  [SignUpFieldsEnum.Password]: string;
}
