import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Flex } from '@radix-ui/themes';
import { observer } from 'mobx-react-lite';

import { scheduleStore } from '@store/scheduleStore';
import { settingsStore } from '@store/settingsStore.ts';
import { PageLoader } from '@components/PageLoader/PageLoader';
import { useAuth } from '@hooks/useAuth';
import { RoutesEnum } from '@enums/routes.enum';
import { isExist } from '@utils/format';

import { NavigationBar } from './components/NavigationBar';

import './style/navigationModule.scss';

const NavigationLayout = observer(() => {
  const { user, loading: isCheckingAuth } = useAuth();
  const userId = user?.uid ?? null;

  const isLoadingSchedule = scheduleStore.loading;
  const isLoadingUserSettings = settingsStore.isLoading;

  useEffect(() => {
    if (isCheckingAuth || !userId) {
      return;
    }

    void Promise.all([scheduleStore.loadSchedule(), settingsStore.loadSettings()]);
  }, [isCheckingAuth, userId]);

  if (isCheckingAuth) {
    return <PageLoader />;
  }

  if (!isExist(user)) {
    return <Navigate replace to={RoutesEnum.SignIn} />;
  }

  if (isLoadingSchedule || isLoadingUserSettings) {
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
