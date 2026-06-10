import { SearchPageStylization } from '@modules/Stylization/components/SearchPageStylization.tsx';
import { SelectTheme } from '@modules/Stylization/components/SelectTheme.tsx';

import '../styles/stylization.scss';

export const Stylization = () => (
  <div className="stylization">
    <SelectTheme />
    <SearchPageStylization />
  </div>
);
