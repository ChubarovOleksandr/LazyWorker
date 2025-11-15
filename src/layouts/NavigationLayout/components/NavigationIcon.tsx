import { LucideProps } from 'lucide-react';

interface NavigationIconProps {
  iconEl: React.ElementType<LucideProps>;
  props?: Record<string, string>;
}

const defaultSize = 18;

export const NavigationIcon = ({ iconEl: Icon, props }: NavigationIconProps) => (
  <Icon width={defaultSize} height={defaultSize} {...props} />
);
