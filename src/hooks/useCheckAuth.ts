import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

import { RoutesEnum } from '@enums/routes';
import { isExist } from '@utils/format';

export const useCheckAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { currentUser } = getAuth();

  useEffect(() => {
    if (!isExist(currentUser) && !location.pathname.includes(RoutesEnum.Auth)) {
      console.log(location.pathname);

      navigate(RoutesEnum.Auth, { replace: true });
    }
  }, [currentUser]);
};
