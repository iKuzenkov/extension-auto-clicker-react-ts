import { useDispatch, useSelector } from 'react-redux';
import useTimerLogic from '../../hooks/timer-logic/useTimerLogic';
import { timerState } from '../../features/logicSlice';
import { statusMessage } from '../../features/uiSlice';
import Button from '../ReusableComponents/Button/Button';
import type { Theme } from '../../types/global-state-types/GlobalTypes';
import type { AppDispatch, RootState } from '../../store/store';
import './ButtonStart.scss';

function ButtonStart() {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  const dispatch = useDispatch<AppDispatch>();

  const onStartClick = (): void => {
    dispatch(timerState(true));
    dispatch(statusMessage('working...'));
  };

  useTimerLogic();

  return (
    <>
      <div id="acext-button-start-ss" className={`acext-${theme}-ss`}>
        <Button onClick={onStartClick} title="▶️ Start" />
      </div>
    </>
  );
}

export default ButtonStart;
