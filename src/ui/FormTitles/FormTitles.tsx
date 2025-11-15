import { Heading } from '@radix-ui/themes';

interface FormTitleProps {
  mainLabel: string;
  secondLabel: string;
}

export const FormTitles = ({ mainLabel, secondLabel }: FormTitleProps) => {
  return (
    <>
      <Heading as="h1" size={'7'} align="center" mb={'4'}>
        {mainLabel}
      </Heading>
      <Heading as="h2" size={'3'} color="gray" mb={'5'}>
        {secondLabel}
      </Heading>
    </>
  );
};
