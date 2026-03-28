import { useSelector } from 'react-redux';
import Button from '../ReusableComponents/Button/Button.tsx';
import type { Theme } from '../../types/global-state-types/ThemeTypes.ts';
import type { RootState } from '../../store/store.ts';
import './SelectTargetButton.scss';

function SelectTargetButton() {
  const state: Theme = useSelector((state: RootState): Theme => state.ui.theme);

  const targetElement = () => {};

  return (
    <>
      <div
        id="acext-select-target-button-container-ss"
        className={`acext-${state}-ss`}
      >
        <Button onClick={targetElement} title="🎯 Select Target" />
      </div>
    </>
  );
}

export default SelectTargetButton;
