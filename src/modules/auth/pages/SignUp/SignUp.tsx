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

import { useSignUp } from './hooks/useSignUp';
import { SignUpFieldsEnum } from './enum';
import { SignUpFormInterface } from './interface';

import './signUp.scss';

export const SignUp = () => {
  const [formError, setFormError] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormInterface>();

  const { defaultSignUp, signUpWithGoogle } = useSignUp({ setFormError });

  return (
    <Flex justify={'center'} align={'center'} direction={'column'} className="sign-up">
      <FormTitle
        mainLabel="Регистрация"
        secondLabel="Рады вас видеть! Пожалуйста введите ваши данные"
      />
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
          register={register}
        />
        <TextField
          name={SignUpFieldsEnum.Password}
          label="Пароль"
          required
          minLength={formConfig.password.minLength}
          maxLength={formConfig.password.maxLength}
          placeholder="Введите ваш пароль"
          register={register}
        />
        <Button
          mt={'4'}
          size={'3'}
          className="sign-up__submit-btn"
          loading={isSubmitting}
          type="submit"
        >
          Создать аккаунт
        </Button>
        <Button
          mt={'4'}
          size={'3'}
          type="button"
          onClick={signUpWithGoogle}
          disabled={isSubmitting}
          className="sign-up__google-btn"
        >
          <GoogleIcon width="24" height="24" />
          <Text color="gray" highContrast>
            Зарегистрироваться
          </Text>
        </Button>
      </form>

      <Link
        to={`${RoutesEnum.Auth}/${RoutesEnum.SignIn}`}
        linkStyles={{ marginTop: '20px' }}
        textProps={{ size: '3' }}
      >
        Уже есть аккаунт? <b>Авторизуйтесь</b>
      </Link>
    </Flex>
  );
};
