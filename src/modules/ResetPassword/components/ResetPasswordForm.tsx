import { FormProvider } from 'react-hook-form';
import { Button } from '@radix-ui/themes';

import { TextField } from '@components/TextField/TextField';
import { FormError } from '@ui/FormError/FormError';
import { formConfig } from '@configs/formConfig';

import { ResetPasswordFieldsEnum } from '../enum/enum';
import { useResetPassword } from '../hooks/useResetPassword';

import '../style/resetPasswordForm.scss';

export const ResetPasswordForm = () => {
  const { isSubmitting, formError, methods, handleSubmit, onSubmit } = useResetPassword();

  return (
    <FormProvider {...methods}>
      <FormError error={formError} />
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
          mt="4"
          size="3"
          loading={isSubmitting}
          type="submit"
          highContrast
          className="reset-password__send-btn"
        >
          Отправить
        </Button>
      </form>
    </FormProvider>
  );
};
