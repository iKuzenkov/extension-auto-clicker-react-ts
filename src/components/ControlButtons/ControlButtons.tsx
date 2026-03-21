import Button from '../ReusableComponents/Button/Button.tsx';
import './ControlButtons.scss';

function ControlButtons() {
  const onStartClick = () => {};
  const onStopClick = () => {};
  const onResetClick = () => {};

  return (
    <>
      <div id="acext-logic-buttons-container-ss">
        <Button onClick={onStartClick} title="▶️ Start" />
        <Button onClick={onStopClick} title="⏹️ Stop" />
        <Button onClick={onResetClick} title="♻️ Reset" />
      </div>
    </>
  );
}

export default ControlButtons;
