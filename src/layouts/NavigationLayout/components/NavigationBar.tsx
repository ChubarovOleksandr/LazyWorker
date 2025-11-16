import { navbarList } from '@configs/navbarConfig';

import { getBottomItems, getTopItems } from '../utils/utils';

import { NavigationItem } from './NavigationItem';

import '../style/components/navigationBar.scss';

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
