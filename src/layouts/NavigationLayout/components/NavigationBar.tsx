import { ChartNoAxesGantt, ClipboardClock, Settings, SquareChartGantt } from 'lucide-react';

import { RoutesEnum } from '@enums/routes';

import { NavBarItemInterface } from '../interface/interface';
import { getBottomItems, getTopItems } from '../utils/utils';

import { NavigationItem } from './NavigationItem';

import '../style/components/navigationBar.scss';

const navbarList: NavBarItemInterface[] = [
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
    linkTo: RoutesEnum.Auth,
    title: 'Главная',
    isBottom: true,
  },
];

export const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="top">
        {getTopItems(navbarList).map((navItem, index) => (
          <NavigationItem item={navItem} key={index} />
        ))}
      </div>
      <div className="bottom">
        {getBottomItems(navbarList).map((navItem, index) => (
          <NavigationItem item={navItem} key={index} />
        ))}
      </div>
    </nav>
  );
};
