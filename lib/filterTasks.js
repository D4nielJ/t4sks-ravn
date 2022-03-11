const statusMap = {
  TODO: 'working',
  IN_PROGRESS: 'inProgress',
  DONE: 'done',
  CANCELLED: 'cancelled',
  BACKLOG: 'backlog',
};

const filterTasks = (tasks) => {
  return tasks.reduce(
    (prev, curr) => {
      prev[statusMap[curr.status]].push(curr);
      return prev;
    },
    {
      working: [],
      inProgress: [],
      done: [],
      cancelled: [],
      backlog: [],
    },
  );
};

export default filterTasks;
