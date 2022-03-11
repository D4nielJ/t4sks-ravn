import { MdMenu, MdOutlineDashboard } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';

const ConfigButtons = () => {
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
        <button type="button" className="rounded-xl bg-icon-critical p-2">
          <span className="text-2xl text-textOn">
            <AiOutlinePlus />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ConfigButtons;
