import { getFirestore } from 'firebase/firestore';

import { UserDocumentInterface, UserSettingsInterface } from '@interfaces/userDocumentType.ts';
import { AppThemeEnum } from '@enums/appTheme.ts';
import { UserSettingsFieldsEnum } from '@enums/user-settings-fields.enum';

import { app } from './firebaseConfig';

export const db = getFirestore(app);

const DEFAULT_USER_SETTINGS: Required<UserSettingsInterface> = {
  [UserSettingsFieldsEnum.Theme]: AppThemeEnum.Light,
  [UserSettingsFieldsEnum.ShouldUseThemeByDefault]: false,
  [UserSettingsFieldsEnum.ShouldShowTimeOnSearchPage]: true,
  [UserSettingsFieldsEnum.ShouldShowASCIIOnSearchPage]: true,
};

export const DEFAULT_USER_SETTINGS_DOCUMENT: UserDocumentInterface = {
  settings: DEFAULT_USER_SETTINGS,
};
