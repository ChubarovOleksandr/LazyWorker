import { Dispatch, SetStateAction } from 'react';

import { getAuthErrorMessage } from '@utils/get-auth-error-message';

export const handleSignInAttempt = async (
  fetchFn: () => Promise<unknown>,
  setError: Dispatch<SetStateAction<string>>,
) => {
  try {
    setError(null);

    return await fetchFn();
  } catch (error: unknown) {
    setError(getAuthErrorMessage(error, 'Произошла ошибка при авторизации.'));
    console.error('Sign-in error:', error);
  }
};
