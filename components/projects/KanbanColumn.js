import React from 'react';
import { Heading, Text } from '../shared';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import TaskCard from './TaskCard';

const KanbanColumn = ({ name, tasks }) => {
  return (
    <li className="w-[320px] flex-shrink-0">
      {/* ColumnHeader */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <Heading type="Heading" className="mr-2 inline-block">
            {name}
          </Heading>
          <Text as="span">({tasks.length})</Text>
        </div>
        <span className="text-2xl text-neutral-light">
          <HiOutlineDotsHorizontal />
        </span>
      </div>

      {/* Tasks */}
      <ul className="flex flex-col gap-4 ">
        {tasks && tasks.map((t) => <TaskCard key={t.id} task={t} />)}
      </ul>
    </li>
  );
};

export default KanbanColumn;
