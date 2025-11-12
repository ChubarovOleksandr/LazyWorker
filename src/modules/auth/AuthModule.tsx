import { Outlet } from 'react-router-dom';
import { Flex } from '@radix-ui/themes';

import { useAuthNavigate } from './hooks/useAuthNavigate';

export const AuthModule = () => {
  useAuthNavigate();

  return (
    <Flex justify="center" align="center" height={'100vh'}>
      <Outlet />
    </Flex>
  );
};
