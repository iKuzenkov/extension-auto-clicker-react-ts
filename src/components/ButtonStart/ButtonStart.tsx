import { useSelector } from 'react-redux';
import Button from '../ReusableComponents/Button/Button';
import type { Theme } from '../../types/global-state-types/GlobalTypes';
import type { RootState } from '../../store/store';
import './ButtonStart.scss';

function ButtonStart() {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  const selectedElement = useSelector(
    (state: RootState) => state.logic.selectedElement
  );
  const delay = useSelector((state: RootState) => state.logic.delayInSeconds);

  const onStartClick = () => {
    console.log('Start', selectedElement);
    console.log('delay', delay);
  };

  return (
    <>
      <div id="acext-button-start-ss" className={`acext-${theme}-ss`}>
        <Button onClick={onStartClick} title="▶️ Start" />
      </div>
    </>
  );
}

export default ButtonStart;
