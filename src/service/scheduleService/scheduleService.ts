import { doc, getDoc, setDoc } from 'firebase/firestore';

import { db } from '@configs/firebaseConfig';
import { CalendarDataType } from '@interfaces/dateDataType';
import { CollectionNamesEnum } from '@enums/collectionNames';

export const scheduleService = {
  getSchedule: async (userId: string): Promise<CalendarDataType> => {
    try {
      const docRef = doc(db, CollectionNamesEnum.Schedule, userId);
      const snap = await getDoc(docRef);

      return snap.exists() ? (snap.data() as CalendarDataType) : {};
    } catch (error) {
      console.error('Error fetching schedule:', error);
      throw error;
    }
  },

  updateSchedule: async (schedule: CalendarDataType, userId: string) => {
    try {
      const docRef = doc(db, CollectionNamesEnum.Schedule, userId);

      await setDoc(docRef, schedule, { merge: true });

      return true;
    } catch (error) {
      console.error('Error updating schedule:', error);
      throw error;
    }
  },
};
