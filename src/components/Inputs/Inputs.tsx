import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Field from '../ReusableComponents/Field/Field';
import useInputValidation from '../../hooks/input-validation/useInputValidation';
import useTimeStorage from '../../storage/useTimeStorage';
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
  const dispatch = useDispatch<AppDispatch>();

  const [time, setTime] = useState<Time>(() => {
    const saved: string | null = localStorage.getItem('time');
    if (!saved) {
      return { hour: '', minute: '', second: '' };
    }

    try {
      return JSON.parse(saved);
    } catch {
      return { hour: '', minute: '', second: '' };
    }
  });

  useTimeStorage(time);

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
            value={time.hour}
            setTime={setTime}
            placeholder="h"
          />
          <Field
            name="minute"
            value={time.minute}
            setTime={setTime}
            placeholder="m"
          />
          <Field
            name="second"
            value={time.second}
            setTime={setTime}
            placeholder="s"
          />
        </div>
      </div>
    </>
  );
}

export default Inputs;
