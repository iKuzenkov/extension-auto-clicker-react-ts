import { useSelector } from 'react-redux';
import { useRef } from 'react';
import useTimeUntilNextClick from '../../hooks/count-down/useTimeUntilNextClick';
import type { RootState } from '../../store/store';
import type { Theme } from '../../types/global-state-types/GlobalTypes';
import './CountDown.scss';

function CountDown() {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  const timeUntilClick: string = useSelector(
    (state: RootState): string => state.logic.timeUntilNextClick
  );

  const countDownState: number = useSelector(
    (state: RootState): number => state.logic.countDown
  );

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useTimeUntilNextClick({ intervalRef, countDownState });

  return (
    <>
      <div id="acext-next-click-ss" className={`acext-${theme}-ss`}>
        <div className="acext-time-next-click-ss">
          Next Click: {timeUntilClick}
        </div>
      </div>
    </>
  );
}

export default CountDown;
