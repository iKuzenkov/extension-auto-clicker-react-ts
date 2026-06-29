import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInputValidation from '../../../hooks/input-validation/useInputValidation';
import { delayForTimer } from '../../../../features/logicSlice';
import Input from '../../../ui/Fields/Fields';
import type { AppDispatch, RootState } from '../../../../store/store';
import type {
  Theme,
  Time,
  Delay,
} from '../../../types/global-state-types/GlobalTypes';
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
          <Input
            name="hour"
            value={time.hour}
            aria-label="enter from one hour to ten thousand hours"
            title="hours"
            placeholder="h"
          />
          <Input
            name="minute"
            value={time.minute}
            aria-label="enter between one and fifty-nine minutes"
            title="minutes"
            placeholder="m"
          />
          <Input
            name="second"
            value={time.second}
            aria-label="enter between one and fifty-nine seconds"
            title="seconds"
            placeholder="s"
          />
        </div>
      </div>
    </>
  );
}

export default Inputs;
