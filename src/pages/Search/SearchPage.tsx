import { Flex } from '@radix-ui/themes';

import { GlobalSearch } from '@modules/GlobalSearch';
import { AsciiImage } from '@ui/AsciiImage/AsciiImage';

import './styles/searchPage.scss';

const SearchPage = () => (
  <Flex className="searchPage" justify="center" align="center" direction="column" gap="50px">
    <GlobalSearch />
    <AsciiImage random />
  </Flex>
);

export default SearchPage;
