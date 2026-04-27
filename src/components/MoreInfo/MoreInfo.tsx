import { useSelector } from 'react-redux';
import Title from './components/Title/Title';
import InfoUse from './components/InfoUse/InfoUse';
import Buttons from './components/Buttons/Buttons';
import { dataInfo } from './data/data';
import type { Theme } from '../../types/global-state-types/GlobalTypes';
import type { RootState } from '../../store/store';
import './MoreInfo.scss';

function MoreInfo() {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  return (
    <>
      <div id="acext-more-info-container-ss">
        <div
          id="acext-grid-layout-more-info-ss"
          className={`acext-${theme}-ss`}
        >
          <Title title={dataInfo.title} />
          <InfoUse info={dataInfo.info} />
          <Buttons />
        </div>
      </div>
    </>
  );
}

export default MoreInfo;
