import { NavBarItemInterface } from '../interface/interface';

export const getTopItems = (navbarList: NavBarItemInterface[]) =>
  navbarList.filter(item => !item.isBottom);

export const getBottomItems = (navbarList: NavBarItemInterface[]) =>
  navbarList.filter(item => item.isBottom);
