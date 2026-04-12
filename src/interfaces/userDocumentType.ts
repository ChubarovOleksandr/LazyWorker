export type UserSettingsInterface = Record<string, never>;

export interface UserDocumentInterface {
  settings: UserSettingsInterface;
}
