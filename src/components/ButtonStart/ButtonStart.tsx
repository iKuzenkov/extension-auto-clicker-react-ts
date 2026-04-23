import { useDispatch, useSelector } from 'react-redux';
import useTimerLogic from '../../hooks/timer-logic/useTimerLogic';
import { timerState } from '../../features/logicSlice';
import { statusMessage } from '../../features/uiSlice';
import Button from '../ReusableComponents/Button/Button';
import type {
  Theme,
  Delay,
  SelectedElement,
} from '../../types/global-state-types/GlobalTypes';
import type { AppDispatch, RootState } from '../../store/store';
import './ButtonStart.scss';
import { useCallback } from 'react';

function ButtonStart() {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  const delay: Delay = useSelector(
    (state: RootState): Delay => state.logic.delayInMilliseconds
  );
  const selectedElement: SelectedElement = useSelector(
    (state: RootState): SelectedElement => state.logic.selectedElement
  );
  const dispatch = useDispatch<AppDispatch>();

  const onStartClick = useCallback(() => {
    if (selectedElement === null) {
      dispatch(statusMessage('target not selected'));
      return;
    }
    if (delay === null || delay === 0) {
      dispatch(statusMessage('enter time'));
      return;
    }
    dispatch(timerState(true));
    dispatch(statusMessage('working...'));
  }, [dispatch, selectedElement, delay]);

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
