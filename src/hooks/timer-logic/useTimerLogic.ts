import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import type {
  SelectedElement,
  Delay,
} from '../../types/global-state-types/GlobalTypes';
import type { RootState } from '../../store/store';

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
        tick();
      }, delay);
    };

    tick();

    return (): void => {
      clear();
    };
  }, [isRunning, selectedElement, delay]);
}
export default useTimerLogic;
