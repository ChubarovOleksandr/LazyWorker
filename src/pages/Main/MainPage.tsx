import { useSearchParams } from 'react-router-dom';

import { Calendar } from '@modules/Calendar';
import { DayTasks } from '@modules/DayTasks';
import { Upcoming } from '@modules/Upcoming';
import { SearchParamsEnum } from '@enums/search-params.enum';

import './mainPage.scss';

const MainPage = () => {
  const [searchParams] = useSearchParams();

  const isSelectedDate = searchParams.get(SearchParamsEnum.SelectedDate);

  return (
    <div className="mainPage">
      <Calendar />
      {isSelectedDate ? <DayTasks /> : <Upcoming />}
    </div>
  );
};

export default MainPage;
