import React from 'react';
import { Box, Flex, Radio, Text } from '@radix-ui/themes';

import { TaskPriorityEnum } from '@enums/task-priority.enum';
import { TaskStatusEnum } from '@enums/task-status.enum';
import { createClassName } from '@utils/create-class-name.ts';

import { CalendarDateInterface } from '../interfaces/interfaces';

const getIsTaskImportant = (taskStatus: TaskPriorityEnum) => taskStatus === TaskPriorityEnum.Important;

export const CalendarTableCellTasks = ({ tasks }: Pick<CalendarDateInterface, 'tasks'>) => {
  return (
    <>
      <ul className="table__cell-list">
        {tasks.map((task, index) => {
          if (index > 1) {
            return <React.Fragment key={index} />;
          }

          return (
            <Box key={task.id} className="table__cell-task">
              <Flex align="center" gap="1">
                <Radio
                  size="1"
                  value={task.title}
                  checked={task.status === TaskStatusEnum.Done}
                  variant="soft"
                  className={createClassName({
                    condition: getIsTaskImportant(task.priority),
                    value: 'important',
                  })}
                />
                <Text as="label" size="1" className="table__cell-task-title">
                  {task.title}
                </Text>
              </Flex>
            </Box>
          );
        })}
      </ul>
      {tasks.length > 2 && (
        <Text size="1" color="gray">
          +{tasks.length - 2}
        </Text>
      )}
    </>
  );
};
