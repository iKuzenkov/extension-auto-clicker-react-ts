import { useDispatch, useSelector } from 'react-redux';
import useSaveElement from './useSaveElement.ts';
import Button from '../ReusableComponents/Button/Button.tsx';
import { statusMessage } from '../../features/uiSlice.ts';
import type { Theme } from '../../types/global-state-types/GlobalTypes.ts';
import type { AppDispatch, RootState } from '../../store/store.ts';
import './SelectTargetButton.scss';
import { useEffect } from 'react';

function SelectTargetButton() {
  const dispatch = useDispatch<AppDispatch>();
  const state: Theme = useSelector((state: RootState): Theme => state.ui.theme);

  const { startSelecting, selectedElement } = useSaveElement();

  useEffect(() => {
    dispatch(
      statusMessage(
        selectedElement !== null ? 'element is selected' : 'select an element'
      )
    );
  }, [selectedElement]);

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
