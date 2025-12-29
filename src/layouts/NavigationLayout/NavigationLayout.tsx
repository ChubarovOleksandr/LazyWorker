import { Outlet } from 'react-router-dom';
import { Flex, Spinner } from '@radix-ui/themes';
import { observer } from 'mobx-react-lite';

import { useAuth } from '@hooks/useAuth';

import { scheduleStore } from 'src/store/scheduleStore';

import { NavigationBar } from './components/NavigationBar';
import { useCheckAuth } from './hooks/useCheckAuth';
import { useSchedule } from './hooks/useSchedule';

import './style/navigationModule.scss';

export const NavigationLayout = observer(() => {
  const isCheckingAuth = useCheckAuth();
  const isLoadingSchedule = scheduleStore.loading;

  const { user } = useAuth();

  useSchedule(true, user?.uid);

  if (isCheckingAuth || isLoadingSchedule) {
    // TODO STYLE AND CHANGE SPINNER
    return <Spinner size={'3'} />;
  }

  return (
    <Flex className="app__wrapper">
      <NavigationBar />
      <Outlet />
    </Flex>
  );
});
