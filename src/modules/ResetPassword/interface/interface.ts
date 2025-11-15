import { ResetPasswordFieldsEnum } from '../enum/enum';

export interface ResetPasswordFormInterface {
  [ResetPasswordFieldsEnum.Email]: string;
}
