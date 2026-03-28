import { isExist, isString } from './format';

const authErrorMap: Record<string, string> = {
  'auth/user-cancelled': 'Вход отменен пользователем.',
  'auth/invalid-email': 'Неверный формат электронной почты.',
  'auth/user-disabled': 'Учетная запись отключена.',
  'auth/invalid-credential': 'Неверный логин или пароль.',
  'auth/user-not-found': 'Пользователь с таким email не найден.',
  'auth/wrong-password': 'Неверный пароль.',
  'auth/popup-closed-by-user': 'Всплывающее окно входа было закрыто.',
  'auth/cancelled-popup-request': 'Запрос входа был отменен.',
  'auth/popup-blocked': 'Всплывающее окно было заблокировано браузером.',
  'auth/too-many-requests': 'Слишком много попыток. Попробуйте позже.',
  'auth/network-request-failed': 'Проблемы с сетью. Проверьте подключение и попробуйте снова.',
  'auth/email-already-in-use': 'Этот email уже зарегистрирован.',
  'auth/weak-password': 'Пароль должен содержать минимум 6 символов.',
  'auth/missing-email': 'Введите email для восстановления доступа.',
  'auth/operation-not-allowed': 'Операция авторизации не разрешена.',
  'auth/internal-error': 'Внутренняя ошибка сервера. Повторите попытку позже.',
};

export const getAuthErrorMessage = (
  error: unknown,
  fallback = 'Произошла ошибка при авторизации.',
): string => {
  if (!isExist(error)) {
    return fallback;
  }

  if (isString(error)) {
    return error;
  }

  const parsedError = error as { code?: string; message?: unknown };
  const code = parsedError.code;
  const message = parsedError.message;

  if (code && authErrorMap[code]) {
    return authErrorMap[code];
  }

  if (isString(message)) {
    return message;
  }

  return fallback;
};
