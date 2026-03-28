import { useSelector } from 'react-redux';
import Button from '../ReusableComponents/Button/Button.tsx';
import type { Theme } from '../../global-types/ThemeTypes.ts';
import type { RootState } from '../../store/store.ts';
import './ControlButtons.scss';

function ControlButtons() {
  const state: Theme = useSelector(
    (state: RootState): Theme => state.theme.theme
  );

  const onStartClick = () => {};
  const onStopClick = () => {};
  const onResetClick = () => {};

  return (
    <>
      <div
        id="acext-logic-buttons-container-ss"
        className={`acext-${state}-ss`}
      >
        <Button onClick={onStartClick} title="▶️ Start" />
        <Button onClick={onStopClick} title="⏹️ Stop" />
        <Button onClick={onResetClick} title="♻️ Reset" />
      </div>
    </>
  );
}

export default ControlButtons;
