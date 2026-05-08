import { AppThemeEnum } from '@enums/appTheme';

export interface UserSettingsInterface {
  theme?: AppThemeEnum;
  shouldUseThemeByDefault?: boolean;
}

export interface UserDocumentInterface {
  settings: UserSettingsInterface;
}
