import { Dispatch, SetStateAction } from 'react';

import { getAuthErrorMessage } from '@utils/get-auth-error-message';

export const handleSignUpAttempt = async (
  fetchFn: () => Promise<unknown>,
  setError: Dispatch<SetStateAction<string>>,
) => {
  try {
    setError(null);

    return await fetchFn();
  } catch (error: unknown) {
    setError(getAuthErrorMessage(error, 'Не удалось зарегистрироваться.'));
    console.error('Sign-up error:', error);
  }
};
