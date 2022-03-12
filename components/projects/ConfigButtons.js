import { useMutation, useQueryClient } from 'react-query';
import { MdMenu, MdOutlineDashboard } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import { addTask } from '../../lib/apiClient';

const ConfigButtons = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(addTask, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('tasks');
    },
  });

  return (
    <div className="flex justify-between">
      <div className="rounded-xl bg-neutral-dark">
        <button type="button" className="rounded-l-xl p-2">
          <span className="text-2xl text-neutral-lighter">
            <MdMenu />
          </span>
        </button>
        <button
          type="button"
          className="rounded-xl border border-border-critical-default bg-surface-critical-default p-2">
          <span className="text-2xl text-critical">
            <MdOutlineDashboard />
          </span>
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            mutation.mutate({
              assigneeId: 'd923f8f3-49d8-4edb-9738-929eea1dccec',
              dueDate: '2022-04-13T04:47:19.889Z',
              name: 'MY CANCELLED TASK',
              pointEstimate: 'EIGHT',
              status: 'CANCELLED',
              tags: ['ANDROID', 'REACT'],
            });
          }}
          type="button"
          className="rounded-xl bg-icon-critical p-2">
          <span className="text-2xl text-textOn">
            <AiOutlinePlus />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ConfigButtons;
