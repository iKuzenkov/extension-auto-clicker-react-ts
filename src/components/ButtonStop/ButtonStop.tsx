import { useSelector } from 'react-redux';
import Button from '../ReusableComponents/Button/Button';
import type { Theme } from '../../types/global-state-types/GlobalTypes';
import type { RootState } from '../../store/store';
import './ButtonStop.scss';

function ButtonStop() {
  const state: Theme = useSelector((state: RootState): Theme => state.ui.theme);

  const onStopClick = () => {};

  return (
    <>
      <div id="acext-button-stop-ss" className={`acext-${state}-ss`}>
        <Button onClick={onStopClick} title="▶️ Stop" />
      </div>
    </>
  );
}

export default ButtonStop;
