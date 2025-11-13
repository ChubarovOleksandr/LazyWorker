import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Flex, Text } from '@radix-ui/themes';

import { FormError } from '@modules/auth/components/FormError';
import { FormTitle } from '@modules/auth/components/FormTitle';
import { GoogleIcon } from '@modules/auth/components/GoogleIcon';
import { formConfig } from '@configs/formConfig';
import { RoutesEnum } from '@enums/routes';

import { TextField } from 'src/ui/inputField/TextField';
import { Link } from 'src/ui/link/Link';

import { useSignIn } from './hooks/useSignIn';
import { SignInFieldsEnum } from './enum';
import { SignInFormInterface } from './interface';

import './signIn.scss';

export const SignIn = () => {
  const [formError, setFormError] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormInterface>();

  const { defaultSignIn, signInWithGoogle } = useSignIn({ setFormError });

  return (
    <Flex justify={'center'} align={'center'} direction="column" className="sign-in">
      <FormTitle mainLabel="Вход" secondLabel="С возвращением! Пожалуйста введите ваши данные" />
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
          register={register}
        />
        <TextField
          name={SignInFieldsEnum.Password}
          type="password"
          label="Пароль"
          required
          minLength={formConfig.password.minLength}
          maxLength={formConfig.password.maxLength}
          placeholder="Введите ваш пароль"
          register={register}
        />
        <Link
          to={`${RoutesEnum.Auth}/${RoutesEnum.ResetPassword}`}
          textProps={{ size: '2', weight: 'bold' }}
          label="Забыл пароль"
        />
        <Button
          mt={'4'}
          size={'3'}
          className="sign-in__submit-btn"
          loading={isSubmitting}
          type="submit"
        >
          Войти
        </Button>
        <Button
          mt="4"
          size="3"
          type="button"
          onClick={signInWithGoogle}
          disabled={isSubmitting}
          className="sign-in__google-btn"
        >
          <GoogleIcon width="24" height="24" />
          <Text color="gray" highContrast>
            Авторизоваться
          </Text>
        </Button>
      </form>
      <Link
        to={`${RoutesEnum.Auth}/${RoutesEnum.SignUp}`}
        linkStyles={{ marginTop: '20px' }}
        textProps={{ size: '3' }}
      >
        Нет аккаунта? <b>Создайте новый</b>
      </Link>
    </Flex>
  );
};
