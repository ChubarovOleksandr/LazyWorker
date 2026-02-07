import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

import { RoutesEnum } from '@enums/routes';

import { SignInFormInterface } from '../interface/interface';
import { handleSignInAttempt } from '../utils/utils';

export const useSignIn = () => {
  const [formError, setFormError] = useState<string>();

  const navigate = useNavigate();
  const auth = getAuth();

  const defaultSignIn = ({ email, password }: SignInFormInterface) => {
    handleSignInAttempt(async () => {
      await signInWithEmailAndPassword(auth, email, password);

      navigate(RoutesEnum.Main);
    }, setFormError);
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    provider.addScope('email');
    provider.addScope('profile');

    handleSignInAttempt(async () => {
      await signInWithPopup(auth, provider);

      navigate(RoutesEnum.Main);
    }, setFormError);
  };

  return { formError, defaultSignIn, signInWithGoogle };
};
