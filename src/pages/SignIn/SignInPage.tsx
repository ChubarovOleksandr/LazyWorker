import { Flex } from '@radix-ui/themes';

import { SignInForm } from '@modules/SignIn';
import { FormTitles } from '@ui/FormTitles/FormTitles';
import { Link } from '@ui/Link/Link';
import { RoutesEnum } from '@enums/routes.enum';

const SignInPage = () => (
  <Flex justify="center" align="center" direction="column" className="sign-in">
    <FormTitles mainLabel="Вход" secondLabel="С возвращением! Пожалуйста введите ваши данные" />

    <SignInForm />

    <Link
      to={RoutesEnum.SignUp}
      className="sign-in__link"
      linkStyles={{ marginTop: '20px' }}
      textProps={{ size: '3' }}
    >
      Нет аккаунта? <b>Создайте новый</b>
    </Link>
  </Flex>
);

export default SignInPage;
