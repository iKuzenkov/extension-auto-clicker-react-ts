import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { statusMessage } from '../../../../features/uiSlice';
import type { AppDispatch, RootState } from '../../../../store/store';
import type {
  Theme,
  Message,
} from '../../../types/global-state-types/GlobalTypes';
import './HelperStatus.scss';

function HelperStatus() {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  const message: Message = useSelector(
    (state: RootState): Message => state.ui.message
  );

  const isRunning: boolean = useSelector(
    (state: RootState): boolean => state.logic.isRunningTimerState
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(statusMessage(isRunning ? 'working...' : message));
  }, [dispatch, isRunning, message]);

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
