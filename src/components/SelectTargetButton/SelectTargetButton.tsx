import { useSelector } from 'react-redux';
import useSaveElement from '../../hooks/save-element/useSaveElement';
import Button from '../ReusableComponents/Button/Button';
import type { Theme } from '../../types/global-state-types/GlobalTypes';
import type { RootState } from '../../store/store';
import './SelectTargetButton.scss';

function SelectTargetButton() {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);

  const { startSelecting } = useSaveElement();

  return (
    <>
      <div
        id="acext-select-target-button-container-ss"
        className={`acext-${theme}-ss`}
      >
        <Button
          text="🎯 Select Target"
          title="Select a target"
          cursor="pointer"
          theme={theme}
          onClick={startSelecting}
        />
      </div>
    </>
  );
}

export default SelectTargetButton;
