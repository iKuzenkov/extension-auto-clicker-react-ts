import Title from './components/Title/Title';
import InfoUse from './components/InfoUse/InfoUse';
import Buttons from './components/Buttons/Buttons';
import { dataInfo } from './data';
import './MoreInfo.scss';

function MoreInfo() {
  return (
    <>
      <div id="acext-more-info-container-ss">
        <div id="acext-grid-layout-more-info-ss">
          <Title title={dataInfo.title} />
          <InfoUse info={dataInfo.info} />
          <Buttons />
        </div>
      </div>
    </>
  );
}

export default MoreInfo;
