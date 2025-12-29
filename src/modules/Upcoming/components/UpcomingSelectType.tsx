import { Box, Flex, Select, Text } from '@radix-ui/themes';

const defaultSelectOption = 'Все';
const selectorMockData = ['Учеба', 'Работа', 'Хобби'];

export const UpcomingSelectType = () => {
  return (
    <Box mt={'1'} pb={'1'} className="upcoming__type-selector-wrapper">
      <Select.Root defaultValue={defaultSelectOption} size={'1'}>
        <Select.Trigger className="upcoming__type-selector-trigger" />
        <Select.Content>
          <Select.Group>
            <Select.Item value={defaultSelectOption}>
              <Flex justify={'center'} align={'center'} gap={'1'} pr={'1'}>
                <Text size="1">{defaultSelectOption}</Text>
              </Flex>
            </Select.Item>
            {selectorMockData.map(option => (
              <Select.Item value={option} key={option}>
                <Text size="1">{option}</Text>
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Box>
  );
};
