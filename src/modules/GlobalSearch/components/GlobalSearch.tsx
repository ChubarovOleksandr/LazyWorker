import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { isEmptyString } from '@utils/format';

import { globalSearchStore } from '../store/globalSearchStore';
import { findSuggestionsByText, getRequestHistory } from '../utils/utils';

import { GlobalSearchInput } from './GlobalSearchInput';
import { GlobalSearchSuggestions } from './GlobalSearchSuggestions';

import '../styles/globalSearch.scss';

export const GlobalSearch = observer(() => {
  const { searchHistory, searchText, setSearchText, setSearchHistory } = globalSearchStore;
  const filteredHistory = findSuggestionsByText(searchHistory, searchText);

  useEffect(() => {
    setSearchHistory(getRequestHistory());
  }, []);

  return (
    <div className="global-search">
      <GlobalSearchInput searchText={searchText} setSearchText={setSearchText} />
      <GlobalSearchSuggestions
        isOpen={!isEmptyString(searchText)}
        searchHistory={filteredHistory}
        setSearchHistory={setSearchHistory}
      />
    </div>
  );
});
