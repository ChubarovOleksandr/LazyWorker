import { Dispatch, SetStateAction } from 'react';

import { getSafetyString } from '@utils/get-safety-string';

export const handleSignUpAttempt = async (
  fetchFn: any,
  setError: Dispatch<SetStateAction<string>>,
) => {
  try {
    // TODO ADD PARSE ERRORS
    setError(null);

    return await fetchFn();
  } catch (responseError: any) {
    setError(getSafetyString(responseError?.message));
  }
};
