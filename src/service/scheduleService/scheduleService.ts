import { collection, getDocs } from 'firebase/firestore';

import { db } from '@configs/firebaseConfig';
import { CollectionNamesEnum } from '@enums/collectionNames';

export const scheduleService = {
  getSchedule: async () => {
    try {
      const querySnapshot = await getDocs(collection(db, CollectionNamesEnum.Schedule));

      return querySnapshot.docs.reduce<Record<string, any>>((acc, doc) => {
        acc[doc.id] = doc.data();
        return acc;
      }, {});
    } catch (error) {
      console.error('Error fetching schedule:', error);
      throw error;
    }
  },
};
