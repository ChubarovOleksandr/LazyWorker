import { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { useHandleClickOutside } from '@hooks/useHandleClickOutside';
import { isNotEmptyArray } from '@utils/format.ts';

import { globalSearchStore } from '../store/globalSearchStore';
import { findSuggestionsByText, getRequestHistory } from '../utils/utils';

import { GlobalSearchInput } from './GlobalSearchInput';
import { GlobalSearchSuggestions } from './GlobalSearchSuggestions';

import '../styles/globalSearch.scss';

export const GlobalSearch = observer(() => {
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const globalSearchRef = useRef(null);

  const { searchHistory, searchText, setSearchText, setSearchHistory } = globalSearchStore;
  const filteredHistory = findSuggestionsByText(searchHistory, searchText);

  useEffect(() => {
    setSearchHistory(getRequestHistory());
  }, []);

  useHandleClickOutside({
    ref: globalSearchRef,
    callback: () => setIsSuggestionsOpen(false),
  });

  return (
    <div className="global-search" ref={globalSearchRef}>
      <GlobalSearchInput
        searchText={searchText}
        setSearchText={setSearchText}
        setIsSuggestionsOpen={setIsSuggestionsOpen}
        isSuggestionsOpen={isSuggestionsOpen && isNotEmptyArray(filteredHistory)}
      />
      <GlobalSearchSuggestions
        isOpen={isSuggestionsOpen}
        searchHistory={filteredHistory}
        setSearchHistory={setSearchHistory}
      />
    </div>
  );
});
