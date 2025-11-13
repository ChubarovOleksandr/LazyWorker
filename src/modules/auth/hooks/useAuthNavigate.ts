import { Dispatch, SetStateAction, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { RoutesEnum } from '@enums/routes';
import { isExist } from '@utils/format';

export const useAuthNavigate = (setIsLoading: Dispatch<SetStateAction<boolean>>) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      setIsLoading(false);

      if (!isExist(user)) {
        if (location.pathname === RoutesEnum.Auth) {
          return navigate(RoutesEnum.SignIn);
        }
        return;
      }

      navigate(RoutesEnum.Main);
    });

    return () => unsubscribe();
  }, []);
};
