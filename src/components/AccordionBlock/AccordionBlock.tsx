import { ForwardRefExoticComponent, RefAttributes, useState } from 'react';
import { Text, TextProps } from '@radix-ui/themes';
import { Minus, Plus, X } from 'lucide-react';
import { Accordion } from 'radix-ui';

import { OnEventTypeEmpty } from '@interfaces/utils/onEventTypeEmpty';

import './accordionBlock.scss';

interface AccordionBlockInterface {
  triggerLabel: string;
  triggerStyle?: ForwardRefExoticComponent<TextProps & RefAttributes<HTMLSpanElement>>;
  openByDefault?: boolean;
  children: React.ReactElement | string;
  canClose?: boolean;
  onClose?: OnEventTypeEmpty;
}

const iconSize = { width: 18, height: 18 };
const itemValue = 'accordion-item';

export const AccordionBlock = ({
  triggerLabel,
  openByDefault,
  children,
  triggerStyle,
  canClose = false,
  onClose,
}: AccordionBlockInterface) => {
  const [isOpen, setIsOpen] = useState<boolean>(openByDefault);

  return (
    <Accordion.Root
      type="single"
      collapsible
      className="accordion__root"
      onValueChange={value => setIsOpen(value === itemValue)}
      defaultValue={openByDefault ? itemValue : null}
    >
      <Accordion.Item value={itemValue} className="accordion__item">
        <Accordion.Trigger className="accordion__trigger">
          {isOpen ? (
            <Minus width={iconSize.width} height={iconSize.height} color="gray" />
          ) : (
            <Plus width={iconSize.width} height={iconSize.height} color="gray" />
          )}
          <Text size="4" {...triggerStyle}>
            {triggerLabel}
          </Text>
          {canClose ? (
            <X
              className="accordion__close-btn"
              width={iconSize.width}
              height={iconSize.height}
              color="gray"
              onClick={onClose}
            />
          ) : null}
        </Accordion.Trigger>
        <Accordion.Content>{children}</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
