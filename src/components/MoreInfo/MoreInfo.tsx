import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import infoData from './data/infoData';
import Title from './components/Title/Title';
import InfoUse from './components/InfoUse/InfoUse';
import Buttons from './components/Buttons/Buttons';
import type { DataInfo } from './data/TypesData';
import type { Theme } from '../../types/global-state-types/GlobalTypes';
import type { RootState } from '../../store/store';
import './MoreInfo.scss';

function MoreInfo() {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  const [data, setData] = useState<DataInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const timerLoading: number = setTimeout(() => {
      setLoading(true);
    }, 400);

    infoData()
      .then(setData)
      .catch(() => setError(true))
      .finally(() => {
        clearTimeout(timerLoading);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div id="acext-more-info-container-ss">
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
