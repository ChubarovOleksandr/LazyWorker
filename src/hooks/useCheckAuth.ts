import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { RoutesEnum } from '@enums/routes';
import { isExist } from '@utils/format';

export const useCheckAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (!isExist(user) && !location.pathname.includes(RoutesEnum.Auth)) {
        navigate(`${RoutesEnum.Auth}/${RoutesEnum.SignIn}`, { replace: true });
      }
    });
  }, [auth]);
};
