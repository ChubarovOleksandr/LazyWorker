import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';

import { authService } from 'src/service/authService/authService';

export const useAuth = () => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged(currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
};
