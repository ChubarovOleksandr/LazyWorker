import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { RoutesEnum } from '@enums/routes';
import { isExist } from '@utils/format';

export const UnauthorizedLayout = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (isExist(user)) {
        navigate(RoutesEnum.Main, { replace: true });
      }
    });
  }, [auth]);

  return <Outlet />;
};
