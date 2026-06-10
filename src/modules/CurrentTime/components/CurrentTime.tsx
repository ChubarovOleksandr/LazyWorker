import { useCurrentTime } from '@modules/CurrentTime/hooks/useCurrentTime.ts';

import '../styles/currentTime.scss';

export const CurrentTime = () => {
  const currentTime = useCurrentTime();

  return <div className="current-time">{currentTime}</div>;
};
