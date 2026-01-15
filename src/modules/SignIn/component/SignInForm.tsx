import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Flex, Text } from '@radix-ui/themes';

import { TextField } from '@components/TextField/TextField';
import { FormError } from '@ui/FormError/FormError';
import { FormTitles } from '@ui/FormTitles/FormTitles';
import { GoogleIcon } from '@ui/GoogleIcon/GoogleIcon';
import { Link } from '@ui/Link/Link';
import { formConfig } from '@configs/formConfig';
import { RoutesEnum } from '@enums/routes';

import { SignInFieldsEnum } from '../enum/enum';
import { useSignIn } from '../hooks/useSignIn';
import { SignInFormInterface } from '../interface/interface';

import '../styles/signInForm.scss';

export const SignInForm = () => {
  const [formError, setFormError] = useState<string>();

  const methods = useForm<SignInFormInterface>();

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const { defaultSignIn, signInWithGoogle } = useSignIn({ setFormError });

  return (
    <Flex justify={'center'} align={'center'} direction="column" className="sign-in">
      <FormTitles mainLabel="Вход" secondLabel="С возвращением! Пожалуйста введите ваши данные" />
      <FormError error={formError} />

      <FormProvider {...methods}>
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
              Авторизоваться с Google
            </Text>
          </Button>
        </form>
      </FormProvider>
      <Link to={RoutesEnum.SignUp} linkStyles={{ marginTop: '20px' }} textProps={{ size: '3' }}>
        Нет аккаунта? <b>Создайте новый</b>
      </Link>
    </Flex>
  );
};
