import { Accordion } from 'radix-ui';

interface taskSectionDataInterface {
  title: string;
}

interface Props {
  taskSectionData: taskSectionDataInterface;
}

export const UpcomingTaskBlock = ({ taskSectionData }: Props) => {
  const { title } = taskSectionData;

  return (
    <Accordion.Item value={title}>
      <Accordion.Trigger>{title}</Accordion.Trigger>
      <Accordion.Content></Accordion.Content>
    </Accordion.Item>
  );
};
