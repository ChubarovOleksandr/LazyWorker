import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Dialog, Flex, Text } from '@radix-ui/themes';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

import { TextField } from '@components/TextField/TextField';
import { FormError } from '@ui/FormError/FormError';
import { FormTitles } from '@ui/FormTitles/FormTitles';
import { Link } from '@ui/Link/Link';
import { formConfig } from '@configs/formConfig';
import { RoutesEnum } from '@enums/routes';

import { ResetPasswordFieldsEnum } from '../enum/enum';
import { ResetPasswordFormInterface } from '../interface/interface';
import { handleResetAttempt } from '../utils/utils';

import '../style/resetPasswordForm.scss';

export const ResetPasswordForm = () => {
  const [formError, setFormError] = useState<string>();
  const [isEmailSend, setIsEmailSend] = useState(false);

  const methods = useForm<ResetPasswordFormInterface>();

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = ({ email }: ResetPasswordFormInterface) => {
    handleResetAttempt(async () => {
      const auth = getAuth();

      await sendPasswordResetEmail(auth, email);
      setIsEmailSend(true);
    }, setFormError);
  };

  return (
    <Flex align={'center'} justify={'center'} direction={'column'} className="reset-password">
      <Dialog.Root open={isEmailSend} defaultOpen={false}>
        <Dialog.Content>
          <Flex justify={'center'} align={'start'} direction={'column'}>
            <Text>
              Письмо успешно отправлено. В случае, если письмо не пришло, проверьте "Спам"
            </Text>
            <Button color="gray" highContrast mt={'4'} size={'3'} style={{ alignSelf: 'flex-end' }}>
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

      <FormTitles
        mainLabel="Сброс пароля"
        secondLabel="На почту будет отправлено письмо с инструкциями"
      />
      <FormError error={formError} />

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            required
            type="email"
            label="Почта"
            placeholder="Введите вашу почту"
            name={ResetPasswordFieldsEnum.Email}
            minLength={formConfig.email.minLength}
            maxLength={formConfig.email.maxLength}
          />
          <Button
            mt={'4'}
            size={'3'}
            loading={isSubmitting}
            type="submit"
            color="gray"
            highContrast
            className="reset-password__send-btn"
          >
            Отправить
          </Button>
        </form>
      </FormProvider>
      <Link
        to={RoutesEnum.SignIn}
        textProps={{ size: '2', weight: 'bold' }}
        linkStyles={{ marginTop: '16px' }}
        label="Вернуться"
      />
    </Flex>
  );
};
