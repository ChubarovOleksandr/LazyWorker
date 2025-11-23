import { useNavigate } from 'react-router-dom';

import { RoutesEnum } from '@enums/routes';
import { useAuth } from '@hooks/useAuth';
import { isExist } from '@utils/format';

export const useCheckAuth = () => {
  const navigate = useNavigate();
  const { loading: isLoading, user } = useAuth();

  if (!isExist(user) && !isLoading) {
    navigate(RoutesEnum.SignIn, { replace: true });
  }

  return isLoading;
};
