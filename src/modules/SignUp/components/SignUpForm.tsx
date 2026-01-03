import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Flex, Text } from '@radix-ui/themes';

import { FormError } from '@ui/FormError/FormError';
import { FormTitles } from '@ui/FormTitles/FormTitles';
import { GoogleIcon } from '@ui/GoogleIcon/GoogleIcon';
import { Link } from '@ui/Link/Link';
import { TextField } from '@ui/TextField/TextField';
import { formConfig } from '@configs/formConfig';
import { RoutesEnum } from '@enums/routes';

import { SignUpFieldsEnum } from '../enum/enum';
import { useSignUp } from '../hooks/useSignUp';
import { SignUpFormInterface } from '../interface/interface';

import '../styles/signUpForm.scss';

// TODO ADD SECOND PASSWORD FIELD AND CHECK ON EQUALITY
// OR ADD GENERATING STRONG PASSWORD USING getASecureRandomPassword()

export const SignUpForm = () => {
  const [formError, setFormError] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormInterface>();

  const { defaultSignUp, signUpWithGoogle } = useSignUp({ setFormError });

  return (
    <Flex justify={'center'} align={'center'} direction={'column'} className="sign-up">
      <FormTitles
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
            Зарегистрироваться c Google
          </Text>
        </Button>
      </form>

      <Link to={RoutesEnum.SignIn} linkStyles={{ marginTop: '20px' }} textProps={{ size: '3' }}>
        Уже есть аккаунт? <b>Авторизуйтесь</b>
      </Link>
    </Flex>
  );
};
