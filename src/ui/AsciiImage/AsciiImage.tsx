const defaultPreStyle: React.CSSProperties = {
  fontFamily: 'monospace',
  lineHeight: '1.1',
  whiteSpace: 'pre',
};

interface AsciiImageProps {
  src: string;
  style?: React.CSSProperties;
}

export const AsciiImage = ({ src, style = defaultPreStyle }: AsciiImageProps) => {
  return <pre style={style}>{src}</pre>;
};
