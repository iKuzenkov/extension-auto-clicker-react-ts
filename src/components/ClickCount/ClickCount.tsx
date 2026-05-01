import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import type { Theme } from '../../types/global-state-types/GlobalTypes';
import './ClickCount.scss';

function ClickCount() {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  const quantityClicks: number = useSelector(
    (state: RootState): number => state.logic.quantityClicks
  );

  return (
    <>
      <div id="acext-count-info-ss" className={`acext-${theme}-ss`}>
        <div
          className={`acext-count-click-ss acext-${theme}-ss`}
          tabIndex={0}
          title="Quantity of clicks"
        >
          Clicks: {quantityClicks}
        </div>
      </div>
    </>
  );
}

export default ClickCount;
