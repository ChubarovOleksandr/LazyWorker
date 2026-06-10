import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Flex } from '@radix-ui/themes';
import { observer } from 'mobx-react-lite';

import { authStore } from '@store/authStore';
import { scheduleStore } from '@store/scheduleStore';
import { settingsStore } from '@store/settingsStore.ts';
import { PageLoader } from '@components/PageLoader/PageLoader';

import { NavigationBar } from './components/NavigationBar';
import { useCheckAuth } from './hooks/useCheckAuth';

import './style/navigationModule.scss';

const NavigationLayout = observer(() => {
  const isCheckingAuth = useCheckAuth();

  const userId = authStore.isAuthenticated ? authStore.requiredUserId : null;

  const isLoadingSchedule = scheduleStore.loading;
  const isLoadingUserSettings = settingsStore.isLoading;

  useEffect(() => {
    if (isCheckingAuth || !userId) {
      return;
    }

    void Promise.all([scheduleStore.loadSchedule(), settingsStore.loadSettings()]);
  }, [isCheckingAuth, userId]);

  if (isCheckingAuth || isLoadingSchedule || isLoadingUserSettings) {
    return <PageLoader />;
  }

  return (
    <Flex className="app__wrapper">
      <NavigationBar />
      <Outlet />
    </Flex>
  );
});

export default NavigationLayout;
