import { Navigate, Outlet } from 'react-router-dom';
import { Flex } from '@radix-ui/themes';

import { PageLoader } from '@components/PageLoader/PageLoader';
import { useAuth } from '@hooks/useAuth';
import { RoutesEnum } from '@enums/routes.enum';
import { isExist } from '@utils/format';

const AuthorizationLayout = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <PageLoader />;
  }

  if (isExist(user)) {
    return <Navigate replace to={RoutesEnum.Main} />;
  }

  return (
    <Flex justify="center" align="center" style={{ height: '100vh' }}>
      <Outlet />
    </Flex>
  );
};

export default AuthorizationLayout;
