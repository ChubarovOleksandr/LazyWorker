import { InfinitySpin } from 'react-loader-spinner';

interface LoaderProps {
  color?: string;
  width?: number;
  height?: number;
}

export const Loader = ({ color = '#2F2F2F', width = 200, height = 200 }: LoaderProps) => {
  return <InfinitySpin color={color} width={width} height={height} />;
};
