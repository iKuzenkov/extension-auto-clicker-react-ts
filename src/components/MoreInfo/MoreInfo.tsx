import Title from './components/Title/Title.tsx';
import InfoUse from './components/InfoUse/InfoUse.tsx';
import Buttons from './components/Buttons/Buttons.tsx';
import { dataInfo } from './data.ts';
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
