import { Badge } from '@radix-ui/themes';
import { Flame } from 'lucide-react';

const defaultIconSize = 14;

export const ImportantBadge = () => (
  <Badge color="orange">
    <Flame height={defaultIconSize} width={defaultIconSize} color="orange" />
    Важно
  </Badge>
);
