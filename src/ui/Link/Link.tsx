import { NavLink } from 'react-router-dom';
import { Text, TextProps } from '@radix-ui/themes';

import { RoutesEnum } from '@enums/routes';
import { getSafetyString } from '@utils/get-safety-string';

import { isExist } from '../../utils/format';

import './link.scss';

interface LinkProps {
  to: RoutesEnum | string;
  label?: string;
  children?: React.ReactNode;
  textProps?: TextProps;
  linkStyles?: React.CSSProperties;
  className?: string;
}

export const Link = ({ to, label, children, textProps, linkStyles, className }: LinkProps) => {
  return (
    <NavLink className={'custom-link' + getSafetyString(className)} style={linkStyles} to={to}>
      <Text {...textProps}>{isExist(label) ? label : children}</Text>
    </NavLink>
  );
};
