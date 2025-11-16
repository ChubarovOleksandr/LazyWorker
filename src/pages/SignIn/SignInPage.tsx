import { Flex } from '@radix-ui/themes';

import { SignInForm } from '@modules/SignIn';

export const SignInPage = () => {
  return (
    <Flex justify={'center'} align={'center'} style={{ height: '100vh' }}>
      <SignInForm />
    </Flex>
  );
};
