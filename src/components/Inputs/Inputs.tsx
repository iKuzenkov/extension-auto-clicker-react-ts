import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Field from '../ReusableComponents/Field/Field';
import useInputValidation from '../../hooks/input-validation/useInputValidation';
import { delayForTimer } from '../../features/logicSlice';
import type { AppDispatch, RootState } from '../../store/store';
import type {
  Theme,
  Time,
  Delay,
} from '../../types/global-state-types/GlobalTypes';
import './Inputs.scss';

function Inputs() {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  const time: Time = useSelector(
    (state: RootState): Time => state.logic.entryInput
  );
  const dispatch = useDispatch<AppDispatch>();

  const delayInMilliseconds: Delay = useInputValidation(time);

  useEffect(() => {
    dispatch(delayForTimer(delayInMilliseconds));
  }, [dispatch, delayInMilliseconds]);

  return (
    <>
      <div id="acext-inputs-container-ss" className={`acext-${theme}-ss`}>
        <div className="acext-timer-inputs-ss">
          <Field
            name="hour"
            title="hours"
            aria-label="enter from one hour to ten thousand hours"
            value={time.hour}
            placeholder="h"
          />
          <Field
            name="minute"
            title="minutes"
            aria-label="enter between one and fifty-nine minutes"
            value={time.minute}
            placeholder="m"
          />
          <Field
            name="second"
            title="seconds"
            aria-label="enter between one and fifty-nine seconds"
            value={time.second}
            placeholder="s"
          />
        </div>
      </div>
    </>
  );
}

export default Inputs;
