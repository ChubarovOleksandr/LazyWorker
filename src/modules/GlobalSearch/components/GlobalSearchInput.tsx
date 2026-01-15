import { SearchIcon } from 'lucide-react';

export const GlobalSearchInput = () => {
  return (
    <label className="global-search__label">
      <input className="global-search__input" type="text" />
      <SearchIcon />
    </label>
  );
};
