import { useEffect, useState } from 'react';
import type { User } from 'firebase/auth';

import { isExist } from '@utils/format';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let unsubscribe: () => void;

    const initAuth = async () => {
      try {
        const { authService } = await import('@service/authService/authService');

        unsubscribe = authService.onAuthStateChanged(currentUser => {
          setUser(currentUser);
          setLoading(false);
        });
      } catch (error) {
        console.error('Ошибка при загрузке Auth:', error);
        setLoading(false);
      }
    };

    initAuth();

    return () => {
      if (isExist(unsubscribe)) {
        unsubscribe();
      }
    };
  }, []);

  return { user, loading };
};
