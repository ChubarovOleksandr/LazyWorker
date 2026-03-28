import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

import { modalStore } from '@store/modalStore/modalStore';

import { ResetPasswordModal } from '../components/ResetPasswordModal';
import { ResetPasswordFormInterface } from '../interface/interface';
import { handleResetAttempt } from '../utils/utils';

export const useResetPassword = () => {
  const [formError, setFormError] = useState<string>();

  const methods = useForm<ResetPasswordFormInterface>();
  const { open } = modalStore;

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = ({ email }: ResetPasswordFormInterface) => {
    handleResetAttempt(async () => {
      const auth = getAuth();

      await sendPasswordResetEmail(auth, email);

      open(ResetPasswordModal);
    }, setFormError);
  };

  return {
    methods,
    formError,
    isSubmitting,
    onSubmit,
    handleSubmit,
  };
};
