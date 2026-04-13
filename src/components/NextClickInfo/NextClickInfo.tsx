import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import type { Theme } from '../../types/global-state-types/GlobalTypes';
import './NextClickInfo.scss';

function NextClickInfo() {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  return (
    <>
      <div id="acext-next-click-ss" className={`acext-${theme}-ss`}>
        <div className="acext-time-next-click-ss">Next click:</div>
      </div>
    </>
  );
}

export default NextClickInfo;
