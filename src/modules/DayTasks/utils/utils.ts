import dayjs from 'dayjs';

export const getDayTaskLabel = (selectedDate: string) => {
  const hasOtherYear = dayjs(selectedDate, 'D-MM-YYYY').year() !== dayjs().year();

  const formattedDate = dayjs(selectedDate, 'D-MM-YYYY').format(
    hasOtherYear ? 'D MMMM YYYY' : 'D MMMM',
  );

  return `Задачи на ${formattedDate}`;
};
