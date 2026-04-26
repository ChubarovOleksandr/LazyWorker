import {
  collection,
  doc,
  type DocumentData,
  getDocs,
  query,
  type QueryDocumentSnapshot,
  setDoc,
  Timestamp,
  updateDoc,
  where,
} from 'firebase/firestore';

import { db } from '@configs/firestoreConfig';
import { TaskDocumentInterface } from '@interfaces/taskDocumentType';
import { TaskInterface } from '@interfaces/taskType';
import { CollectionNamesEnum } from '@enums/collection-name.enum';

const scheduleCollectionRef = collection(db, CollectionNamesEnum.Schedule);

const snapshotToTask = (docSnap: QueryDocumentSnapshot<DocumentData>): TaskInterface => ({
  id: docSnap.id,
  ...(docSnap.data() as TaskDocumentInterface),
});

export const scheduleService = {
  getTasksByUserId: async (userId: string): Promise<TaskInterface[]> => {
    const q = query(scheduleCollectionRef, where('userId', '==', userId));
    const snap = await getDocs(q);
    const tasks = snap.docs.map(snapshotToTask);

    tasks.sort((a, b) => a.date.toMillis() - b.date.toMillis());
    return tasks;
  },

  createTask: async (task: TaskInterface): Promise<void> => {
    const { id, ...payload } = task;
    await setDoc(doc(db, CollectionNamesEnum.Schedule, id), payload);
  },

  updateTask: async (task: TaskInterface): Promise<void> => {
    const { id, ...payload } = task;
    await updateDoc(doc(db, CollectionNamesEnum.Schedule, id), payload);
  },

  getTasksForDay: async (userId: string, day: Date): Promise<TaskInterface[]> => {
    const start = new Date(day);
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setDate(start.getDate() + 1);

    const startTs = Timestamp.fromDate(start);
    const endTs = Timestamp.fromDate(end);

    const q = query(
      scheduleCollectionRef,
      where('userId', '==', userId),
      where('date', '>=', startTs),
      where('date', '<', endTs),
    );

    const snap = await getDocs(q);
    const tasks = snap.docs.map(snapshotToTask);
    tasks.sort((a, b) => a.date.toMillis() - b.date.toMillis());
    return tasks;
  },
};
