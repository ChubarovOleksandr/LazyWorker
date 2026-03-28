import { Dispatch, SetStateAction } from 'react';

import { getAuthErrorMessage } from '@utils/get-auth-error-message';

export const handleResetAttempt = async (
  fetchFn: () => Promise<unknown>,
  setError: Dispatch<SetStateAction<string>>,
) => {
  try {
    setError(null);

    return await fetchFn();
  } catch (error: unknown) {
    setError(getAuthErrorMessage(error, 'Не удалось отправить письмо для восстановления.'));
    console.error('Reset-password error:', error);
  }
};
