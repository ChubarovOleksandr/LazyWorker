import { Outlet, useNavigate } from 'react-router-dom';
import { Flex } from '@radix-ui/themes';

import { PageLoader } from '@components/Loader/Loader';
import { RoutesEnum } from '@enums/routes';
import { useAuth } from '@hooks/useAuth';
import { isExist } from '@utils/format';

export const AuthorizationLayout = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  if (loading) {
    return <PageLoader />;
  }

  if (isExist(user)) {
    navigate(RoutesEnum.Main, { replace: true });
  }

  return (
    <Flex justify={'center'} align={'center'} style={{ height: '100vh' }}>
      <Outlet />
    </Flex>
  );
};
