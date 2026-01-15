import { SearchIcon } from 'lucide-react';

import { createClassName } from '@utils/create-class-name';
import { isEmptyString } from '@utils/format';

import { updateRequestHistory } from '../utils/utils';

interface GlobalSearchInputProps {
  searchText: string;
  setSearchText: (text: string) => void;
}

export const GlobalSearchInput = ({ searchText, setSearchText }: GlobalSearchInputProps) => {
  const onSearch = () => {
    updateRequestHistory(searchText);
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`;
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
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
        onChange={e => setSearchText(e.target.value)}
        className={createClassName({
          condition: !isEmptyString(searchText),
          value: 'isNotEmpty',
        })}
      />
      <button className="global-search__find-btn" onClick={onSearch}>
        <SearchIcon />
      </button>
    </label>
  );
};
