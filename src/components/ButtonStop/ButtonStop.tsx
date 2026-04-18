import { useDispatch, useSelector } from 'react-redux';
import Button from '../ReusableComponents/Button/Button';
import type { Theme } from '../../types/global-state-types/GlobalTypes';
import type { AppDispatch, RootState } from '../../store/store';
import './ButtonStop.scss';
import { timerState } from '../../features/logicSlice';

function ButtonStop() {
  const state: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  const dispatch = useDispatch<AppDispatch>();

  const onStopClick = () => {
    dispatch(timerState(false));
    console.log('onStopClick');
  };

  return (
    <>
      <div id="acext-button-stop-ss" className={`acext-${state}-ss`}>
        <Button onClick={onStopClick} title="▶️ Stop" />
      </div>
    </>
  );
}

export default ButtonStop;
