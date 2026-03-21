import Button from '../ReusableComponents/Button/Button.tsx';
import './SelectTargetButton.scss';

function SelectTargetButton() {
  const targetElement = () => {};

  return (
    <>
      <div id="acext-select-target-button-container-ss">
        <Button onClick={targetElement} title="🎯 Select Target" />
      </div>
    </>
  );
}

export default SelectTargetButton;
