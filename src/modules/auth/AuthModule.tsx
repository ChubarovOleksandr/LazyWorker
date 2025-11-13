import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Flex, Spinner } from '@radix-ui/themes';

import { useAuthNavigate } from './hooks/useAuthNavigate';

export const AuthModule = () => {
  const [isLoading, setIsLoading] = useState(true);

  useAuthNavigate(setIsLoading);

  return (
    <Flex justify="center" align="center" height={'100vh'}>
      {isLoading ? <Spinner size={'3'} loading /> : <Outlet />}
    </Flex>
  );
};
