import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusMessage } from '../../../features/uiSlice';
import delayForCookieClicker from './logic/delayForCookieClicker';
import type { AppDispatch, RootState } from '../../../store/store';
import type { Delay } from '../../types/global-state-types/GlobalTypes';

function useCookieLogic(quantity: string) {
  const numberOfClicks: number = quantity === '' ? 0 : Number(quantity);
  const delay: Delay = useSelector(
    (state: RootState): Delay => state.logic.delayInMilliseconds
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (numberOfClicks === 0 || numberOfClicks > 1000) {
      dispatch(statusMessage('enter from 1 to 1000'));
    }
    if (numberOfClicks >= 1 && numberOfClicks <= 1000) {
      dispatch(statusMessage('number of clicks inputting'));
    }
  }, [dispatch, numberOfClicks]);

  return delayForCookieClicker(delay, numberOfClicks);
}

export default useCookieLogic;
