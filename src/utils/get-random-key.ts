export const getRandomKey = <T>(obj: object): keyof T => {
  const keys = Object.keys(obj);

  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomKey = keys[randomIndex];

  return randomKey as keyof T;
};
