import { useSelector } from 'react-redux';
import type { Theme } from '../../global-types/ThemeTypes.ts';
import type { RootState } from '../../store/store.ts';
import './CountInfo.scss';

function CountInfo() {
  const state: Theme = useSelector(
    (state: RootState): Theme => state.theme.theme
  );
  return (
    <>
      <div id="acext-count-info-ss" className={`acext-${state}-ss`}>
        <div className="acext-count-click-ss">Clicks: {0}</div>
      </div>
    </>
  );
}

export default CountInfo;
