import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { RoutesEnum } from '@enums/routes';
import { getSafetyString } from '@utils/get-safety-string';

import { SignUpFormInterface } from '../interface';
import { handleSignUpAttempt } from '../utils';

interface SignUpProps {
  setFormError: Dispatch<SetStateAction<string>>;
}

export const useSignUp = ({ setFormError }: SignUpProps) => {
  const navigate = useNavigate();
  const auth = getAuth();

  const defaultSignUp = async ({ email, password }: SignUpFormInterface) => {
    setFormError(null);

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      navigate(RoutesEnum.Main);
    } catch (responseError: any) {
      setFormError(getSafetyString(responseError?.message));
    }
  };

  const signUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    provider.addScope('email');
    provider.addScope('profile');

    handleSignUpAttempt(async () => {
      await signInWithPopup(auth, provider);

      navigate(RoutesEnum.Main);
    }, setFormError);
  };

  return { defaultSignUp, signUpWithGoogle };
};
