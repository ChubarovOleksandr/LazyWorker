import { Calendar } from '@modules/Calendar';
import { Upcoming } from '@modules/Upcoming';

import './styles/mainPage.scss';

const MainPage = () => (
  <div className="mainPage">
    <Calendar />
    <Upcoming />
  </div>
);

export default MainPage;
