import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store.ts';
import type { Theme } from '../../types/global-state-types/GlobalTypes.ts';
import './HelperStatus.scss';

function HelperStatus() {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  return (
    <>
      <div id="acext-helper-status-ss" className={`acext-${theme}-ss`}>
        <div className="acext-status-message-ss">Status:</div>
      </div>
    </>
  );
}

export default HelperStatus;
