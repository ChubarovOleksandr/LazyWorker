import { ForwardRefExoticComponent, RefAttributes, useState } from 'react';
import { Text, TextProps } from '@radix-ui/themes';
import { Minus, Plus } from 'lucide-react';
import { Accordion } from 'radix-ui';

import { isExist } from '@utils/format';

import './accordionBlock.scss';

interface AccordionBlockInterface {
  itemValue: string;
  triggerLabel: string;
  triggerStyle?: ForwardRefExoticComponent<TextProps & RefAttributes<HTMLSpanElement>>;
  openByDefault?: boolean;
  children: React.ReactElement | string;
}

export const AccordionBlock = ({
  itemValue,
  triggerLabel,
  openByDefault,
  children,
  triggerStyle,
}: AccordionBlockInterface) => {
  const [isOpen, setIsOpen] = useState<boolean>(openByDefault);

  return (
    <Accordion.Root
      type="single"
      collapsible
      className="accordionRoot"
      onValueChange={value => setIsOpen(value === itemValue)}
      defaultValue={isExist(openByDefault) ? itemValue : null}
    >
      <Accordion.Item value={itemValue} className="accordionItem">
        <Accordion.Trigger className="accordionTrigger">
          {isOpen ? (
            <Minus width={18} height={18} color="gray" />
          ) : (
            <Plus width={18} height={18} color="gray" />
          )}
          <Text size={'4'} {...triggerStyle}>
            {triggerLabel}
          </Text>
        </Accordion.Trigger>
        <Accordion.Content>{children}</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
