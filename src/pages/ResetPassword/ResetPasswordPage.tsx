import { Flex } from '@radix-ui/themes';

import { ResetPasswordForm } from '@modules/ResetPassword';
import { FormTitles } from '@ui/FormTitles/FormTitles';
import { Link } from '@ui/Link/Link';
import { RoutesEnum } from '@enums/routes.enum';

const ResetPasswordPage = () => (
  <Flex align="center" justify="center" direction="column" className="reset-password">
    <FormTitles
      mainLabel="Сброс пароля"
      secondLabel="На почту будет отправлено письмо с инструкциями"
    />

    <ResetPasswordForm />

    <Link
      to={RoutesEnum.SignIn}
      textProps={{ size: '2', weight: 'bold' }}
      linkStyles={{ marginTop: '16px' }}
      label="Вернуться"
    />
  </Flex>
);

export default ResetPasswordPage;
