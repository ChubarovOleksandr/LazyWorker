import { useEffect } from 'react';

import { OnEventTypeEmpty } from '@interfaces/utils/onEventTypeEmpty';

import { isExist } from '../utils/format';

interface UseHandleClickProps {
  ref: React.RefObject<HTMLElement>;
  callback: OnEventTypeEmpty;
}

export const useHandleClickOutside = ({ ref, callback }: UseHandleClickProps) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (isExist(ref.current) && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};
