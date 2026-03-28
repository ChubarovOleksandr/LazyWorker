import { FormProvider, useForm } from 'react-hook-form';
import { Button, Text } from '@radix-ui/themes';

import { TextField } from '@components/TextField/TextField';
import { FormError } from '@ui/FormError/FormError';
import { GoogleIcon } from '@ui/GoogleIcon/GoogleIcon';
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
        <Button
          mt="4"
          size="3"
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
    </FormProvider>
  );
};
