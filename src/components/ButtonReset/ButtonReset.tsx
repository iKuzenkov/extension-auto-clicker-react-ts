import { useDispatch, useSelector } from 'react-redux';
import Button from '../ReusableComponents/Button/Button';
import { statusMessage } from '../../features/uiSlice';
import { resetLogicState } from '../../features/logicSlice';
import type { Theme } from '../../types/global-state-types/GlobalTypes';
import type { AppDispatch, RootState } from '../../store/store';
import './ButtonReset.scss';
import { useCallback } from 'react';

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
          title="Reset"
          cursor="pointer"
          theme={theme}
          onClick={onResetClick}
        />
      </div>
    </>
  );
}

export default ButtonReset;
