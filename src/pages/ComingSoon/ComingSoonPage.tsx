import { useNavigate } from 'react-router-dom';
import { Button, Flex, Text } from '@radix-ui/themes';
import { getAuth } from 'firebase/auth';

import { RoutesEnum } from '@enums/routes';
import { isExist } from '@utils/format';

export const ComingSoonPage = () => {
  const navigate = useNavigate();
  const { currentUser } = getAuth();

  const handleReturn = () => {
    navigate(isExist(currentUser) ? RoutesEnum.Main : RoutesEnum.SignIn);
  };

  return (
    <Flex
      justify={'center'}
      align={'center'}
      direction={'column'}
      style={{ height: '100vh' }}
      gap={'4'}
    >
      <Text size={'5'}>Страница находится в разработке. Скоро она будет доступна!</Text>
      <Button color="gray" highContrast onClick={handleReturn}>
        Вернуться
      </Button>
    </Flex>
  );
};
