import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusMessage } from '../../features/uiSlice';
import { resetLogicState } from '../../features/logicSlice';
import Button from '../ReusableComponents/Button/Button';
import type { AppDispatch, RootState } from '../../store/store';
import type { Theme } from '../../types/global-state-types/GlobalTypes';
import './ButtonReset.scss';

function ButtonReset() {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  const dispatch = useDispatch<AppDispatch>();

  const onResetClick = useCallback(() => {
    dispatch(resetLogicState());
    dispatch(statusMessage('select a target'));
  }, [dispatch]);

  return (
    <>
      <div id="acext-button-reset-ss" className={`acext-${theme}-ss`}>
        <Button
          text="♻️ Reset"
          onClick={onResetClick}
          title="Reset"
          theme={theme}
          cursor="pointer"
        />
      </div>
    </>
  );
}

export default ButtonReset;
