import { getAuth, signOut } from 'firebase/auth';
import {
  ChartNoAxesGantt,
  ClipboardClock,
  LogOut,
  Search,
  Settings,
  SquareChartGantt,
} from 'lucide-react';

import { NavBarItemInterface } from '@layouts/NavigationLayout/interface/interface';
import { RoutesEnum } from '@enums/routes';

const onSignOut = () => {
  const auth = getAuth();
  signOut(auth);
};

export const navbarList: NavBarItemInterface[] = [
  {
    icon: Search,
    linkTo: RoutesEnum.Search,
    title: 'Поиск',
  },
  {
    icon: SquareChartGantt,
    linkTo: RoutesEnum.Main,
    title: 'Главная',
  },
  {
    icon: ClipboardClock,
    linkTo: RoutesEnum.ComingSoon,
    title: 'События',
  },
  {
    icon: ChartNoAxesGantt,
    linkTo: RoutesEnum.ComingSoon,
    title: 'Список задач',
  },
  {
    icon: Settings,
    linkTo: RoutesEnum.ComingSoon,
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
