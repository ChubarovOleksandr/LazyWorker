import { Flex } from '@radix-ui/themes';

import { GlobalSearch } from '@modules/GlobalSearch';
import { AsciiImage } from '@ui/AsciiImage/AsciiImage';

import { AsciiImages } from '../../assets/images/AsciiImages';

import './styles/searchPage.scss';

export const SearchPage = () => {
  return (
    <Flex className="searchPage" justify={'center'} align={'center'} direction={'column'} gap={'6'}>
      <GlobalSearch />
      <AsciiImage src={AsciiImages.earth} />
    </Flex>
  );
};
