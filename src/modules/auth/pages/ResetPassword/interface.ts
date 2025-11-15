import { ResetPasswordFieldsEnum } from './enum';

export interface ResetPasswordFormInterface {
  [ResetPasswordFieldsEnum.Email]: string;
}
