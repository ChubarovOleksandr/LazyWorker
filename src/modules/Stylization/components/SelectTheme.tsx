import { Checkbox, Flex, Select, Text } from '@radix-ui/themes';
import { observer } from 'mobx-react-lite';

import { themeStore } from '@store/themeStore.ts';
import { AppThemeEnum } from '@enums/appTheme.ts';
import { isBoolean } from '@utils/format.ts';

const themeOptions: { value: AppThemeEnum; label: string }[] = [
  { value: AppThemeEnum.Light, label: 'Светлая' },
  { value: AppThemeEnum.Dark, label: 'Тёмная' },
];

export const SelectTheme = observer(() => {
  const handleChange = (value: boolean | string) => {
    if (!isBoolean(value)) {
      return;
    }

    void themeStore.setPersistToAccount(value);
  };

  return (
    <div className="theme">
      <h2>Выбор темы</h2>
      <h3>Выберите тему оформления вашего приложения</h3>

      <Flex direction="column" gap="3" mt="3">
        <Flex direction="column" gap="1">
          <Text size="2" weight="medium">
            Тема
          </Text>
          <Select.Root
            value={themeStore.theme}
            onValueChange={v => void themeStore.setTheme(v as AppThemeEnum)}
            size="2"
          >
            <Select.Trigger className="theme__select-trigger" />
            <Select.Content position="popper">
              <Select.Group>
                {themeOptions.map(({ value, label }) => (
                  <Select.Item key={value} value={value}>
                    <Text size="2">{label}</Text>
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </Flex>

        <Flex direction="column" gap="1">
          <Text as="label" size="2">
            <Flex align="center" gap="2">
              <Checkbox checked={themeStore.persistToAccount} onCheckedChange={handleChange} />
              Сохранять тему на аккаунт
            </Flex>
          </Text>
          <Text size="1" className="theme__hint">
            'Если включено, тема хранится в настройках пользователя для всех устройств. Иначе —
            только в этом браузере локально
          </Text>
        </Flex>
      </Flex>
    </div>
  );
});
