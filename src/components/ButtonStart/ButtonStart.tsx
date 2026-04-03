import { useSelector } from 'react-redux';
import Button from '../ReusableComponents/Button/Button.tsx';
import type { Theme } from '../../types/global-state-types/GlobalTypes.ts';
import type { RootState } from '../../store/store.ts';
import './ButtonStart.scss';

function ButtonStart() {
  const state: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  const onStartClick = () => {
    console.log('Start');
  };

  return (
    <>
      <div id="acext-button-start-ss" className={`acext-${state}-ss`}>
        <Button onClick={onStartClick} title="▶️ Start" />
      </div>
    </>
  );
}

export default ButtonStart;
