import { doc, getDoc, setDoc } from 'firebase/firestore';

import { db } from '@configs/firestoreConfig';
import { UserDocumentInterface, UserSettingsInterface } from '@interfaces/userDocumentType';
import { CollectionNamesEnum } from '@enums/collection-name.enum';

export const userService = {
  getUserDocument: async (userId: string): Promise<UserDocumentInterface | null> => {
    const docRef = doc(db, CollectionNamesEnum.User, userId);
    const snap = await getDoc(docRef);
    return snap.exists() ? (snap.data() as UserDocumentInterface) : null;
  },

  setUserDocument: async (userId: string, data: UserDocumentInterface): Promise<void> => {
    await setDoc(doc(db, CollectionNamesEnum.User, userId), data, { merge: true });
  },

  mergeUserSettings: async (userId: string, partial: Partial<UserSettingsInterface>): Promise<void> => {
    await setDoc(doc(db, CollectionNamesEnum.User, userId), { settings: partial }, { merge: true });
  },
};
