import { useState } from 'react';
import { Flex, Tabs } from '@radix-ui/themes';

const defaultTabValue = 'Все';

export const CalendarTabs = () => {
  const [selectedTab, setSelectedTab] = useState(defaultTabValue);

  return (
    <Tabs.Root onValueChange={value => setSelectedTab(value)} defaultValue={selectedTab}>
      <Tabs.List className="tabs" color="gray" highContrast size={'1'}>
        <Tabs.Trigger value={defaultTabValue} className="tabs__item">
          <Flex justify={'between'} align={'center'} gap={'1'}>
            {defaultTabValue}
          </Flex>
        </Tabs.Trigger>
        <Tabs.Trigger value="2">Работа</Tabs.Trigger>
        <Tabs.Trigger value="3">Учеба</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
};
