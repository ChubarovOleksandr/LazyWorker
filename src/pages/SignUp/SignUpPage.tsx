import { Flex } from '@radix-ui/themes';

import { SignUpForm } from '@modules/SignUp';
import { FormTitles } from '@ui/FormTitles/FormTitles';
import { Link } from '@ui/Link/Link';
import { RoutesEnum } from '@enums/routes';

const SignUpPage = () => (
  <Flex justify="center" align="center" direction="column" className="sign-up">
    <FormTitles
      mainLabel="Регистрация"
      secondLabel="Рады вас видеть! Пожалуйста введите ваши данные"
    />

    <SignUpForm />

    <Link to={RoutesEnum.SignIn} linkStyles={{ marginTop: '20px' }} textProps={{ size: '3' }}>
      Уже есть аккаунт? <b>Авторизуйтесь</b>
    </Link>
  </Flex>
);

export default SignUpPage;
