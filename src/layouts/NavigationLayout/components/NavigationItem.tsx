import { NavLink } from 'react-router-dom';

import { createClassName } from '@utils/create-class-name';

import { NavBarItemInterface } from '../interface/interface';

import { NavigationIcon } from './NavigationIcon';

interface NavigationItemProps {
  item: NavBarItemInterface;
}

export const NavigationItem = ({ item }: NavigationItemProps) => (
  <NavLink
    title={item.title}
    to={item.linkTo}
    className={createClassName('navbar__item', {
      condition: item.isBottom,
      value: 'bottom',
    })}
  >
    {({ isActive }) => (
      <NavigationIcon iconEl={item.icon} props={{ color: isActive ? '#f2faff' : '#5d636cff' }} />
    )}
  </NavLink>
);
