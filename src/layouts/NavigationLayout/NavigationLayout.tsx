import { Outlet } from 'react-router-dom';
import { Flex } from '@radix-ui/themes';

import { NavigationBar } from './components/NavigationBar';

import './style/navigationModule.scss';

export const NavigationLayout = () => {
  return (
    <Flex className="app__wrapper">
      <NavigationBar />
      <Outlet />
    </Flex>
  );
};
