import { AsciiImages } from '@assets/images/AsciiImages';

import { getRandomKey } from '@utils/get-random-key';

const defaultPreStyle: React.CSSProperties = {
  fontFamily: 'monospace',
  lineHeight: '1.1',
  whiteSpace: 'pre',
};

interface AsciiImageProps {
  src?: string;
  style?: React.CSSProperties;
  random?: boolean;
}

export const AsciiImage = ({ src, style = defaultPreStyle, random = false }: AsciiImageProps) => (
  <pre style={style}>{random ? AsciiImages[getRandomKey(AsciiImages)] : src}</pre>
);
