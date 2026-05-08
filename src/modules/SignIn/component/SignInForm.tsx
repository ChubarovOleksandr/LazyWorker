import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@radix-ui/themes';

import { AuthGoogleButton } from '@components/AuthGoogleButton/AuthGoogleButton.tsx';
import { TextField } from '@components/TextField/TextField';
import { FormError } from '@ui/FormError/FormError';
import { Link } from '@ui/Link/Link';
import { formConfig } from '@configs/formConfig';
import { RoutesEnum } from '@enums/routes.enum';

import { SignInFieldsEnum } from '../enum/enum';
import { useSignIn } from '../hooks/useSignIn';
import { SignInFormInterface } from '../interface/interface';

import '../styles/signInForm.scss';

export const SignInForm = () => {
  const methods = useForm<SignInFormInterface>();

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const { formError, defaultSignIn, signInWithGoogle } = useSignIn();

  return (
    <FormProvider {...methods}>
      <FormError error={formError} />
      <form onSubmit={handleSubmit(defaultSignIn)}>
        <TextField
          name={SignInFieldsEnum.Email}
          label="Почта"
          type="email"
          required
          minLength={formConfig.email.minLength}
          maxLength={formConfig.email.maxLength}
          placeholder="Введите вашу почту"
        />
        <TextField
          name={SignInFieldsEnum.Password}
          type="password"
          label="Пароль"
          required
          minLength={formConfig.password.minLength}
          maxLength={formConfig.password.maxLength}
          placeholder="Введите ваш пароль"
        />
        <Link
          to={RoutesEnum.ResetPassword}
          className="sign-in__forget-link"
          textProps={{ size: '2', weight: 'bold' }}
          label="Забыл пароль"
        />
        <Button
          mt="4"
          size="3"
          className="sign-in__submit-btn"
          loading={isSubmitting}
          type="submit"
        >
          Войти
        </Button>
        <AuthGoogleButton
          label="Авторизоваться с Google"
          callback={signInWithGoogle}
          isSubmitting={isSubmitting}
        />
      </form>
    </FormProvider>
  );
};
