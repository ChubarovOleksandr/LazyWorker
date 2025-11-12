import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import { RoutesEnum } from '@enums/routes';

import { SubmitButton } from 'src/ui/submitButton/SubmitButton';
import { TextField } from 'src/ui/textField/TextField';

import { SignInFieldsEnum } from './enum';
import { SignInFormInterface } from './interface';

import './signIn.scss';

export const SignIn = () => {
  const { handleSubmit } = useForm<SignInFormInterface>();

  const onSubmit = () => {};

  return (
    <div className="sign-in">
      <h1>Вход</h1>
      <h2>С возвращением! Пожалуйста введите ваши данные</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name={SignInFieldsEnum.Email}
          label="Почта"
          required
          placeholder="Введите вашу почту"
        />
        <TextField
          name={SignInFieldsEnum.Password}
          type="password"
          label="Пароль"
          required
          placeholder="Введите ваш пароль"
        />
        <NavLink
          to={`${RoutesEnum.Auth}/${RoutesEnum.ResetPassword}`}
          className="sign-in__forget-link"
        >
          Забыл пароль
        </NavLink>

        <SubmitButton label="Войти" />
      </form>
      <NavLink to={RoutesEnum.SignUp} className="sign-in__sign-up-link">
        Нет аккаунта? <b>Создайте новый</b>
      </NavLink>
    </div>
  );
};
