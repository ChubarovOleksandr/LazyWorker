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
  const deleteSuggestion = (suggestion: string) => {
    const updatedHistory = searchHistory.filter(item => item !== suggestion);
    setSearchHistory(updatedHistory);
  };

  return (
    isOpen && (
      <Flex className="global-search__suggestions" direction="column" gap="1">
        {isArray(searchHistory) &&
          searchHistory.map(suggestion => (
            <Flex
              key={suggestion}
              className="global-search__suggestion"
              align={'center'}
              justify={'between'}
            >
              {suggestion}
              <DeleteIcon
                className="global-search__delete-btn"
                onClick={() => deleteSuggestion(suggestion)}
              />
            </Flex>
          ))}
      </Flex>
    )
  );
};
