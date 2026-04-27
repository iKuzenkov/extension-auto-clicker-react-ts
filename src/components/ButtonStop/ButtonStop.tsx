import { useDispatch, useSelector } from 'react-redux';
import {
  timerState,
  timeUntilNextClickResult,
  setCountDown,
} from '../../features/logicSlice';
import { statusMessage } from '../../features/uiSlice';
import Button from '../ReusableComponents/Button/Button';
import type { Theme } from '../../types/global-state-types/GlobalTypes';
import type { AppDispatch, RootState } from '../../store/store';
import './ButtonStop.scss';
import { useCallback } from 'react';

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
          title="Stop"
          cursor="pointer"
          theme={theme}
          onClick={onStopClick}
        />
      </div>
    </>
  );
}

export default ButtonStop;
