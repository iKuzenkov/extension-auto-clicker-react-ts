import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  timerState,
  timeUntilNextClickResult,
  setCountDown,
} from '../../features/logicSlice';
import { statusMessage } from '../../features/uiSlice';
import Button from '../ReusableComponents/Button/Button';
import type { AppDispatch, RootState } from '../../store/store';
import type { Theme } from '../../types/global-state-types/GlobalTypes';
import './ButtonStop.scss';

function ButtonStop() {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  const dispatch = useDispatch<AppDispatch>();

  const onStopClick = useCallback(() => {
    dispatch(timerState(false));
    dispatch(statusMessage('stopped'));
    dispatch(setCountDown(0));
    dispatch(timeUntilNextClickResult('00h:00m:00s'));
  }, [dispatch]);

  return (
    <>
      <div id="acext-button-stop-ss" className={`acext-${theme}-ss`}>
        <Button
          text="⏹️ Stop"
          onClick={onStopClick}
          title="Stop"
          theme={theme}
          cursor="pointer"
        />
      </div>
    </>
  );
}

export default ButtonStop;
