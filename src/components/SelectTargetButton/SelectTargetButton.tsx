import { useSelector } from 'react-redux';
import useSaveElement from '../../hooks/save-element/useSaveElement';
import Button from '../ReusableComponents/Button/Button.tsx';
import type { Theme } from '../../types/global-state-types/GlobalTypes';
import type { RootState } from '../../store/store';
import './SelectTargetButton.scss';

function SelectTargetButton() {
  const state: Theme = useSelector((state: RootState): Theme => state.ui.theme);

  const { startSelecting } = useSaveElement();

  return (
    <>
      <div
        id="acext-select-target-button-container-ss"
        className={`acext-${state}-ss`}
      >
        <Button onClick={startSelecting} title="🎯 Select Target" />
      </div>
    </>
  );
}

export default SelectTargetButton;
