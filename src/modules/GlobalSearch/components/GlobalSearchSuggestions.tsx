import { Flex } from '@radix-ui/themes';
import { DeleteIcon } from 'lucide-react';

import { isArray } from '../../../utils/format';

interface GlobalSearchSuggestionsProps {
  isOpen: boolean;
  searchHistory: string[];
  setSearchHistory: (history: string[]) => void;
}

export const GlobalSearchSuggestions = ({
  isOpen,
  searchHistory,
  setSearchHistory,
}: GlobalSearchSuggestionsProps) => {
  const deleteSuggestion = (e: React.MouseEvent<SVGSVGElement>, suggestion: string) => {
    e.stopPropagation();
    const updatedHistory = searchHistory.filter(item => item !== suggestion);
    setSearchHistory(updatedHistory);
  };

  const handleSuggestionClick = (suggestion: string) => {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(suggestion)}`;
  };

  return (
    isOpen && (
      <Flex className="global-search__suggestions" direction="column" gap="1">
        {isArray(searchHistory) &&
          searchHistory.map(suggestion => (
            <Flex
              key={suggestion}
              className="global-search__suggestion"
              align="center"
              justify="between"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
              <DeleteIcon
                className="global-search__delete-btn"
                onClick={e => deleteSuggestion(e, suggestion)}
              />
            </Flex>
          ))}
      </Flex>
    )
  );
};
