import { getAuth, signOut } from 'firebase/auth';
import { ChartNoAxesGantt, ClipboardClock, LogOut, Settings, SquareChartGantt } from 'lucide-react';

import { NavBarItemInterface } from '@layouts/NavigationLayout/interface/interface';
import { RoutesEnum } from '@enums/routes';

const onSignOut = () => {
  const auth = getAuth();
  signOut(auth);
};

export const navbarList: NavBarItemInterface[] = [
  {
    icon: SquareChartGantt,
    linkTo: RoutesEnum.Main,
    title: 'Главная',
  },
  {
    icon: ClipboardClock,
    linkTo: RoutesEnum.SignIn,
    title: 'Главная',
  },
  {
    icon: ChartNoAxesGantt,
    linkTo: RoutesEnum.SignUp,
    title: 'Главная',
  },
  {
    icon: Settings,
    linkTo: RoutesEnum.NotFoundPage,
    title: 'Настройки',
  },
  {
    icon: LogOut,
    linkTo: RoutesEnum.SignIn,
    title: 'Выйти',
    onClick: onSignOut,
    isBottom: true,
  },
];
