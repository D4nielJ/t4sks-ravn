import React, { useState, useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import ConfigButtons from './ConfigButtons';
import KanbanColumn from './KanbanColumn';
import { useGetTasks } from '../../lib/apiClient';
import filterTasks from '../../lib/filterTasks';

const Kanban = () => {
  const { isLoading, error, data } = useGetTasks();
  const [tasks, setTasks] = useState({
    working: [],
    inProgress: [],
    done: [],
    cancelled: [],
    backlog: [],
  });

  const { working, inProgress, done, cancelled, backlog } = tasks;

  useEffect(() => {
    if (!isLoading) {
      setTasks(filterTasks(data));
    }
  }, [data, isLoading]);

  if (isLoading) {
    return <div>Is loading</div>;
  }

  if (error) {
    return <div>{error.response.message}</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      <ConfigButtons />
      <SimpleBar>
        <ul className="flex gap-8">
          <KanbanColumn name="Working" tasks={working} />
          <KanbanColumn name="In Progress" tasks={inProgress} />
          <KanbanColumn name="Done" tasks={done} />
          <KanbanColumn name="Cancelled" tasks={cancelled} />
          <KanbanColumn name="Backlog" tasks={backlog} />
        </ul>
      </SimpleBar>
    </div>
  );
};

export default Kanban;
