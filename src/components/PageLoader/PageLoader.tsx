import { Flex } from '@radix-ui/themes';

import { Loader } from '@ui/Loader/Loader';

export const PageLoader = () => (
  <Flex
    justify="center"
    align="center"
    style={{
      height: '100dvh',
      width: '100%',
    }}
  >
    <Loader />
  </Flex>
);
