import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import delayInSeconds from './logic/delay-in-seconds';
import type { AppDispatch } from '../../store/store';
import { statusMessage } from '../../features/uiSlice';
import type { Time, Delay } from '../../types/global-state-types/GlobalTypes';

function useInputValidation(time: Time): Delay {
  const { hour, minute, second } = time;
  const dispatch = useDispatch<AppDispatch>();
  const h: number = hour === '' ? 0 : Number(hour);
  const m: number = minute === '' ? 0 : Number(minute);
  const s: number = second === '' ? 0 : Number(second);

  useEffect(() => {
    if (h > 10000) {
      dispatch(statusMessage('max 10.000 hours'));
    }
    if (m > 59) {
      dispatch(statusMessage('max 59 minutes'));
    }
    if (s > 59) {
      dispatch(statusMessage('max 59 seconds'));
    }
  }, [dispatch, h, m, s]);

  const delay: number | null = delayInSeconds(h, m, s);
  return delay;
}

export default useInputValidation;
