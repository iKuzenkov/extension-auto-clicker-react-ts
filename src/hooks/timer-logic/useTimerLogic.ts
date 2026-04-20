import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quantityState } from '../../features/logicSlice';
import type {
  SelectedElement,
  Delay,
} from '../../types/global-state-types/GlobalTypes';
import type { AppDispatch, RootState } from '../../store/store';

function useTimerLogic() {
  const isRunning: boolean = useSelector(
    (state: RootState): boolean => state.logic.isRunningTimerState
  );
  const selectedElement: SelectedElement = useSelector(
    (state: RootState): SelectedElement => state.logic.selectedElement
  );
  const delay: Delay = useSelector(
    (state: RootState): Delay => state.logic.delayInMilliseconds
  );
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const clear = (): void => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    if (!isRunning || !selectedElement || delay === null) {
      clear();
      return;
    }

    const tick = (): void => {
      timerRef.current = setTimeout(() => {
        selectedElement.click();
        dispatch(quantityState());
        tick();
      }, delay);
    };

    tick();

    return (): void => {
      clear();
    };
  }, [dispatch, isRunning, selectedElement, delay]);
}
export default useTimerLogic;
