import { useSelector } from 'react-redux';
import type { RootState } from '../../../../store/store';
import type { Theme } from '../../../../types/global-state-types/GlobalTypes';
import type { Props, Element } from './Types';

import './InfoUse.scss';

function InfoUse(props: Props) {
  const { info } = props;

  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  return (
    <>
      <div id="acext-info-use-ss" className={`acext-${theme}-ss`} tabIndex={-1}>
        <ol className="acext-info-use-ol-ss" tabIndex={-1}>
          {info.map(({ id, text }: Element) => (
            <li
              key={id}
              className={`acext-list-of-li-ss acext-${theme}-ss`}
              tabIndex={0}
            >
              {text}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default InfoUse;
