import { Flex } from '@radix-ui/themes';

import { SignUpForm } from '@modules/SignUp';

export const SignUpPage = () => {
  return (
    <Flex justify={'center'} align={'center'} style={{ height: '100vh' }}>
      <SignUpForm />
    </Flex>
  );
};
