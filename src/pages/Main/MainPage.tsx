import { Calendar } from '@modules/Calendar';
import { Upcoming } from '@modules/Upcoming';

import './styles/maiPage.scss';

export const MainPage = () => {
  return (
    <div className="mainPage">
      <Calendar />
      <Upcoming />
    </div>
  );
};
