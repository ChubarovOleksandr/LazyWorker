import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const getCurrentTime = () => dayjs().format('HH : mm : ss');
const SECOND = 1000;

export const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState<string>(getCurrentTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, SECOND);

    return () => clearInterval(intervalId);
  }, []);

  return currentTime;
};
