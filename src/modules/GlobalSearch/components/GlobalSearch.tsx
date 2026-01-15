import { GlobalSearchInput } from './GlobalSearchInput';
import { GlobalSearchSuggestions } from './GlobalSearchSuggestions';

import '../styles/globalSearch.scss';

export const GlobalSearch = () => {
  return (
    <>
      <GlobalSearchInput />
      <GlobalSearchSuggestions />
    </>
  );
};
