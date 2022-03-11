import React from 'react';
import SimpleBar from 'simplebar-react';
import ConfigButtons from './ConfigButtons';
import KanbanColumn from './KanbanColumn';

const workingTasks = [
  {
    id: '0',
    name: 'Slack',
    tags: ['IOS APP', 'Android'],
    dueDate: 'Tomorrow', // DateObject?
    estimatedTime: '05:00', // String of ms?
    userAvatar: 'srcString',
    image: '/images/card-image.jpg',
  },
  {
    id: '1',
    name: 'Google',
    tags: ['Android', 'React'],
    dueDate: '6 July, 2020',
    estimatedTime: '10:00',
    userAvatar: 'srcString',
  },
  {
    id: '2',
    name: 'Twitter',
    tags: ['React', 'Native'],
    dueDate: 'Yesterday',
    estimatedTime: '30:00',
    userAvatar: 'srcString',
  },
  {
    id: '3',
    name: 'Slack',
    tags: ['IOS APP', 'Android'],
    dueDate: 'Tomorrow', // DateObject?
    estimatedTime: '05:00', // String of ms?
    userAvatar: 'srcString',
    image: '/images/card-image.jpg',
  },
];

const inProgressTasks = [
  {
    id: '1',
    name: 'Google',
    tags: ['Android', 'React'],
    dueDate: '6 July, 2020',
    estimatedTime: '10:00',
    userAvatar: 'srcString',
  },
  {
    id: '0',
    name: 'Slack',
    tags: ['IOS APP', 'Android'],
    dueDate: 'Tomorrow', // DateObject?
    estimatedTime: '05:00', // String of ms?
    userAvatar: 'srcString',
    image: '/images/card-image.jpg',
  },
];

const Kanban = () => {
  return (
    <div className="flex flex-col gap-8">
      <ConfigButtons />
      <SimpleBar>
        <ul className="flex gap-8">
          <KanbanColumn name="Working" tasks={workingTasks} />
          <KanbanColumn name="In Progress" tasks={inProgressTasks} />
          <KanbanColumn name="Done" tasks={workingTasks} />
          <KanbanColumn name="Cancelled" tasks={workingTasks} />
          <KanbanColumn name="Backlog" tasks={inProgressTasks} />
        </ul>
      </SimpleBar>
    </div>
  );
};

export default Kanban;
