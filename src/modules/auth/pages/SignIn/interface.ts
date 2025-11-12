import type { SignInFieldsEnum } from './enum';

export interface SignInFormInterface {
  [SignInFieldsEnum.Email]: string;
  [SignInFieldsEnum.Password]: string;
}
