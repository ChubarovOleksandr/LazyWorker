import { Checkbox, Flex, Text } from '@radix-ui/themes';
import { observer } from 'mobx-react-lite';

import { settingsStore } from '@store/settingsStore';
import { UserSettingsInterface } from '@interfaces/userDocumentType';
import { UserSettingsFieldsEnum } from '@enums/user-settings-fields.enum';

export const SearchPageStylization = observer(() => {
  const { userSettings } = settingsStore;

  const {
    [UserSettingsFieldsEnum.ShouldShowTimeOnSearchPage]: shouldShowTimeOnSearchPage,
    [UserSettingsFieldsEnum.ShouldShowASCIIOnSearchPage]: shouldShowASCIIOnSearchPage,
  } = userSettings;

  const handleChangeSetting = (newSettings: UserSettingsInterface) => {
    settingsStore.setSettings(newSettings);
  };

  return (
    <div className="search-page-stylization">
      <h2>Оформление поисковой страницы</h2>
      <h3>Настройте внешний вид вашей поисковой страницы для всех устройств этого аккаунта</h3>

      <Flex direction="column" gap="3" mt="3">
        <Flex direction="column" gap="1">
          <Text as="label" size="2">
            <Flex align="center" gap="2">
              <Checkbox
                checked={shouldShowASCIIOnSearchPage}
                onCheckedChange={() =>
                  handleChangeSetting({
                    ...userSettings,
                    [UserSettingsFieldsEnum.ShouldShowASCIIOnSearchPage]:
                      !shouldShowASCIIOnSearchPage,
                  })
                }
              />
              Отображать ASCII рисунки
            </Flex>
          </Text>
          <Text size="1" className="theme__hint">
            Если включено, будет отображать заготовленные рисунки сделанные с помощью символов. Вы
            сможете добавлять свои собственные рисунки в скором времени
          </Text>
        </Flex>

        <Text as="label" size="2">
          <Flex align="center" gap="2">
            <Checkbox
              checked={shouldShowTimeOnSearchPage}
              onCheckedChange={() =>
                handleChangeSetting({
                  ...userSettings,
                  [UserSettingsFieldsEnum.ShouldShowTimeOnSearchPage]: !shouldShowTimeOnSearchPage,
                })
              }
            />
            Отображать текущее время
          </Flex>
        </Text>
      </Flex>
    </div>
  );
});
