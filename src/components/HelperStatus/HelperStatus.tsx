import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import type {
  Theme,
  Message,
} from '../../types/global-state-types/GlobalTypes';
import './HelperStatus.scss';

function HelperStatus() {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  const message: Message = useSelector(
    (state: RootState): Message => state.ui.message
  );

  return (
    <>
      <div id="acext-helper-status-ss" className={`acext-${theme}-ss`}>
        <div
          className={`acext-status-message-ss acext-${theme}-ss`}
          tabIndex={0}
          title="Work status"
        >
          Status: {message}
        </div>
      </div>
    </>
  );
}

export default HelperStatus;
