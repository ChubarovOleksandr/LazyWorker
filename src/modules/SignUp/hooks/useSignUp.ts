import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { RoutesEnum } from '@enums/routes.enum';

import { SignUpFormInterface } from '../interface/interface';
import { handleSignUpAttempt } from '../utils/utils';

export const useSignUp = () => {
  const [formError, setFormError] = useState<string>('');

  const navigate = useNavigate();
  const auth = getAuth();

  const defaultSignUp = async ({ email, password }: SignUpFormInterface) => {
    await handleSignUpAttempt(async () => {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate(RoutesEnum.Main);
    }, setFormError);
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

  return { formError, defaultSignUp, signUpWithGoogle };
};
