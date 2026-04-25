export const detectLanguage = (text: string) => {
  if (/[a-zA-Z]/.test(text)) return 'en';
  if (/[а-яА-Я]/.test(text)) return 'ru';
  return null;
};
