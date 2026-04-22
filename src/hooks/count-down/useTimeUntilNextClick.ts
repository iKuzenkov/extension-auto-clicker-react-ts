import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import timeNormalization from './logic/time-normalization';
import {
  decreaseCountDown,
  timeUntilNextClickResult,
} from '../../features/logicSlice';
import type { AppDispatch } from '../../store/store';
import { type RefObject } from 'react';

type Props = {
  intervalRef: RefObject<ReturnType<typeof setInterval> | null>;
  countDownState: number;
};

function useTimeUntilNextClick(props: Props): void {
  const { intervalRef, countDownState } = props;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const clear = (): void => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    if (countDownState <= 0) {
      clear();
      return;
    }

    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      dispatch(decreaseCountDown());
    }, 1000);

    dispatch(timeUntilNextClickResult(timeNormalization(countDownState)));

    return (): void => {
      clear();
    };
  }, [dispatch, intervalRef, countDownState]);
}
export default useTimeUntilNextClick;
