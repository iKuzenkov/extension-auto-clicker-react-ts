import { useSelector } from 'react-redux';
import Button from '../ReusableComponents/Button/Button.tsx';
import type { Theme } from '../../types/global-state-types/GlobalTypes';
import type { RootState } from '../../store/store';
import './ButtonReset.scss';

function ButtonReset() {
  const state: Theme = useSelector((state: RootState): Theme => state.ui.theme);

  const onResetClick = () => {};

  return (
    <>
      <div id="acext-button-reset-ss" className={`acext-${state}-ss`}>
        <Button onClick={onResetClick} title="▶️ Reset" />
      </div>
    </>
  );
}

export default ButtonReset;
