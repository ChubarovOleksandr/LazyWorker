import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@radix-ui/themes';

import { AuthGoogleButton } from '@components/AuthGoogleButton/AuthGoogleButton.tsx';
import { TextField } from '@components/TextField/TextField';
import { FormError } from '@ui/FormError/FormError';
import { formConfig } from '@configs/formConfig';

import { SignUpFieldsEnum } from '../enum/enum';
import { useSignUp } from '../hooks/useSignUp';
import { SignUpFormInterface } from '../interface/interface';

import '../styles/signUpForm.scss';

// TODO ADD SECOND PASSWORD FIELD AND CHECK ON EQUALITY
// OR ADD GENERATING STRONG PASSWORD USING getASecureRandomPassword()

export const SignUpForm = () => {
  const methods = useForm<SignUpFormInterface>();

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const { formError, defaultSignUp, signUpWithGoogle } = useSignUp();

  return (
    <FormProvider {...methods}>
      <FormError error={formError} />
      <form onSubmit={handleSubmit(defaultSignUp)}>
        <TextField
          name={SignUpFieldsEnum.Email}
          label="Почта"
          type="email"
          required
          minLength={formConfig.email.minLength}
          maxLength={formConfig.email.maxLength}
          placeholder="Введите вашу почту"
        />
        <TextField
          name={SignUpFieldsEnum.Password}
          label="Пароль"
          required
          minLength={formConfig.password.minLength}
          maxLength={formConfig.password.maxLength}
          placeholder="Введите ваш пароль"
        />
        <Button
          mt="4"
          size="3"
          className="sign-up__submit-btn"
          loading={isSubmitting}
          type="submit"
        >
          Создать аккаунт
        </Button>
        <AuthGoogleButton
          label=" Зарегистрироваться c Google"
          callback={signUpWithGoogle}
          isSubmitting={isSubmitting}
        />
      </form>
    </FormProvider>
  );
};
