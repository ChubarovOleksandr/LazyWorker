import { Flex } from '@radix-ui/themes';

import { GlobalSearch } from '@modules/GlobalSearch';
import { AsciiImage } from '@ui/AsciiImage/AsciiImage';

const SearchPage = () => (
  <Flex justify="center" align="center" direction="column" gap="50px" width='100%'>
    <GlobalSearch />
    <AsciiImage random />
  </Flex>
);

export default SearchPage;
