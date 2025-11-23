import { Outlet } from 'react-router-dom';
import { Flex, Spinner } from '@radix-ui/themes';

import { NavigationBar } from './components/NavigationBar';
import { useCheckAuth } from './hooks/useCheckAuth';
import { useSchedule } from './hooks/useSchedule';

import './style/navigationModule.scss';

export const NavigationLayout = () => {
  const isCheckingAuth = useCheckAuth();
  useSchedule();

  if (isCheckingAuth) {
    // TODO STYLE AND CHANGE SPINNER
    return <Spinner size={'3'} />;
  }

  return (
    <Flex className="app__wrapper">
      <NavigationBar />
      <Outlet />
    </Flex>
  );
};
