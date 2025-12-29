import { InfinitySpin } from 'react-loader-spinner';
import { Flex } from '@radix-ui/themes';

interface LoaderProps {
  color?: string;
  width?: number;
  height?: number;
}

export const Loader = ({ color = '#2F2F2F', width = 200, height = 200 }: LoaderProps) => {
  return <InfinitySpin color={color} width={width} height={height} />;
};

export const PageLoader = () => {
  return (
    <Flex
      justify={'center'}
      align={'center'}
      style={{
        height: '100dvh',
        width: '100%',
      }}
    >
      <Loader />
    </Flex>
  );
};
