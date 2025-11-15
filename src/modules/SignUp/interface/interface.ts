import { SignUpFieldsEnum } from '../enum/enum';

export interface SignUpFormInterface {
  [SignUpFieldsEnum.Email]: string;
  [SignUpFieldsEnum.Password]: string;
}
