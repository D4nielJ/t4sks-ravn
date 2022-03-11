import React from 'react';
import ConfigButtons from './ConfigButtons';
import KanbanColumn from './KanbanColumn';

const workingTasks = [
  {
    id: '0',
    name: 'Slack',
    tags: ['IOS APP', 'Android'],
    dueDate: 'Date?',
    estimatedTime: 'string of ms',
    userAvatar: 'srcString',
    image: '/images/card-image.jpg',
  },
  {
    id: '1',
    name: 'Google',
    tags: ['Android', 'React'],
    dueDate: 'Date?',
    estimatedTime: 'string of ms',
    userAvatar: 'srcString',
  },
  {
    id: '2',
    name: 'Twitter',
    tags: ['React', 'Native'],
    dueDate: 'Date?',
    estimatedTime: 'string of ms',
    userAvatar: 'srcString',
  },
];

const Kanban = () => {
  return (
    <div className="flex flex-col gap-8">
      <ConfigButtons />
      <ul className="flex gap-8 overflow-x-auto">
        <KanbanColumn name="Working" tasks={workingTasks} />
        <KanbanColumn name="In Progress" tasks={workingTasks} />
        <KanbanColumn name="Done" tasks={workingTasks} />
        <KanbanColumn name="Cancelled" tasks={workingTasks} />
        <KanbanColumn name="Backlog" tasks={workingTasks} />
      </ul>
    </div>
  );
};

export default Kanban;
