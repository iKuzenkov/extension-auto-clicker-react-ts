import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import { statusMessage } from '../../features/uiSlice';
import type { Time } from '../../types/global-state-types/GlobalTypes';

function useInputValidation(time: Time) {
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
  if (h > 10000 || m > 59 || s > 59) return null;

  return h * 3600 + m * 60 + s;
}

export default useInputValidation;
