import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { RoutesEnum } from '@enums/routes';
import { isExist } from '@utils/format';

export const useAuthNavigate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (!isExist(user)) {
        if (location.pathname === RoutesEnum.Auth) {
          navigate(RoutesEnum.SignIn);
        }
      }
    });

    return () => unsubscribe();
  }, [navigate]);
};
