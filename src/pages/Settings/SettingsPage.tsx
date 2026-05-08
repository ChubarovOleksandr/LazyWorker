import { Flex } from '@radix-ui/themes';
import { Bell, Ellipsis, PaintbrushVertical, Shield } from 'lucide-react';

import { Stylization } from '@modules/Stylization';
import { Tabs } from '@components/Tabs/Tabs.tsx';

import './settingsPage.scss';

enum TabsValueEnum {
  Stylization = 'stylization',
  Notifications = 'notifications',
  Security = 'security',
  Other = 'other',
}

const settingsTabs = [
  {
    icon: <PaintbrushVertical size="15px" />,
    title: 'Стилизация',
    value: TabsValueEnum.Stylization,
    component: <Stylization />,
  },
  {
    icon: <Bell size="15px" />,
    title: 'Нотификации',
    value: TabsValueEnum.Notifications,
    component: <div></div>,
  },
  {
    icon: <Shield size="15px" />,
    title: 'Безопасность',
    value: TabsValueEnum.Security,
    component: <div></div>,
  },
  {
    icon: <Ellipsis size="15px" />,
    title: 'Прочее',
    value: TabsValueEnum.Other,
    component: <div></div>,
  },
];

const SettingsPage = () => (
  <Flex
    className="settingsPage"
    direction="column"
    align="start"
    justify="start"
    width="100%"
    height="100%"
  >
    <h1>Настройки</h1>
    <Tabs items={settingsTabs} defaultValue={TabsValueEnum.Stylization} />
  </Flex>
);

export default SettingsPage;
