import { JSX } from 'react';
import { Flex, Tabs as RadixTabs } from '@radix-ui/themes';

import './tabs.scss';

interface TabInterface {
  icon: JSX.Element;
  title: string;
  value: string;
  component: JSX.Element;
}

interface TabsProps {
  items: TabInterface[];
  defaultValue?: string;
}

export const Tabs = ({ items, defaultValue }: TabsProps) => (
  <RadixTabs.Root className="tabs" defaultValue={defaultValue}>
    <RadixTabs.List color="gray" className="tabs__title">
      {items.map(item => (
        <RadixTabs.Trigger value={item.value} key={item.value}>
          <Flex align="center" gap="1">
            {item.icon}
            {item.title}
          </Flex>
        </RadixTabs.Trigger>
      ))}
    </RadixTabs.List>
    {items.map(item => (
      <RadixTabs.Content value={item.value} key={item.value}>
        {item.component}
      </RadixTabs.Content>
    ))}
  </RadixTabs.Root>
);
