import { Flex } from '@radix-ui/themes';

import { ResetPasswordForm } from '@modules/ResetPassword';

export const ResetPasswordPage = () => {
  return (
    <Flex justify={'center'} align={'center'} style={{ height: '100vh' }}>
      <ResetPasswordForm />
    </Flex>
  );
};
