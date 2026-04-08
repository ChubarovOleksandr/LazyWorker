import { SearchIcon } from 'lucide-react';

import { SetStateType } from '@interfaces/utils/setStateType';
import { createClassName } from '@utils/create-class-name';
import { isString } from '@utils/format';

import { updateRequestHistory } from '../utils/utils';

interface GlobalSearchInputProps {
  searchText: string;
  setSearchText: (text: string) => void;
  isSuggestionsOpen: boolean;
  setIsSuggestionsOpen: SetStateType<boolean>;
}

export const GlobalSearchInput = ({
  searchText,
  setSearchText,
  isSuggestionsOpen,
  setIsSuggestionsOpen,
}: GlobalSearchInputProps) => {
  const isInputNotEmpty = isString(searchText.trim());

  const onSearch = () => {
    updateRequestHistory(searchText);
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`;
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && isInputNotEmpty) {
      onSearch();
    }
  };

  return (
    <label className="global-search__label">
      <input
        autoFocus
        type="text"
        value={searchText}
        onKeyDown={onKeyDown}
        onFocus={() => setIsSuggestionsOpen(true)}
        onChange={e => setSearchText(e.target.value)}
        className={createClassName({
          condition: isSuggestionsOpen,
          value: 'isOpen',
        })}
      />
      <button className="global-search__find-btn" onClick={onSearch} disabled={!isInputNotEmpty}>
        <SearchIcon />
      </button>
    </label>
  );
};
