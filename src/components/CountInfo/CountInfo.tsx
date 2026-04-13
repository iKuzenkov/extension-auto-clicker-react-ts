import { useSelector } from 'react-redux';

import type { RootState } from '../../store/store';
import type { Theme } from '../../types/global-state-types/GlobalTypes';
import './CountInfo.scss';

function CountInfo() {
  const state: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  return (
    <>
      <div id="acext-count-info-ss" className={`acext-${state}-ss`}>
        <div className="acext-count-click-ss">Clicks: {0}</div>
      </div>
    </>
  );
}

export default CountInfo;
