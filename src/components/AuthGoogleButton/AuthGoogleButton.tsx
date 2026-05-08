import { Button } from '@radix-ui/themes';

import { GoogleIcon } from '@ui/GoogleIcon/GoogleIcon.tsx';
import { OnEventTypeEmpty } from '@interfaces/utils/onEventTypeEmpty.ts';

import './styles.scss';

interface AuthGoogleButtonProps {
  label: string;
  callback: OnEventTypeEmpty;
  isSubmitting: boolean;
}

const ICON_SIZE = '24';

export const AuthGoogleButton = ({ label, isSubmitting, callback }: AuthGoogleButtonProps) => (
  <Button
    mt="4"
    size="3"
    className="google-btn"
    type="button"
    onClick={callback}
    disabled={isSubmitting}
  >
    <GoogleIcon width={ICON_SIZE} height={ICON_SIZE} />
    <span>{label}</span>
  </Button>
);
