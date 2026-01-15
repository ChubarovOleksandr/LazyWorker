import { useNavigate } from 'react-router-dom';
import { Button, Flex, Text } from '@radix-ui/themes';

export const ComingSoonPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
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
      <Button color="gray" highContrast onClick={goBack}>
        Вернуться
      </Button>
    </Flex>
  );
};
