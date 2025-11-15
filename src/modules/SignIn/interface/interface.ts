import { SignInFieldsEnum } from '../enum/enum';

export interface SignInFormInterface {
  [SignInFieldsEnum.Email]: string;
  [SignInFieldsEnum.Password]: string;
}
