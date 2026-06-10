import { Flex } from '@radix-ui/themes';

import { settingsStore } from '@store/settingsStore.ts';
import { CurrentTime } from '@modules/CurrentTime';
import { GlobalSearch } from '@modules/GlobalSearch';
import { AsciiImage } from '@ui/AsciiImage/AsciiImage.tsx';

const SearchPage = () => {
  const {
    userSettings: { shouldShowASCIIOnSearchPage, shouldShowTimeOnSearchPage },
  } = settingsStore;

  return (
    <Flex justify="center" align="center" direction="column" gap="40px" width="100%">
      <GlobalSearch />
      {shouldShowTimeOnSearchPage && <CurrentTime />}
      {shouldShowASCIIOnSearchPage && <AsciiImage random />}
    </Flex>
  );
};

export default SearchPage;
