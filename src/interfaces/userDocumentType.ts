import { AppThemeEnum } from '@enums/appTheme';
import { UserSettingsFieldsEnum } from '@enums/user-settings-fields.enum';

export interface UserSettingsInterface {
  [UserSettingsFieldsEnum.Theme]?: AppThemeEnum;
  [UserSettingsFieldsEnum.ShouldUseThemeByDefault]?: boolean;
  [UserSettingsFieldsEnum.ShouldShowTimeOnSearchPage]?: boolean;
  [UserSettingsFieldsEnum.ShouldShowASCIIOnSearchPage]?: boolean;
}

export interface UserDocumentInterface {
  settings: UserSettingsInterface;
}
