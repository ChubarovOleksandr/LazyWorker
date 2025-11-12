import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Flex } from '@radix-ui/themes';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import { FormError } from '@modules/auth/components/FormError';
import { FormTitle } from '@modules/auth/components/FormTitle';
import { formConfig } from '@configs/formConfig';
import { RoutesEnum } from '@enums/routes';
import { getSafetyString } from '@utils/get-safety-string';

import { TextField } from 'src/ui/inputField/TextField';
import { Link } from 'src/ui/link/Link';

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

  const onSubmit = async ({ email, password }: SignUpFormInterface) => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
    } catch (responseError: any) {
      setFormError(getSafetyString(responseError?.message));
    }
  };

  return (
    <Flex justify={'center'} align={'center'} direction={'column'} className="sign-up">
      <FormTitle
        mainLabel="Регистрация"
        secondLabel="Рады вас видеть! Пожалуйста введите ваши данные"
      />
      <FormError error={formError} />

      <form onSubmit={handleSubmit(onSubmit)}>
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
