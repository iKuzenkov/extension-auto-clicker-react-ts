import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import useSetPanelPosition from '../../../storage/panel-position/useSetPanelPosition';
import infoData from './data/infoData';
import Title from './components/Title/Title';
import InfoUse from './components/InfoUse/InfoUse';
import Buttons from './components/Buttons/Buttons';
import type { Theme } from '../../../shared/types/global-state-types/GlobalTypes';
import type { RootState } from '../../../store/store';
import './MoreInfo.scss';

function MoreInfo() {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  const panelRef = useRef<HTMLDivElement>(null);

  useSetPanelPosition({ panelRef });

  const {
    data,
    isPending: loading,
    isError: error,
  } = useQuery({
    queryKey: ['more-info'],
    queryFn: infoData,
  });

  return (
    <>
      <div id="acext-more-info-container-ss" ref={panelRef}>
        {loading && <div>Loading...</div>}
        {error && <div>Failed to load data</div>}
        {data && (
          <div
            id="acext-grid-layout-more-info-ss"
            className={`acext-${theme}-ss`}
          >
            <Title title={data.title} />
            <InfoUse info={data.info} />
            <Buttons />
          </div>
        )}
      </div>
    </>
  );
}
export default MoreInfo;
