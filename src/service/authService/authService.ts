import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth';

export const authService = {
  onAuthStateChanged: (cb: (user: User) => void) => {
    const auth = getAuth();
    return onAuthStateChanged(auth, cb);
  },
  signOut: async () => {
    const auth = getAuth();
    return signOut(auth);
  },
};
