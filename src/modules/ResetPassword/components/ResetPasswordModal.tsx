import { Button, Dialog, Flex, Text } from '@radix-ui/themes';

import { ModalComponentProps } from '@store/modalStore/interface';
import { Link } from '@ui/Link/Link';
import { RoutesEnum } from '@enums/routes';

export const ResetPasswordModal = ({ resolve }: ModalComponentProps) => (
  <Dialog.Root defaultOpen>
    <Dialog.Content>
      <Flex justify={'center'} align={'start'} direction={'column'}>
        <Dialog.Title style={{ display: 'none' }}>Письмо отправлено</Dialog.Title>
        <Text>Письмо успешно отправлено. В случае, если письмо не пришло, проверьте "Спам"</Text>
        <Button
          color="gray"
          onClick={() => resolve()}
          highContrast
          mt={'4'}
          size={'3'}
          style={{ alignSelf: 'flex-end' }}
        >
          <Link
            to={RoutesEnum.SignIn}
            textProps={{ size: '2', weight: 'bold' }}
            linkStyles={{ color: '#fff' }}
            label="Вернуться"
          />
        </Button>
      </Flex>
    </Dialog.Content>
  </Dialog.Root>
);
