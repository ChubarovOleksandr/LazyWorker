import { Outlet } from 'react-router-dom';
import { Flex } from '@radix-ui/themes';
import { observer } from 'mobx-react-lite';

import { scheduleStore } from '@store/scheduleStore';
import { PageLoader } from '@components/Loader/Loader';
import { useAuth } from '@hooks/useAuth';

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
    return <PageLoader />;
  }

  return (
    <Flex className="app__wrapper">
      <NavigationBar />
      <Outlet />
    </Flex>
  );
});
