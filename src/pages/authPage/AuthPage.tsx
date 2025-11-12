import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { RoutesEnum } from '@enums/routes';
import { isExist } from '@utils/format';

import './authPage.scss';

export const AuthPage = () => {
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

  return (
    <div className="auth">
      <Outlet />
    </div>
  );
};
